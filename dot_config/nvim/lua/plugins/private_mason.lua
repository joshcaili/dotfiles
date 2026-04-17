
return {
event = { "BufReadPost", "BufNewFile"},--needs to boot up for lsp & linters
  "mason-org/mason.nvim",
  cmd = "Mason",
  config = function()
    require("mason").setup()
    require("mason-lspconfig").setup({
      ensure_installed = {
        "clangd",
        "pyright",
        "marksman",
        "lua_ls",
        "eslint",
        "ts_ls",
        "ruff",
        "yamlls",
        "jsonls",
        "neocmake",
        "stylua",
        "vtsls",
        "intelephense",
      },
    })
  end,
}
