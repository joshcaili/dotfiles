return {
lazy = false,
  "nvim-treesitter/nvim-treesitter",
  -- This line is the key to keeping everything in sync.
  -- It automatically runs :TSUpdate every time the plugin is installed or updated.
  build = ":TSUpdate",
  config = function()
    require("nvim-treesitter.configs").setup({
      -- Add all the languages you regularly use here
      ensure_installed = {
        "lua",
        "vim",
        "vimdoc",
        "query",
        "javascript",
        "typescript",
        "html",
        "css",
        "json",
        "markdown",
        "markdown_inline",
      },

      -- Other standard options
      sync_install = false,
      auto_install = false,
      highlight = {
        enable = true,
      disable = { "latex" },
      },
      indent = {
        enable = true,
      },
    })
  end,
}
