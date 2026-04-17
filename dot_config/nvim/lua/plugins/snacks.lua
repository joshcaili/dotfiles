return {
    enabled = true,
  "folke/snacks.nvim",
  priority = 1000,
  lazy = false,


  ---@type snacks.Config
    keys = {

    { "<leader>hs", function() Snacks.win():hscroll(10) end, desc = "scroll" },

    { "<leader>bd", function() Snacks.bufdelete() end, desc = "Delete Buffer" },
    { "<leader>fR", function() Snacks.rename.rename_file() end, desc = "Rename File" },
    { "<leader>b", function() Snacks.picker.buffers() end, desc = "Buffers" },

    -- { "<leader>q", function() Snacks.picker.smart() end, desc = "Smart Find Files" },
    { "<leader>,", function() Snacks.picker.buffers() end, desc = "Buffers" },
    -- { "<leader>/", function() Snacks.picker.grep() end, desc = "Grep" }, -- <leader>sg already exists for grep
    { "<leader>:", function() Snacks.picker.command_history() end, desc = "Command History" },
    { "<leader>n", function() Snacks.picker.notifications() end, desc = "Notification History" },	
	    -- search
    { '<leader>s"', function() Snacks.picker.registers() end, desc = "Registers" },
    { '<leader>s/', function() Snacks.picker.search_history() end, desc = "Search History" },
    -- { "<leader>sa", function() Snacks.picker.autocmds() end, desc = "Autocmds" },
    { "<leader>sb", function() Snacks.picker.lines() end, desc = "Buffer Lines" },
    { "<leader>sc", function() Snacks.picker.command_history() end, desc = "Command History" },
    { "<leader>sC", function() Snacks.picker.commands() end, desc = "Commands" },
    { "<leader>sd", function() Snacks.picker.diagnostics() end, desc = "Diagnostics" },
    -- { "<leader>sD", function() Snacks.picker.diagnostics_buffer() end, desc = "Buffer Diagnostics" },
    { "<leader>sh", function() Snacks.picker.help() end, desc = "Help Pages" },
    -- { "<leader>sH", function() Snacks.picker.highlights() end, desc = "Highlights" },
    { "<leader>si", function() Snacks.picker.icons() end, desc = "Icons" },
    { "<leader>sj", function() Snacks.picker.jumps() end, desc = "Jumps" },
    { "<leader>sk", function() Snacks.picker.keymaps() end, desc = "Keymaps" },
    { "<leader>sl", function() Snacks.picker.loclist() end, desc = "Location List" },
    { "<leader>sm", function() Snacks.picker.marks() end, desc = "Marks" },
    { "<leader>sM", function() Snacks.picker.man() end, desc = "Man Pages" },
    { "<leader>sp", function() Snacks.picker.lazy() end, desc = "Search for Plugin Spec" },
    { "<leader>sq", function() Snacks.picker.qflist() end, desc = "Quickfix List" },
    { "<leader>sR", function() Snacks.picker.resume() end, desc = "Resume" },
    { "<leader>su", function() Snacks.picker.undo() end, desc = "Undo History" },
    { "<leader>uC", function() Snacks.picker.colorschemes() end, desc = "Colorschemes" }, -- git

    { "<leader>gB", function() Snacks.gitbrowse() end, desc = "Git Browse", mode = { "n", "v" } },
    { "<leader>gg", function() Snacks.lazygit() end, desc = "Lazygit" },
	{ "<leader>gb", function() Snacks.picker.git_branches() end, desc = "Git Branches" },
	{ "<leader>gl", function() Snacks.picker.git_log() end, desc = "Git Log" },
	{ "<leader>gL", function() Snacks.picker.git_log_line() end, desc = "Git Log Line" },
	{ "<leader>gs", function() Snacks.picker.git_status() end, desc = "Git Status" },
	{ "<leader>gS", function() Snacks.picker.git_stash() end, desc = "Git Stash" },
	{ "<leader>gd", function() Snacks.picker.git_diff() end, desc = "Git Diff (Hunks)" },

	-- { "<leader>gf", function() Snacks.picker.git_log_file() end, desc = "Git Log File" },	-- Grep
	-- { "<leader>sb", function() Snacks.picker.lines() end, desc = "Buffer Lines" },
	{ "<leader>sB", function() Snacks.picker.grep_buffers() end, desc = "Grep Open Buffers" },
	{ "<leader>sg", function() Snacks.picker.grep() end, desc = "Grep" },
	{ "<leader>sw", function() Snacks.picker.grep_word() end, desc = "Visual selection or word", mode = { "n", "x" } },
    },
  opts = {
    -- your configuration comes here
    -- or leave it empty to use the default settings
    -- refer to the configuration section below
    bigfile = { enabled = true },
    dim = {  },
    explorer = { enabled = true },
    indent = { enabled = true },
    image = { enabled = true, doc = { inline = false} },
    input = { enabled = true },
    picker = {
      enabled = true,
      sources = {
        keymaps = {
          transform = function(item)
            if item.file and not item.file:match("^/") then
              -- Handle common built-in prefixes and others
              local paths = { "lua/" .. item.file, item.file }
              for _, p in ipairs(paths) do
                local runtime = vim.api.nvim_get_runtime_file(p, false)[1]
                if runtime then
                  item.file = runtime
                  break
                end
              end
            end
            return item
          end,
        },
      },
      win = {
        input = {
          keys = {
            -- Default mappings with descriptions
            ["<CR>"] = { "confirm", mode = { "n", "i" }, desc = "Confirm Selection" },
            ["<S-CR>"] = { { "pick_win", "jump" }, mode = { "n", "i" }, desc = "Pick Window" },
            ["<C-e>"] = { { "pick_win", "jump" }, mode = { "n", "i" }, desc = "Pick Window" },
            ["<C-s>"] = { "edit_split", mode = { "i", "n" }, desc = "Horizontal Split" },
            ["<C-v>"] = { "edit_vsplit", mode = { "i", "n" }, desc = "Vertical Split" },
            ["<C-t>"] = { "edit_tab", mode = { "n", "i" }, desc = "New Tab" },
            ["<a-w>"] = { "cycle_win", mode = { "i", "n" }, desc = "Cycle Windows" },
            ["<C-f>"] = { "preview_scroll_down", mode = { "i", "n" }, desc = "Scroll Preview Down" },
            ["<C-b>"] = { "preview_scroll_up", mode = { "i", "n" }, desc = "Scroll Preview Up" },
            ["<C-d>"] = { "list_scroll_down", mode = { "i", "n" }, desc = "Scroll List Down" },
            ["<C-u>"] = { "list_scroll_up", mode = { "i", "n" }, desc = "Scroll List Up" },
            ["<Esc>"] = { "cancel", mode = { "n", "i" }, desc = "Cancel" },

            -- Your custom mappings
            ["<C-h>"] = { "hscroll(-10)", mode = { "n", "i" }, desc = "Scroll Left" },
            ["<C-l>"] = { "hscroll(10)",  mode = { "n", "i" }, desc = "Scroll Right" },
            ["<C-w>"] = { "cycle_win", mode = { "n", "i" } },
          },
        },
        list = {
          keys = {
            ["<CR>"] = { "confirm", desc = "Confirm Selection" },
            ["<S-CR>"] = { { "pick_win", "jump" }, desc = "Pick Window" },
            ["<C-e>"] = { { "pick_win", "jump" }, desc = "Pick Window" },
            ["<C-s>"] = { "edit_split", desc = "Horizontal Split" },
            ["<C-v>"] = { "edit_vsplit", desc = "Vertical Split" },
            ["<C-t>"] = { "edit_tab", desc = "New Tab" },
            ["<a-p>"] = { "toggle_preview", desc = "Toggle Preview" },
            ["<a-w>"] = { "cycle_win", desc = "Cycle Windows" },
            ["j"] = { "list_down", desc = "Next Item" },
            ["k"] = { "list_up", desc = "Prev Item" },
            ["G"] = { "list_bottom", desc = "Bottom of List" },
            ["gg"] = { "list_top", desc = "Top of List" },
            ["q"] = { "close", desc = "Close Picker" },
            ["<Esc>"] = { "cancel", desc = "Cancel" },
          },
        },
      },
    },
    notifier = { enabled = true },
    quickfile = { enabled = true },
    scope = { enabled = true },
    scroll = { enabled = true },
    statuscolumn = { enabled = true },
    words = { enabled = true },
    dashboard = {
	preset = {
      keys = {
      { icon = " ", key = "f", desc = "Find File", action = ":lua Snacks.dashboard.pick('files')" },
      { icon = " ", key = "n", desc = "New File", action = ":ene | startinsert" },
      { icon = " ", key = "g", desc = "Find Text", action = ":lua Snacks.dashboard.pick('live_grep')" },
      { icon = " ", key = "r", desc = "Recent Files", action = ":lua Snacks.dashboard.pick('oldfiles')" },
      { icon = " ", key = "c", desc = "Config", action = ":lua Snacks.dashboard.pick('files', {cwd = vim.fn.stdpath('config')})" },
      { icon = " ", key = "s", desc = "Restore Session", section = "session" },
      { icon = "󰒲 ", key = "l", desc = "Lazy", action = ":Lazy", enabled = package.loaded.lazy ~= nil },
      { icon = " ", key = "q", desc = "Quit", action = ":qa" },
{ icon = " ", key = "a", desc = "Directory", action = ':lua require("jumper.fzf-lua").jump_to_directory()' },
      	-- { icon = " ", key = "a", desc = "Directory", action = ':lua require("telescope").extensions.zoxide.list()' },
      },
      },
      -- add your custom sections here
      sections = {
        { section = "header" },


        { section = "keys", gap = 1, padding = 1 },

        { pane = 2, icon = " ", title = "Recent Files", section = "recent_files", indent = 2, padding = 1 },

        { pane = 2, icon = " ", title = "Projects", section = "projects", indent = 2, padding = 1 },

        -- {
        --   pane = 2,
        --   icon = " ",
        --   title = "Git Status",
        --   section = "terminal",
        --   enabled = function()
        --     return Snacks.git.get_root() ~= nil
        --   end,
        --   height = 5,
        --   padding = 1,
        --   ttl = 5 * 60,
        --   indent = 3,
        -- },

        { section = "startup" },
      },
    },
  },
}
