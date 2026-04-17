return {
	event = { "BufReadPost", "BufNewFile"},
	enabled = true,
  "neovim/nvim-lspconfig",  -- still needed for Lazy.nvim integration
  dependencies = {
    "mason-org/mason.nvim",
    "mason-org/mason-lspconfig.nvim",
    "hrsh7th/nvim-cmp",
    "hrsh7th/cmp-nvim-lsp",
  },
  config = function()
    local mason = require("mason")
    local mason_lsp = require("mason-lspconfig")
    local capabilities = require("cmp_nvim_lsp").default_capabilities()

    -- install servers
    mason.setup()
    mason_lsp.setup({ ensure_installed = { "marksman" } })

vim.lsp.start({
    name = "marksman",
    cmd = { "marksman" },
    filetypes = { "markdown" },
    capabilities = capabilities,
})
  end,
}
