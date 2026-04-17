local opt = vim.opt
opt.paste = nopaste --other option is 'paste' nopaste paste prevent
                                     --the 65 / 80 char thing
-- in options.lua
opt.list = true
opt.listchars:append("nbsp:¬") -- Shows non-breaking spaces as ¬
opt.number = true
opt.textwidth = 73
opt.relativenumber = true
opt.spell = false
opt.wrap = true
opt.autochdir = true
opt.splitbelow = false
vim.api.nvim_set_hl(0, "LineNr", { fg = "#FF6347" }) -- relative line numbers
vim.api.nvim_set_hl(0, "CursorLineNr", { fg = "#FFD700", bold = true }) -- current line number

-- opt.shiftwidth = 4 -- Size of an indent this affects conform.nvim
-- opt.expandtab = true -- Instead of using real tab characters (\t), Vim will insert spaces.

-- opt.softtabstop = 4 -- 	When you press <Tab> in insert mode, it acts like 4 spaces.
-- opt.smarttab = true -- 	If you're at the start of a line, pressing <Tab> will use shiftwidth (4 spaces here), not softtabstop.

-- opt.breakindent = true --see obsidian

-- -- Optionally setup the terminal to use
-- -- This sets `vim.o.shell` and does some additional configuration for:
-- -- * pwsh
-- -- * powershell
-- -- LazyVim.terminal.setup("pwsh")

-- -- Set LSP servers to be ignored when used with `util.root.detectors.lsp`
-- -- for detecting the LSP root
-- vim.g.root_lsp_ignore = { "copilot" }

vim.g.deprecation_warnings = false

-- -- Show the current document symbols location from Trouble in lualine
-- -- You can disable this for a buffer by setting `vim.b.trouble_lualine = false`
-- vim.g.trouble_lualine = true

-- opt.autowrite = true -- Enable auto write
-- -- only set clipboard if not in ssh, to make sure the OSC 52
-- -- integration works automatically. Requires Neovim >= 0.10.0
-- opt.clipboard = vim.env.SSH_TTY and "" or "unnamedplus" -- Sync with system clipboard

 opt.clipboard = ""
-- opt.completeopt = "menu,menuone,noselect"
opt.conceallevel = 0 -- Hide * markup for bold and italic, but not markers with substitutions
-- opt.confirm = true -- Confirm to save changes before exiting modified buffer
-- opt.cursorline = true -- Enable highlighting of the current line
-- opt.fillchars = {
--   foldopen = "",
--   foldclose = "",
--   fold = " ",
--   foldsep = " ",
--   diff = "╱",
--   eob = " ",
-- }
-- opt.foldlevel = 99
opt.formatoptions = "jcroqlntro" -- r seems to be the one that allows wraping bullets
-- opt.grepformat = "%f:%l:%c:%m"
opt.grepprg = "rg --vimgrep"
opt.ignorecase = true -- Ignore case
-- opt.inccommand = "nosplit" -- preview incremental substitute
-- opt.jumpoptions = "view"
opt.laststatus = 3 -- global statusline
opt.linebreak = true -- Wrap lines at convenient points
-- opt.list = true -- Show some invisible characters (tabs...
opt.mouse = "a" --
-- opt.pumblend = 10 -- Popup blend
-- opt.pumheight = 10 -- Maximum number of entries in a popup
-- opt.ruler = false -- Disable the default ruler
-- opt.sessionoptions = { "buffers", "curdir", "tabpages", "winsize", "help", "globals", "skiprtp", "folds" }
-- opt.shiftround = true -- Round indent
-- opt.shortmess:append({ W = true, I = true, c = true, C = true })
-- opt.showmode = false -- Dont show mode since we have a statusline
-- opt.sidescrolloff = 8 -- Columns of context
-- opt.signcolumn = "yes" -- Always show, otherwise it would shift the text each time
opt.smartcase = true -- -- Case-insensitive searching UNLESS \C or 1+ capital letters in the search

opt.smartindent = true -- Insert indents automatically
opt.spelllang = { "en" }
opt.splitbelow = true -- Put new windows below current default is nonintuitive
-- opt.splitkeep = "screen"
opt.splitright = true -- Put new windows right of current default is nonintuitive
-- opt.statuscolumn = [[%!v:lua.require'snacks.statuscolumn'.get()]]
-- opt.tabstop = 2 -- Number of spaces tabs count for
opt.termguicolors = true -- True color support
-- opt.timeoutlen = vim.g.vscode and 1000 or 300 -- Lower than default (1000) to quickly trigger which-key
-- opt.undofile = true    -- this is what allowspersistance after closing file. I have it off though bec I think I need to know what my latest change for a file is
-- opt.undolevels = 10000
opt.updatetime = 200 -- Save swap file and trigger CursorHold
opt.virtualedit = "block" -- Allow cursor to move where there is no text in visual block mode
opt.wildmode = "longest:full,full" -- Command-line completion mode
opt.winminwidth = 5 -- Minimum window width

  opt.smoothscroll = true
opt.foldmethod = "manual"
  opt.foldtext = ""
vim.wo.foldmethod = "manual" -- https://github.com/nvim-treesitter/nvim-treesitter?tab=readme-ov-file#folding
vim.g.markdown_recommended_style = 0

opt.autoindent = true -- Keep identation from previous line

-- -- Show line under cursor
opt.cursorline = true

-- -- Sets how neovim will display certain whitespace characters in the editor.
-- --  See `:help 'list'`
-- --  and `:help 'listchars'`
-- vim.opt.list = true
-- vim.opt.listchars = { tab = "» ", trail = "·", nbsp = "␣" }

