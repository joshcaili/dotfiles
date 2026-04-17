-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua

-- This file is under `lua/plugins/`, so Lazy will try to load it as a plugin spec.
-- In VSCode we intentionally load only `flash.nvim`, so bail out early.
local in_vscode = (vim.g.vscode == true) or (vim.env.VSCODE_PID ~= nil)
if in_vscode then
  return {}
end

local opts = { silent = true } --just to make it shorter
local map = vim.keymap.set
local del = vim.keymap.del

local function with_snacks(fn)
  return function(...)
    local ok, snacks = pcall(require, "snacks")
    if ok and snacks then
      return fn(snacks, ...)
    end
    if _G.Snacks then
      return fn(_G.Snacks, ...)
    end
    vim.notify("snacks.nvim is not loaded", vim.log.levels.WARN)
  end
end

-- del("n", "gcc")
-- map("n", "qq", function() 
-- 	require('render-markdown').disable() 
-- 	-- vim.defer_fn(function()
-- 	-- require("flash").jump() 
-- 	-- end,450)
-- 	-- 	require('render-markdown').enable() 
-- 	end,
-- 	{desc = "try out flash"})

map("n" , "<leader>oo", ":lua Snacks.picker.files({ cwd = vim.fn.expand('/Users/jesh/Library/Mobile Documents/iCloud~md~obsidian/Documents/SharedVault/Storage')})<cr><cr>", {desc = "Obsidian Open File"} )

 --
 vim.keymap.set("n", "<leader>of", function()
  require("oil").open(vim.fn.expand("/Users/jesh/Library/Mobile Documents/iCloud~md~obsidian/Documents/SharedVault/Storage"))  end, {desc = "Open Obsidian"})

map("n", "<leader>gd" , ":lua vim.lsp.buf.definition()<cr>", {desc = "[G]oto [D]efinition"})
map("i", "<c-z>"      , function() require('blink.cmp').accept() end, {desc = "accept blink"})
map("n","<leader>ch", ":lua vim.lsp.buf.rename()<cr>" , {desc = "change Heading"})

map("n", "<leader>tt", ":lua require('toggle-checkbox').toggle()<CR>", {desc = "Toggle-check"})
map("n","<leader>co", function() require("conform").format({ bufnr = 0 })end, {desc = "conform.prettier"})
-- in keymaps.lua
map("n", "di|", "F|ldt|i", {desc = "bracket"})
map( "n", "<leader>cwdf", ':let @+=expand("%:p")<CR>', { noremap = true, silent = false, desc = "Copy current file path" })
-- Open current file in Finder (macOS)
map("n", "<leader>cwdo", function()
  local file = vim.fn.expand("%:p")
  if file ~= "" then
    vim.fn.system({"open", "-R", file}) -- reveal in Finder
  end
end, {desc = "Open in Finder" })

-- Copy relative path
map("n", "<leader>cwdr", function()
  local path = vim.fn.expand("%") -- relative path
  vim.fn.setreg("+", path)        -- copy to system clipboard
  print("Copied relative path: " .. path)
end, {desc = "Copy current file path" })

-- Copy file name only
map("n", "<leader>cf", function()
  local name = vim.fn.expand("%:t") -- tail of path
  vim.fn.setreg("+", name)
  print("Copied file name: " .. name)
end, {desc = "File Name Only" })
-- to do relative file

map(
  "n",
  "<leader>h",
  function()
    if vim.g.is_oil_active then
      _G.oil_ui.close_oil_windows()
    end
    local ok, snacks = pcall(require, "snacks")
    if ok and snacks then
      snacks.dashboard.open()
    else
      vim.notify("snacks.nvim is not loaded", vim.log.levels.WARN)
    end
  end,
  { desc = "Open mini starter" }
)
-- map(
--   "n",
--   "<leader>h",
--   with_snacks(function(Snacks)
--     Snacks.dashboard.open()
--   end),
--   { desc = "Open mini starter" }
-- )
map("n", "<leader>i", function()
  local clipboard = vim.fn.getreg("+")
  local text = string.format("[](%s)", clipboard)
  vim.api.nvim_put({ text }, "c", true, true)
  vim.api.nvim_feedkeys("F[a", "n", false)
end, { desc = "Paste clipboard into markdown link" })

map("i", "<S-Left>", "<C-o>h", { desc = "Select left in insert mode" })
map("i", "<S-Right>", "<C-o>l", { desc = "Select right in insert mode" })
map("i", "<S-Up>", "<C-o>k", { desc = "Select up in insert mode" })
map("i", "<S-Down>", "<C-o>j", { desc = "Select down in insert mode" })
-- from google search linkarzu has the same thing
if vim.g.neovide then
  vim.g.neovide_input_use_logo = 1
  vim.api.nvim_set_keymap("", "<D-v>", "+p<CR>", { noremap = true, silent = true })
  vim.api.nvim_set_keymap("!", "<D-v>", "<C-R>+", { noremap = true, silent = true })
  vim.api.nvim_set_keymap("t", "<D-v>", "<C-R>+", { noremap = true, silent = true })
  vim.api.nvim_set_keymap("v", "<D-v>", "<C-R>+", { noremap = true, silent = true })
end



-- Normal mode: Map <C-e> to execute <C-e> twice
map("n", "<C-e>", "<C-e><C-e>", { noremap = true })




map("n", "<leader>z", "<cmd>w<cr>", { desc = "write / save" })
-- plugins
-- map("n", "-", "<CMD>Oil<CR>", { desc = "Open oil.nvim" })

-- Swap j and k (motion navigation)
-- map("n", "qq", function()
--   require("flash").jump()
-- end, { desc = "Flash Jump" })

-- Centering stuff
-- -- Smooth scroll and center screen
-- map("n", "<C-d>", "<C-d>zz", { desc = "Scroll down & center" })
-- map("n", "<C-u>", "<C-u>zz", { desc = "Scroll up & center" })

-- map("n", "<C-s>", "a", { desc = "Surround" })
-- Better search navigation
map("n", "n", "nzzzv[", { desc = "Next search result (centered)" })
map("n", "N", "Nzzzv]", { desc = "Previous search result (centered)" })

-- OS clipboard stuff & registrar
map("x", "qq", '"_d', { desc = "Delete without yanking (visual)" })
map("x", "<C-p>", '"_dP', { desc = "Paste without overwriting register" })
map("v", "<C-c>", '"+y"', { desc = "Copy → Clipboard" })

-- Quickfix fix shortcut
map("n", "C", "F!x", { desc = "Jump to previous ! and fix (QuickFix)" })

-- Simple swaps for more intuition
-- Swap 'a' and 'i' in normal mode
-- map("n", "a", "i", { desc = "Insert at cursor (was 'a')" })
-- map("n", "i", "a", { desc = "Append after cursor (was 'i')" })
-- map("n", "A", "I", { desc = "Insert at line start (was 'A')" })
-- map("n", "I", "A", { desc = "Append at line end (was 'I')" })

-- Redefine $ and 0 in visual mode I have End and Home bound on karabiner so i dont need to go to physical line
-- map({ "n", "v", "o" }, "$", "g0", { desc = "Visual: Go to start of screen line" }) -- i need to add the regular end of line
-- map({ "n", "v", "o" }, "0", "g$", { desc = "Visual: Go to end of screen line" }) -- changed the default bec I don't code often.

-- map({ "n", "x", "o" }, "j", "k", { desc = "Move up (swapped k → l)" })
-- map({ "n", "x", "o" }, "k", "j", { desc = "Move down (swapped l → h)" })
--map({ "n", "x", "o" }, "h", "h", { desc = "Move left (swapped h → s)" })
--map({ "n", "x", "o" }, "l", "l", { desc = "Move right (swapp l → t)" })

-- Insert Mode escape shortcut
map("i", "qq", "<Esc>", { desc = "Exit insert mode with qq" })

map("v", "J", ":m '>+1<CR>gv=gv") --used to move selected lines in visual up and down
map("v", "K", ":m '<-2<CR>gv=gv")
map({ "n", "v" }, "<leader>d", '"_d') -- presses d once to let vim know not to put into reg

map("n", "<CR>", "mz:call append(line('.'), '')<CR>`z", { --chatgpt gave me this one
  desc = "Insert blank line below without auto-comment",
  silent = true,
})
map("n", "<CR>", function() -- enter modified chapgpt gave this one
  vim.cmd("setlocal formatoptions-=o")
  vim.cmd("normal! o")
  vim.cmd("setlocal formatoptions+=o")
end)
-- map("n", "<leader>s", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]]) -- searches current word and replaces everything. leader s is already bound so i turned this off
map("n", "<leader>cwdx", "<cmd>!chmod +x %<CR>", { desc = "Convert File to Executable -Primagen"}   )

-- I got this from yt, but modified w/gemini. Ghostty i need to read documentation. terminal just works best
map("n", "<leader>cn", function()
  vim.cmd("!g++ % -o %:r && open -a Terminal.app ./%:r")
end, { desc = "Compile and run C++ file in new terminal" })
-- map("n", "<leader>cp", function()
--   local filename = vim.fn.expand("%:t:r")
--   local fullpath = vim.fn.expand("%:p")
--   local output = filename .. ".out"
--   local compile_cmd = string.format("g++ %s -o %s && ./%s", fullpath, output, output)
--   vim.cmd("split | terminal " .. compile_cmd)
-- end, { desc = "Compile and run C++ file" })


map("n", "<leader>rd", function()
  vim.fn.setreg("a", "")
  vim.notify("Register a cleared")
end, { desc = "Clear register a" })



-- if i don't have these, nvim doesn't work within VSCode
-- if not vim.g.vscode then
--   map("n", "<leader><leader>", function()
--     require("fff").find_files()
--   end, { desc = "Find files (fff)" })
-- end

-- if not vim.g.vscode then
-- map("n", "<leader>a", function()
--     require("telescope").extensions.zoxide.list()
--   end, { desc = "Find files (fff)" })
-- end


-- in keymaps.lua


-- vim.keymap.set("n", "<leader>fc", function()
--   require("snacks").pick("find_files", {
--     -- vim.fn.stdpath("config") dynamically gets your nvim config path (~/.config/nvim)
--     cwd = vim.fn.stdpath("config") 
--   })
-- end, { desc = "[F]ind file in [C]onfig" })


-- Map it to <Leader>ot
vim.keymap.set("n", "<Leader>ot", ":lua Snacks.terminal.toggle()<cr>", { desc = "Open Snacks terminal in Oil directory" })

-- HACK: Paste unformatted text from Neovim to Slack, Discord, Word or any other app
-- https://youtu.be/S3drTCO7Ct4
--
vim.keymap.set("v", "y", function()
  -- Check if the current buffer's filetype is markdown
  if vim.bo.filetype ~= "markdown" then
    -- Not a Markdown file, copy the selection to the system clipboard
    vim.cmd('normal! "+y')
    -- Optionally, notify the user
    vim.notify("Yanked to system clipboard", vim.log.levels.INFO)
    return
  end
  -- Yank the selected text into register 'z' without affecting the unnamed register
  vim.cmd('silent! normal! "zy')
  -- Get the yanked text from register 'z'
  local text = vim.fn.getreg("z")
  -- Path to a temporary file (uses a unique temporary file name)
  local temp_file = vim.fn.tempname() .. ".md"
  -- Write the selected text to the temporary file
  local file = io.open(temp_file, "w")
  if file == nil then
    vim.notify("Error: Cannot write to temporary file.", vim.log.levels.ERROR)
    return
  end
  file:write(text)
  file:close()
  -- Run Prettier on the temporary file to format it
  -- Adding > /dev/null 2>&1' because if the command produces output, I see that
  -- in the neovim buffer
  local cmd = 'prettier --prose-wrap never --write "' .. temp_file .. '" > /dev/null 2>&1'
  local result = os.execute(cmd)
  if result ~= 0 then
    vim.notify("Error: Prettier formatting failed.", vim.log.levels.ERROR)
    os.remove(temp_file)
    return
  end
  -- Read the formatted text from the temporary file
  file = io.open(temp_file, "r")
  if file == nil then
    vim.notify("Error: Cannot read from temporary file.", vim.log.levels.ERROR)
    os.remove(temp_file)
    return
  end
  local formatted_text = file:read("*all")
  file:close()
  -- Copy the formatted text to the system clipboard
  vim.fn.setreg("+", formatted_text)
  -- Delete the temporary file
  os.remove(temp_file)
  -- Notify the user
  vim.notify("yanked markdown with --prose-wrap never", vim.log.levels.INFO)
end, { desc = "[P]Copy selection formatted with Prettier", noremap = true, silent = true })



-------------------------------------------------------------------------------
--                           Folding section
-------------------------------------------------------------------------------

-- Checks each line to see if it matches a markdown heading (#, ##, etc.):
-- It’s called implicitly by Neovim’s folding engine by vim.opt_local.foldexpr
function _G.markdown_foldexpr()
  local lnum = vim.v.lnum
  local line = vim.fn.getline(lnum)
  local heading = line:match("^(#+)%s")
  if heading then
    local level = #heading
    if level == 1 then
      -- Special handling for H1
      if lnum == 1 then
        return ">1"
      else
        local frontmatter_end = vim.b.frontmatter_end
        if frontmatter_end and (lnum == frontmatter_end + 1) then
          return ">1"
        end
      end
    elseif level >= 2 and level <= 6 then
      -- Regular handling for H2-H6
      return ">" .. level
    end
  end
  return "="
end

local function set_markdown_folding()
  vim.opt_local.foldmethod = "expr"
  vim.opt_local.foldexpr = "v:lua.markdown_foldexpr()"
  vim.opt_local.foldlevel = 99

  -- Detect frontmatter closing line
  local lines = vim.api.nvim_buf_get_lines(0, 0, -1, false)
  local found_first = false
  local frontmatter_end = nil
  for i, line in ipairs(lines) do
    if line == "---" then
      if not found_first then
        found_first = true
      else
        frontmatter_end = i
        break
      end
    end
  end
  vim.b.frontmatter_end = frontmatter_end
end

-- Use autocommand to apply only to markdown files
vim.api.nvim_create_autocmd("FileType", {
  pattern = "markdown",
  callback = set_markdown_folding,
})

-- Function to fold all headings of a specific level
local function fold_headings_of_level(level)
  -- Move to the top of the file without adding to jumplist
  vim.cmd("keepjumps normal! gg")
  -- Get the total number of lines
  local total_lines = vim.fn.line("$")
  for line = 1, total_lines do
    -- Get the content of the current line
    local line_content = vim.fn.getline(line)
    -- "^" -> Ensures the match is at the start of the line
    -- string.rep("#", level) -> Creates a string with 'level' number of "#" characters
    -- "%s" -> Matches any whitespace character after the "#" characters
    -- So this will match `## `, `### `, `#### ` for example, which are markdown headings
    if line_content:match("^" .. string.rep("#", level) .. "%s") then
      -- Move the cursor to the current line without adding to jumplist
      vim.cmd(string.format("keepjumps call cursor(%d, 1)", line))
      -- Check if the current line has a fold level > 0
      local current_foldlevel = vim.fn.foldlevel(line)
      if current_foldlevel > 0 then
        -- Fold the heading if it matches the level
        if vim.fn.foldclosed(line) == -1 then
          vim.cmd("normal! za")
        end
        -- else
        --   vim.notify("No fold at line " .. line, vim.log.levels.WARN)
      end
    end
  end
end

local function fold_markdown_headings(levels)
  -- I save the view to know where to jump back after folding
  local saved_view = vim.fn.winsaveview()
  for _, level in ipairs(levels) do
    fold_headings_of_level(level)
  end
  vim.cmd("nohlsearch")
  -- Restore the view to jump to where I was
  vim.fn.winrestview(saved_view)
end

-- HACK: Fold markdown headings in Neovim with a keymap
-- https://youtu.be/EYczZLNEnIY
--
-- Keymap for folding markdown headings of level 1 or above
vim.keymap.set("n", "zj", function()
  -- "Update" saves only if the buffer has been modified since the last save
  vim.cmd("silent update")
  -- vim.keymap.set("n", "<leader>mfj", function()
  -- Reloads the file to refresh folds, otheriise you have to re-open neovim
  vim.cmd("edit!")
  -- Unfold everything first or I had issues
  vim.cmd("normal! zR")
  fold_markdown_headings({ 6, 5, 4, 3, 2, 1 })
  vim.cmd("normal! zz") -- center the cursor line on screen
end, { desc = "[P]Fold all headings level 1 or above" })

-- HACK: Fold markdown headings in Neovim with a keymap
-- https://youtu.be/EYczZLNEnIY
--
-- Keymap for folding markdown headings of level 2 or above
-- I know, it reads like "madafaka" but "k" for me means "2"
vim.keymap.set("n", "zk", function()
  -- "Update" saves only if the buffer has been modified since the last save
  vim.cmd("silent update")
  -- vim.keymap.set("n", "<leader>mfk", function()
  -- Reloads the file to refresh folds, otherwise you have to re-open neovim
  vim.cmd("edit!")
  -- Unfold everything first or I had issues
  vim.cmd("normal! zR")
  fold_markdown_headings({ 6, 5, 4, 3, 2 })
  vim.cmd("normal! zz") -- center the cursor line on screen
end, { desc = "[P]Fold all headings level 2 or above" })

-- HACK: Fold markdown headings in Neovim with a keymap
-- https://youtu.be/EYczZLNEnIY
--
-- Keymap for folding markdown headings of level 3 or above
vim.keymap.set("n", "zl", function()
  -- "Update" saves only if the buffer has been modified since the last save
  vim.cmd("silent update")
  -- vim.keymap.set("n", "<leader>mfl", function()
  -- Reloads the file to refresh folds, otherwise you have to re-open neovim
  vim.cmd("edit!")
  -- Unfold everything first or I had issues
  vim.cmd("normal! zR")
  fold_markdown_headings({ 6, 5, 4, 3 })
  vim.cmd("normal! zz") -- center the cursor line on screen
end, { desc = "[P]Fold all headings level 3 or above" })

-- HACK: Fold markdown headings in Neovim with a keymap
-- https://youtu.be/EYczZLNEnIY
--
-- Keymap for folding markdown headings of level 4 or above
vim.keymap.set("n", "z;", function()
  -- "Update" saves only if the buffer has been modified since the last save
  vim.cmd("silent update")
  -- vim.keymap.set("n", "<leader>mf;", function()
  -- Reloads the file to refresh folds, otherwise you have to re-open neovim
  vim.cmd("edit!")
  -- Unfold everything first or I had issues
  vim.cmd("normal! zR")
  fold_markdown_headings({ 6, 5, 4 })
  vim.cmd("normal! zz") -- center the cursor line on screen
end, { desc = "[P]Fold all headings level 4 or above" })

-- HACK: Fold markdown headings in Neovim with a keymap
-- https://youtu.be/EYczZLNEnIY
--
-- Use <CR> to fold when in normal mode
-- To see help about folds use `:help fold`
vim.keymap.set("n", "<c-CR>", function()
  -- Get the current line number
  local line = vim.fn.line(".")
  -- Get the fold level of the current line
  local foldlevel = vim.fn.foldlevel(line)
  if foldlevel == 0 then
    vim.notify("No fold found", vim.log.levels.INFO)
  else
    vim.cmd("normal! za")
    vim.cmd("normal! zz") -- center the cursor line on screen
  end
end, { desc = "[P]Toggle fold" })

-- HACK: Fold markdown headings in Neovim with a keymap
-- https://youtu.be/EYczZLNEnIY
--
-- Keymap for unfolding markdown headings of level 2 or above
-- Changed all the markdown folding and unfolding keymaps from <leader>mfj to
-- zj, zk, zl, z; and zu respectively lamw25wmal
vim.keymap.set("n", "zu", function()
  -- "Update" saves only if the buffer has been modified since the last save
  vim.cmd("silent update")
  -- vim.keymap.set("n", "<leader>mfu", function()
  -- Reloads the file to reflect the changes
  vim.cmd("edit!")
  vim.cmd("normal! zR") -- Unfold all headings
  vim.cmd("normal! zz") -- center the cursor line on screen
end, { desc = "[P]Unfold all headings level 2 or above" })

-- HACK: Fold markdown headings in Neovim with a keymap
-- https://youtu.be/EYczZLNEnIY
--
-- gk jummps to the markdown heading above and then folds it
-- zi by default toggles folding, but I don't need it lamw25wmal
vim.keymap.set("n", "zi", function()
  -- "Update" saves only if the buffer has been modified since the last save
  vim.cmd("silent update")
  -- Difference between normal and normal!
  -- - `normal` executes the command and respects any mappings that might be defined.
  -- - `normal!` executes the command in a "raw" mode, ignoring any mappings.
  vim.cmd("normal gk")
  -- This is to fold the line under the cursor
  vim.cmd("normal! za")
  vim.cmd("normal! zz") -- center the cursor line on screen
end, { desc = "[P]Fold the heading cursor currently on" })

-------------------------------------------------------------------------------
--                         End Folding section
-------------------------------------------------------------------------------
---
---
---



-- in keymaps.lua

vim.keymap.set("n", "<leader>fn", function()
  -- vim.w is a table for window-local variables.
  -- We use it to store the original height for each window individually.
  if vim.w.original_lines then
    -- If we have a saved size, it means we're "zoomed in".
    -- Restore the original height.
    vim.o.lines = vim.w.original_lines
    -- Clear the saved state for the next toggle.
    vim.w.original_lines = nil
  else
    -- If there's no saved size, it means we're "normal".
    -- Save the current height before changing it.
    vim.w.original_lines = vim.o.lines
    -- Set the new height to 3x the original.
    vim.o.lines = vim.o.lines * 3
  end
end, { desc = "Toggle window height (1x <--> 3x)" })

return {}
