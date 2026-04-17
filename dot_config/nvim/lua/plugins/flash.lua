return {
  "folke/flash.nvim",
  event = "VeryLazy",
  ---@type Flash.Config
  opts = {},
  keys = {
    { "s", mode = { "n", "x", "o" }, function() require("flash").jump() end, desc = "Flash" },
    { "S", mode = { "n", "x", "o" }, function() require("flash").treesitter() end, desc = "Flash Treesitter" },
    { "r", mode = "o", function() require("flash").remote() end, desc = "Remote Flash" },
    { "R", mode = { "o", "x" }, function() require("flash").treesitter_search() end, desc = "Treesitter Search" },
    { "<c-s>", mode = { "c" }, function() require("flash").toggle() end, desc = "Toggle Flash Search" },
  },  config = function()
    require("flash").setup({
      continue = true,
      modes = {
        search = {
          enabled = false,
          multi_window = true,
        },
      },
    })

    -- Force registration of the search UI hook

    vim.api.nvim_set_hl(0, "FlashLabel", { fg = "#000000", bg = "#00afaa", bold = true })
    vim.api.nvim_set_hl(0, "FlashMatch", { fg = "#000000", bg = "#fff89c", bold = true })
  end,
}
