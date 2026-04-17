-- Filename: ~/github/dotfiles-latest/neovim/neobean/lua/config/highlights.lua
-- ~/github/dotfiles-latest/neovim/neobean/lua/config/highlights.lua

-- Require the colors.lua module and access the colors directly without
-- additional file reads
  -- Darker backgrounds (derived manually)
    -- local color1_bg = "#5c4670"
    -- local color2_bg = "#7e7f4a"
    -- local color3_bg = "#bfbfbf"
    -- local color4_bg = "#2d6f5e"
    -- local color5_bg = "#067c87"
    -- local color6_bg = "#5b995b"

    local color1_bg = "#b28ecc"
    local color2_bg = "#e8ea90"
    local color3_bg = "#ffffff"
    local color4_bg = "#44ba99"
    local color5_bg = "#0deafc"
    local color6_bg = "#99ff99"
    local color_fg = "#000000"
-- local color1_bg = colors["linkarzu_color04"]
-- local color2_bg = colors["linkarzu_color02"]
-- local color3_bg = colors["linkarzu_color03"]
-- local color4_bg = colors["linkarzu_color01"]
-- local color5_bg = colors["linkarzu_color05"]
-- local color6_bg = colors["linkarzu_color08"]
-- -- local color_fg = colors["linkarzu_color26"]
-- local color_fg = colors["linkarzu_color13"]
vim.cmd(
  string.format([[highlight @markup.heading.1.markdown cterm=bold gui=bold guifg=%s guibg=%s]], color_fg, color1_bg)
)
vim.cmd(
  string.format([[highlight @markup.heading.2.markdown cterm=bold gui=bold guifg=%s guibg=%s]], color_fg, color2_bg)
)
vim.cmd(
  string.format([[highlight @markup.heading.3.markdown cterm=bold gui=bold guifg=%s guibg=%s]], color_fg, color3_bg)
)
vim.cmd(
  string.format([[highlight @markup.heading.4.markdown cterm=bold gui=bold guifg=%s guibg=%s]], color_fg, color4_bg)
)
vim.cmd(
  string.format([[highlight @markup.heading.5.markdown cterm=bold gui=bold guifg=%s guibg=%s]], color_fg, color5_bg)
)
vim.cmd(
  string.format([[highlight @markup.heading.6.markdown cterm=bold gui=bold guifg=%s guibg=%s]], color_fg, color6_bg)
)
