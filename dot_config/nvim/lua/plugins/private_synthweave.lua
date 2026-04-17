return {
  "samharju/synthweave.nvim",
  enabled = true,
  lazy = false,
  priority = 1000,
  config = function()
    require("synthweave").setup({
      transparent = false,
      palette = {
        -- We will only change the core background color here
        bg0 = "#040404",
      },
      overrides = {
      },
    })
    vim.cmd.colorscheme("synthweave")
  end,
}
-- return {
--   enabled = true,
--   "samharju/synthweave.nvim",
--   lazy = false, -- make sure we load this during startup if it is your main colorscheme
--   priority = 1000,
--   config = function()
--     local synthweave = require("synthweave")
--
-- synthweave.setup({
--   transparent = false,
--   overrides = {
--     -- custom background colors for markdown headings
--     RenderMarkdownH1Bg = { bg = "#b28ecc" },
--     RenderMarkdownH2Bg = { bg = "#44ba99" },
--     RenderMarkdownH3Bg = { bg = "#ffffff" },
--     RenderMarkdownH4Bg = { bg = "#99ff99" },
--     RenderMarkdownH5Bg = { bg = "#1e90ff" },
--     RenderMarkdownH6Bg = { bg = "#ff00ff" },
--   },
--   palette = {
--     bg0 = "#040404",
--   },
-- })
--
--
--     -- synthweave.setup({
--     --   transparent = false,
--     --   overrides = {
--     --     -- override any group
--     --     Identifier = { fg = "#f22f52" },
--     --
--     --   },
--     --   palette = {
--     --     -- override palette colors, take a peek at synthweave/palette.lua
--     --     bg0 = "#040404",
-- -- vim.api.nvim_set_hl(0, "MarkviewHeading1", { fg = "#b28ecc", bg= "#b28ecc", bold = true })
-- -- vim.api.nvim_set_hl(0, "MarkviewHeading2", { fg = "#44ba99", bold = true })
-- -- vim.api.nvim_set_hl(0, "MarkviewHeading3", { fg = "#FFFFFF", bold = true })
-- -- vim.api.nvim_set_hl(0, "MarkviewHeading4", { fg = "#99FF99", bold = true })
-- -- vim.api.nvim_set_hl(0, "MarkviewHeading5", { fg = "#1E90FF", bold = true })
-- -- vim.api.nvim_set_hl(0, "MarkviewHeading6", { fg = "#FF00FF", bold = true })
--     --   },
--     -- })
--     vim.cmd.colorscheme("synthweave")
--   end,
-- }
