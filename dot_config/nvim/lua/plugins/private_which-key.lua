return {
  enabled = true,
  "folke/which-key.nvim",
  opts = {
    sort = { "alphanum", "mod" },
    preset = "modern",

    delay = function(ctx)
      return ctx.plugin and 0 or 100
    end,
    win = {
      no_overlap = false,
      height = { min = 3, max = 140 },
      padding = { 0, 0 },
      width = { min = 30, max = 60 },
    },

    -- layout = {
    --   width = { min = 10, max = 300 }, -- min and max width of the columns
    --   spacing = 0, -- spacing between columns
    -- },
    keys = {
      scroll_down = "<c-a>", -- binding to scroll down inside the popup
      scroll_up = "<c-q>", -- binding to scroll up inside the popup
    },
  },
}
