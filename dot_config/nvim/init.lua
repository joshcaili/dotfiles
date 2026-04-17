vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1
require("config.lazy")
require("config.options")
require("config.keymaps")
require("config.highlights")
require("config.autocmds")
-- Other settings...


vim.diagnostic.config({
  -- Enable signs in the gutter
  signs = true,

  -- Enable squiggly underlines (also called "undercurls")
  underline = true,

  -- Enable virtual text to show the error message inline
  virtual_text = true, -- Set to false if you only want underlines

  -- Show diagnostics in a floating window on hover
  float = {
    source = "always", -- Or "if_many" to only show if there are multiple errors
  },
})
