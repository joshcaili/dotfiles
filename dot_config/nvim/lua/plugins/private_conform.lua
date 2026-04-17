
return {
  "stevearc/conform.nvim",
  enabled = true,
  event = "BufReadPre",
  opts = {
    formatters_by_ft = {
      lua = { "stylua" },
      markdown = { "prettier" },
      javascript = { "prettier" },
      typescript = { "prettier" },
    },

    formatters = {
      stylua = {
        -- Proper args format for Conform
        args = function()
          return { "--indent-type", "Spaces", "--indent-width", "2", "-" }
        end,
      },
      prettier = {},
    },

    stop_after_first = true,
  },
}
