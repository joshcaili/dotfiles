-- Persistence Logic
local settings_path = vim.fn.stdpath("state") .. "/oil_settings.json"

--- Write oil_settings.json synchronously. Used on exit because `vim.schedule` may not run before the process exits.
local function save_oil_settings_immediate()
  local data = {
    oil_preferred_mode = vim.g.oil_preferred_mode,
  }
  local ok, config = pcall(require, "oil.config")
  if ok and config and config.view_options then
    data.show_hidden = config.view_options.show_hidden
    data.sort = config.view_options.sort
  end
  local file = io.open(settings_path, "w")
  if file then
    file:write(vim.fn.json_encode(data))
    file:close()
  end
end

local function save_oil_settings()
  -- Defer so oil's internal state matches the action that just ran (e.g. g., gs)
  vim.schedule(function()
    save_oil_settings_immediate()
  end)
end

-- Save settings whenever we leave an oil buffer
vim.api.nvim_create_autocmd("BufLeave", {
  pattern = "oil://*",
  callback = save_oil_settings,
})

-- Flush on quit: scheduled saves from BufLeave / keymaps may never run before exit
vim.api.nvim_create_autocmd("VimLeavePre", {
  callback = save_oil_settings_immediate,
})

local function load_oil_settings()
  local file = io.open(settings_path, "r")
  if file then
    local content = file:read("*all")
    file:close()
    local ok, decoded = pcall(vim.fn.json_decode, content)
    if ok then return decoded end
  end
  return nil
end

-- Helper Functions
local function split_str(inputstr, sep)
	if sep == nil then sep = "%s" end
	local t = {}
	for str in string.gmatch(inputstr, "([^" .. sep .. "]+)") do
		table.insert(t, str)
	end
	return t
end

local function join(tbl, separator)
	if type(tbl) == "string" then return tbl end
	local joined_string = ""
	for _, table_section in pairs(tbl or {}) do
		joined_string = joined_string .. separator .. table_section
	end
	return joined_string
end

local function filter(unfiltered_table, filter_function)
	local filtered_table = {}
	for _, table_element in pairs(unfiltered_table) do
		local filter_result = filter_function(table_element)
		if (filter_result ~= nil) then
			table.insert(filtered_table, filter_result)
		end
	end
	return filtered_table
end

local function copy_into(tbl, table_to_merge)
	tbl = tbl ~= nil and tbl or {}
	for k, v in pairs(table_to_merge) do
		if (type(v) == "table") then
			tbl[k] = copy_into(tbl[k], v)
		else
			tbl[k] = v
		end
	end
	return tbl
end

local function map(tbl, callback)
	for k, v in pairs(tbl) do
		tbl[k] = callback(k, v)
	end
	return tbl
end

-- Mac-Compatible Native Lua replacement for `ls -a --group-directories-first -v | sed -n '3,3p'`
local function get_first_preview_entry(dir_path)
    local handle = vim.uv.fs_scandir(dir_path)
    if not handle then return "" end

    local entries = {}
    while true do
        local name, type = vim.uv.fs_scandir_next(handle)
        if not name then break end
        if name ~= "." and name ~= ".." then
            table.insert(entries, { name = name, type = type or "file" })
        end
    end

    table.sort(entries, function(a, b)
        if a.type == "directory" and b.type ~= "directory" then return true end
        if a.type ~= "directory" and b.type == "directory" then return false end
        return a.name < b.name
    end)

    if #entries > 0 then return entries[1].name end
    return ""
end

_G.oil_ui = {}
local oil_ui = _G.oil_ui
oil_ui.preview_entry_update_timer = vim.uv.new_timer()

-- Global preferred mode
vim.g.oil_preferred_mode = vim.g.oil_preferred_mode or "basic"

-- Function to open oil in preferred mode
oil_ui.open_oil_in_preferred_mode = function(path)
    if vim.g.oil_preferred_mode == "basic" then
        require("oil").open(path)
    else
        local window_path = path and split_str(path, "/") or nil
        oil_ui.open_oil_with_parent_and_preview({window_path = window_path}, nil, nil, vim.g.oil_preferred_mode)
    end
end

-- Function to cycle mode
oil_ui.cycle_oil_mode = function()
    if vim.g.oil_preferred_mode == "basic" then
        vim.g.oil_preferred_mode = "2pane"
        vim.notify("Oil 2-Pane Mode Active", vim.log.levels.INFO, { title = "Oil" })
    elseif vim.g.oil_preferred_mode == "2pane" then
        vim.g.oil_preferred_mode = "3pane"
        vim.notify("Oil 3-Pane Mode Active", vim.log.levels.INFO, { title = "Oil" })
    else
        vim.g.oil_preferred_mode = "basic"
        vim.notify("Oil Basic Mode Active", vim.log.levels.INFO, { title = "Oil" })
    end
    save_oil_settings()
end

oil_ui.update_oil_paths = function(current, parent, preview)
	if join(current, "/") ~= join(vim.g.oil_state.current.window_path, "/") and join(current, "/") ~= "" then
		local current_path = join(current, "/")
		if vim.fn.filereadable(current_path) == 1 then
			current = split_str(string.gsub(join({ unpack(current, 1, (#current - 1)) }, "/"), "[\n\r]", ""), "/")
		end
		parent = { unpack(current, 1, #current - 1) }

        local dir_path = "/" .. string.sub(join(current, "/"), 2, #join(current, "/"))
        local first_entry = get_first_preview_entry(dir_path)
        if first_entry and first_entry ~= "" then
		    preview = split_str(string.gsub(join(current, "/") .. "/" .. first_entry, "[\n\r]", ""), "/")
        else
            preview = current
        end
	else
		if join(current, "/") == "" then current = vim.g.oil_state.current.window_path end
		if join(parent, "/") == "" then parent = vim.g.oil_state.parent.window_path end
		if join(preview, "") == "" then preview = vim.g.oil_state.preview.window_path end
	end
	return current, parent, preview
end

oil_ui.update_oil_win_numbers = function(current, parent, preview)
	if current == nil or not vim.api.nvim_win_is_valid(current) then 
        current = vim.fn.win_getid() 
    else 
        current = vim.g.oil_state.current.window_number 
    end

    if vim.g.oil_active_mode == "3pane" then
	    if parent == nil or not vim.api.nvim_win_is_valid(parent) then
		    parent = vim.api.nvim_open_win(0, false, { split = "left" })
	    else
		    parent = vim.g.oil_state.parent.window_number
	    end
    else
        if vim.g.oil_state.parent.window_number ~= nil then
            if vim.api.nvim_win_is_valid(vim.g.oil_state.parent.window_number) then
                pcall(vim.api.nvim_win_close, vim.g.oil_state.parent.window_number, true)
            end
            vim.g.oil_state.parent.window_number = nil
            vim.g.oil_state.parent.buffer_number = nil
            vim.g.oil_state.parent.window_path = {}
        end
        parent = nil
    end

	if preview == nil or not vim.api.nvim_win_is_valid(preview) then
		preview = vim.api.nvim_open_win(0, false, { split = "right" })
	else
		preview = vim.g.oil_state.preview.window_number
	end
	return current, parent, preview
end

oil_ui.update_preview_window = function(current, preview)
	local oil = require('oil')
	if join(preview.window_path, "/") ~= join(vim.g.oil_state.preview.window_path, "/") then
		if join(preview.window_path, "/") ~= join(current.window_path, "/") then
			if vim.fn.filereadable(join(preview.window_path, "/")) == 1 then
				vim.api.nvim_win_call(preview.window_number, function() pcall(vim.cmd.ed, join(preview.window_path, "/")) end)
			elseif vim.fn.isdirectory(join(preview.window_path, "/")) == 1 then
				vim.api.nvim_win_call(preview.window_number, function() pcall(oil.open, join(preview.window_path, "/")) end)
			end
		else
			vim.api.nvim_win_call(preview.window_number, function() pcall(oil.open, join(current.window_path, "/")) end)
		end
	end
	return preview
end

oil_ui.update_oil_windows = function(current, parent, preview)
	local oil = require('oil')
	preview = oil_ui.update_preview_window(current, preview)

	if join(current.window_path, "/") ~= join(vim.g.oil_state.current.window_path, "/") then
		if #current.window_path ~= 0 then
			vim.api.nvim_win_call(current.window_number, function() pcall(oil.open, join(current.window_path, "/")) end)
		else
			vim.api.nvim_win_call(current.window_number, function() pcall(oil.open, "/") end)
		end
	end

    if vim.g.oil_active_mode == "3pane" and parent ~= nil and parent.window_number ~= nil then
	    if join(parent.window_path, "/") ~= join(vim.g.oil_state.parent.window_path, "/") then
		    if #parent.window_path ~= 0 then
			    pcall(vim.api.nvim_win_call, parent.window_number, function() pcall(oil.open, join(parent.window_path, "/")) end)
		    else
			    if #current.window_path ~= 0 then
				    pcall(vim.api.nvim_win_call, parent.window_number, function() pcall(oil.open, "/") end)
			    else
				    pcall(vim.api.nvim_win_call, parent.window_number, function() pcall(vim.cmd.bd); parent.window_number = nil end)
			    end
		    end
	    end
    end

	return current, parent, preview
end

oil_ui.update_oil_buf_numbers = function(current, parent, preview)
	current.buffer_number = vim.api.nvim_win_call(current.window_number, function() return vim.api.nvim_win_get_buf(vim.fn.win_getid()) end)
    if vim.g.oil_active_mode == "3pane" and parent ~= nil and parent.window_number ~= nil then
	    parent.buffer_number = vim.api.nvim_win_call(parent.window_number, function() return vim.api.nvim_win_get_buf(vim.fn.win_getid()) end)
    end
	preview.buffer_number = vim.api.nvim_win_call(preview.window_number, function() return vim.api.nvim_win_get_buf(vim.fn.win_getid()) end)
	return current, parent, preview
end

oil_ui.clean_past_preview = function(current, parent, preview)
    local expected_parent_buf = (vim.g.oil_active_mode == "3pane" and parent ~= nil) and parent.buffer_number or -1
	if vim.g.oil_state.preview.buffer_number ~= nil and
	    vim.g.oil_state.preview.buffer_number ~= current.buffer_number and
	    vim.g.oil_state.preview.buffer_number ~= expected_parent_buf and
	    vim.g.oil_state.preview.buffer_number ~= preview.buffer_number and
	    vim.g.oil_state.preview.buffer_number ~= vim.g.oil_state.original_file.buffer_number then
		pcall(vim.api.nvim_win_call, preview.window_number, function() pcall(vim.cmd.bd, vim.g.oil_state.preview.buffer_number) end)
	end
end

oil_ui.update_state = function(new_state)
	if new_state ~= nil then
		local temp_state = vim.g.oil_state
		new_state = map(new_state, function(_, v)
			if v.window_path ~= nil and type(v.window_path) == "table" then v.window_path = join(v.window_path, "/") end
			return v
		end)
		temp_state = copy_into(temp_state, new_state)
		temp_state = map(temp_state, function(_, v)
			if v.window_path ~= nil and type(v.window_path) == "string" then v.window_path = split_str(v.window_path, "/") end
			return v
		end)
		vim.g.oil_state = temp_state
	else
		vim.g.oil_state = {
			original_file = { path = nil, buffer_number = nil },
			current = { window_number = nil, window_path = {}, buffer_number = nil },
			parent  = { window_number = nil, window_path = {}, buffer_number = nil },
			preview = { window_number = nil, window_path = {}, buffer_number = nil }
		}
	end
end

oil_ui.cursor_file_preview = function()
	local oil = require('oil')
	local current_dir = oil.get_current_dir()
	local selected_file = oil.get_cursor_entry()

	if selected_file ~= nil and selected_file.name ~= ".." then
		current_dir = split_str(current_dir, "/")
		current_dir[#current_dir + 1] = selected_file.name
		if join(current_dir, "/") ~= join(vim.g.oil_state.preview.window_path, "/") then
			local new_preview = {
				window_number = vim.g.oil_state.preview.window_number,
				window_path = current_dir,
				buffer_number = vim.g.oil_state.preview.buffer_number
			}
			new_preview = oil_ui.update_preview_window(vim.g.oil_state.current, new_preview)
			_, _, new_preview = oil_ui.update_oil_buf_numbers(vim.g.oil_state.current, vim.g.oil_state.parent, new_preview)
			oil_ui.clean_past_preview(vim.g.oil_state.current, vim.g.oil_state.parent, new_preview)
			oil_ui.update_state({ preview = new_preview })
		end
	end
end

oil_ui.open_oil_with_parent_and_preview = function(current, parent, preview, mode_override)
	if mode_override and vim.g.oil_active_mode ~= mode_override then
        vim.g.oil_active_mode = mode_override
        vim.notify(mode_override == "3pane" and "3-Pane Mode Active" or "2-Pane Mode Active", vim.log.levels.INFO, { title = "Oil" })
    end
	if not vim.g.oil_active_mode or vim.g.oil_active_mode == "none" then
		vim.g.oil_active_mode = "3pane"
        vim.notify("3-Pane Mode Active", vim.log.levels.INFO, { title = "Oil" })
	end

	local original_file = { path = nil, buffer_number = nil }
	current = current ~= nil and current or vim.g.oil_state.current
	parent = parent ~= nil and parent or vim.g.oil_state.parent
	preview = preview ~= nil and preview or vim.g.oil_state.preview

	if (not vim.g.is_oil_active) then
		original_file.path = string.gsub(vim.fn.expand("%:p") ~= "" and vim.fn.expand("%:p") or vim.fn.getcwd(-1, -1), "[\n\r]", "")
		original_file.buffer_number = vim.fn.bufnr()
		local path_to_open = original_file.path
		if join(current.window_path, "/") == "" then
			current.window_path = filter(split_str(path_to_open, '/'), function(el) return string.find(el, "oil:") == nil and el or nil end)
		end
		current.window_path, parent.window_path, preview.window_path = oil_ui.update_oil_paths(current.window_path, parent.window_path, preview.window_path)
	else
		current.window_path = join(current.window_path, "/") ~= "" and current.window_path or vim.g.oil_state.current.window_path
		current.window_path, parent.window_path, preview.window_path = oil_ui.update_oil_paths(current.window_path, parent.window_path, preview.window_path)
	end

	current.window_number, parent.window_number, preview.window_number = oil_ui.update_oil_win_numbers(current.window_number, parent.window_number, preview.window_number)
	current, parent, preview = oil_ui.update_oil_windows(current, parent, preview)
	current, parent, preview = oil_ui.update_oil_buf_numbers(current, parent, preview)
	oil_ui.clean_past_preview(current, parent, preview)

	if not vim.g.is_oil_active then
		oil_ui.preview_entry_update_timer:start(100, 100, function()
			if vim.g.oil_preview_active then
				vim.schedule(function()
					if vim.fn.win_getid() == vim.g.oil_state.current.window_number and vim.fn.mode() == "n" then
						oil_ui.cursor_file_preview()
					end
				end)
			end
		end)
	end

	vim.g.is_oil_active = true
	oil_ui.update_state({
		original_file = original_file.path ~= nil and original_file or vim.g.oil_state.original_file,
		current = { window_number = current.window_number, window_path = current.window_path, buffer_number = current.buffer_number },
		parent = { window_number = parent.window_number, window_path = parent.window_path, buffer_number = parent.buffer_number },
		preview = { window_number = preview.window_number, window_path = preview.window_path, buffer_number = preview.buffer_number }
	})
end

oil_ui.close_oil_windows = function(file_to_open, opts)
	opts = opts or {}
	local restore_original = opts.restore_original ~= false
	local new_original_file = file_to_open ~= nil and file_to_open or vim.g.oil_state.original_file.path

	pcall(function() vim.uv.timer_stop(oil_ui.preview_entry_update_timer) end)

	pcall(vim.api.nvim_win_call, vim.g.oil_state.current.window_number, function() pcall(vim.cmd.bd) end)
    if vim.g.oil_active_mode == "3pane" and vim.g.oil_state.parent.window_number ~= nil then
	    pcall(vim.api.nvim_win_call, vim.g.oil_state.parent.window_number, function() pcall(vim.cmd.bd) end)
    end
	pcall(vim.api.nvim_win_call, vim.g.oil_state.preview.window_number, function()
		if vim.g.oil_state.preview.buffer_number ~= vim.g.oil_state.original_file.buffer_number then
			pcall(vim.cmd.bd)
		end
	end)

	if restore_original and new_original_file ~= nil and new_original_file ~= "" then
		pcall(vim.cmd.ed, new_original_file)
	end

	vim.g.is_oil_active = false
    vim.g.oil_active_mode = "none"
	vim.g.oil_preview_active = true
	oil_ui.update_state(nil)
end

oil_ui.select_oil_entry_with_parent_and_preview = function()
	local oil = require('oil')
	local current_dir = oil.get_current_dir()
	local selected_file = oil.get_cursor_entry()

	if selected_file.name == ".." then
		current_dir = split_str(current_dir, "/")
		current_dir = { unpack(current_dir, 1, #current_dir - 1) }
		if join(current_dir, "/") == "" then current_dir = { "" } end
		oil_ui.open_oil_with_parent_and_preview(
			{ window_number = vim.g.oil_state.current.window_number, window_path = current_dir, buffer_number = vim.g.oil_state.current.buffer_number },
			vim.g.oil_state.parent, vim.g.oil_state.preview, vim.g.oil_active_mode)
	else
		current_dir = split_str(current_dir, "/")
		current_dir[#current_dir + 1] = selected_file.name
		if vim.fn.filereadable(join(current_dir, "/")) ~= 1 then
			oil_ui.open_oil_with_parent_and_preview(
				{ window_number = vim.g.oil_state.current.window_number, window_path = current_dir, buffer_number = vim.g.oil_state.current.buffer_number },
				vim.g.oil_state.parent, vim.g.oil_state.preview, vim.g.oil_active_mode)
		else
			oil_ui.close_oil_windows(join(current_dir, "/"))
		end
	end
end

return {
	"stevearc/oil.nvim",
	lazy = false,
    dependencies = { "nvim-tree/nvim-web-devicons" },
	config = function()
		vim.g.is_oil_loaded = true
		vim.g.is_oil_active = false
        vim.g.oil_active_mode = "none"
		vim.g.oil_preview_active = true
		vim.g.oil_state = {
			original_file = { path = nil, buffer_number = nil },
			current = { window_number = nil, window_path = {}, buffer_number = nil },
			parent  = { window_number = nil, window_path = {}, buffer_number = nil },
			preview = { window_number = nil, window_path = {}, buffer_number = nil }
		}

		local saved_settings = load_oil_settings() or {}
		vim.g.oil_preferred_mode = saved_settings.oil_preferred_mode or vim.g.oil_preferred_mode or "basic"
		local saved_show_hidden = saved_settings.show_hidden
		if saved_show_hidden == nil then
			saved_show_hidden = true
		end

		require("oil").setup({
			default_file_explorer = true,
			delete_to_trash = true,
			skip_confirm_for_simple_edits = true,
			constrain_cursor = "editable",
			watch_for_changes = true,
			keymaps = {
				["<CR>"] = {
                    callback = function()
                        if vim.g.is_oil_active then oil_ui.select_oil_entry_with_parent_and_preview() else require("oil.actions").select.callback() end
                    end,
                    mode = "n"
                },
				["l"] = {
                    callback = function()
                        if vim.g.is_oil_active then oil_ui.select_oil_entry_with_parent_and_preview() else vim.cmd("normal! l") end
                    end,
                    mode = "n"
                },
				["h"] = {
					callback = function()
						if vim.g.is_oil_active then
                            local new_current = vim.g.oil_state.current
						    new_current.window_path = { unpack(new_current.window_path, 1, #new_current.window_path - 1) }
						    if join(new_current.window_path, "/") == "" then new_current.window_path = { "" } end
						    oil_ui.open_oil_with_parent_and_preview(new_current, vim.g.oil_state.parent, vim.g.oil_state.preview, vim.g.oil_active_mode)
                        else
                            vim.cmd("normal! h")
                        end
					end,
					mode = "n"
				},
				["<C-c>"] = {
                    callback = function()
                        if vim.g.is_oil_active then oil_ui.close_oil_windows() else require("oil.actions").close.callback() end
                    end,
                    mode = "n"
                },
				["-"] = {
					callback = function()
                        if vim.g.is_oil_active then
						    local new_current = vim.g.oil_state.current
						    new_current.window_path = { unpack(new_current.window_path, 1, #new_current.window_path - 1) }
						    if join(new_current.window_path, "/") == "" then new_current.window_path = { "" } end
						    oil_ui.open_oil_with_parent_and_preview(new_current, vim.g.oil_state.parent, vim.g.oil_state.preview, vim.g.oil_active_mode)
                        else
                            require("oil.actions").parent.callback()
                        end
					end,
					mode = "n"
				},

                -- Standard fallback bindings that apply everywhere
				["g?"] = { "actions.show_help", mode = "n" },
				["<C-s>"] = { "actions.select", opts = { vertical = true } },
				["<C-h>"] = { "actions.select", opts = { horizontal = true } },
				["<C-t>"] = { "actions.select", opts = { tab = true } },
				["<C-p>"] = "actions.preview",
				["<C-l>"] = "actions.refresh",
				["_"] = { "actions.open_cwd", mode = "n" },
				["`"] = {
					callback = function()
						require("oil.actions").cd.callback()
						local cwd = vim.fn.getcwd()
						if cwd:match("^oil://") then cwd = cwd:gsub("^oil://", "") end
						local state_dir = vim.fn.stdpath("state")
						if vim.fn.isdirectory(state_dir) == 0 then vim.fn.mkdir(state_dir, "p") end
						vim.fn.writefile({ cwd }, state_dir .. "/cwd")
					end,
					desc = "cd & terminal sync",
					mode = "n"
				},
				["~"] = {
					callback = function()
						require("oil.actions").cd.callback({ scope = "tab" })
						local cwd = vim.fn.getcwd()
						if cwd:match("^oil://") then cwd = cwd:gsub("^oil://", "") end
						local state_dir = vim.fn.stdpath("state")
						if vim.fn.isdirectory(state_dir) == 0 then vim.fn.mkdir(state_dir, "p") end
						vim.fn.writefile({ cwd }, state_dir .. "/cwd")
					end,
					desc = "tcd & terminal sync",
					mode = "n"
				},
				["gs"] = {
					callback = function()
						require("oil.actions").change_sort.callback()
						save_oil_settings()
					end,
					mode = "n"
				},
				["gx"] = "actions.open_external",
				["g."] = {
					callback = function()
						require("oil.actions").toggle_hidden.callback()
						save_oil_settings()
					end,
					mode = "n"
				},
				["g\\"] = { "actions.toggle_trash", mode = "n" },
				["+"] = { function() vim.g.oil_preview_active = not vim.g.oil_preview_active end }
			},
			use_default_keymaps = true,
			view_options = {
				show_hidden = saved_show_hidden,
				is_hidden_file = function(name, bufnr) return name:match("^%.") ~= nil end,
				is_always_hidden = function(name, bufnr) return false end,
				natural_order = "true",
				case_insensitive = false,
				sort = saved_settings.sort or { { "type", "asc" }, { "name", "asc" } },
			},
		})
	end,
	keys = {
		{ '-', function() 
            -- Always open using the currently selected startup mode.
            oil_ui.open_oil_in_preferred_mode()
        end, desc = "Open Oil (preferred mode)" },
		{ '<leader>=', function() 
            vim.g.oil_preferred_mode = "3pane"
            save_oil_settings()
            oil_ui.open_oil_in_preferred_mode()
        end, desc = 'Open Yazi Oil 3-pane' },
		{ '<leader>-', function() 
            vim.g.oil_preferred_mode = "2pane"
            save_oil_settings()
            oil_ui.open_oil_in_preferred_mode()
        end, desc = "Open Yazi Oil 2-pane" },
        { '<leader>oo', function() 
            vim.g.oil_preferred_mode = "basic"
            save_oil_settings()
            oil_ui.open_oil_in_preferred_mode()
        end, desc = "Open Standard Oil natively" },
        { '<leader>om', oil_ui.cycle_oil_mode, desc = "Cycle Oil startup mode" },
        { '<leader>oM', function()
            oil_ui.cycle_oil_mode()
            oil_ui.open_oil_in_preferred_mode()
        end, desc = "Cycle mode and reopen Oil" }
	}
}
