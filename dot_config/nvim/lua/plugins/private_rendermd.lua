return {
lazy = true,
ft = "markdown",
    "MeanderingProgrammer/render-markdown.nvim",
    enabled = true,
    dependencies = {
        "nvim-treesitter/nvim-treesitter",
        "nvim-mini/mini.icons",
    },

    config = function()
        local color_fg = "#001100"

        -- local color1_bg = "#5c4670"
        -- local color2_bg = "#7e7f4a"
        -- local color3_bg = "#bfbfbf"
        -- local color4_bg = "#2d6f5e"
        -- local color5_bg = "#067c87"
        -- local color6_bg = "#5b995b"

    local color1_bg = "#a26d99"
    local color2_bg = "#e8ea90"
    local color3_bg = "#ffffff"
    local color4_bg = "#449877"
    local color5_bg = "#0cd9eb"
    local color6_bg = "#99ff99"
    local color_text = "#000000"

        vim.cmd(string.format([[highlight Headline1Bg guifg=%s guibg=%s]], color_fg, color1_bg))
        vim.cmd(string.format([[highlight Headline2Bg guifg=%s guibg=%s]], color_fg, color2_bg))
        vim.cmd(string.format([[highlight Headline3Bg guifg=%s guibg=%s]], color_fg, color3_bg))
        vim.cmd(string.format([[highlight Headline4Bg guifg=%s guibg=%s]], color_fg, color4_bg))
        vim.cmd(string.format([[highlight Headline5Bg guifg=%s guibg=%s]], color_fg, color5_bg))
        vim.cmd(string.format([[highlight Headline6Bg guifg=%s guibg=%s]], color_fg, color6_bg))


        local m = require("render-markdown")
        m.setup({
            enabled = true,
            render_modes = { "i", "c", "n", "t" },
            heading = {
                --  icons = { "󰲡 ", "󰲣 ", "󰲥 ", "󰲧 ", "󰲩 ", "󰲫 " },
                icons = { "󰎤 ", "󰎧 ", "󰎪 ", "󰎭 ", "󰎱 ", "󰎳 " },
                left_pad = 2,
                border = true,
                -- border_virtual = true,
                -- border_prefix = true,
                sign = true,
                backgrounds = {
                    "Headline1Bg", "Headline2Bg", "Headline3Bg",
                    "Headline4Bg", "Headline5Bg", "Headline6Bg",
                },
                foregrounds = {
                    "Headline1Fg", "Headline2Fg", "Headline3Fg",
                    "Headline4Fg", "Headline5Fg", "Headline6Fg",
                },
            },
            bullet = {
                enabled = true,
                left_pad = 2,
                right_pad = 0,
            },
            checkbox = {
                enabled = true,
                unchecked = {
                    icon = "   󰄱 ",
                    highlight = "RenderMarkdownUnchecked",
                },
                checked = {
                    icon = "   󰱒 ",
                    highlight = "RenderMarkdownChecked",
                },
            },
            link = {
                image = vim.g.neovim_mode == "skitty" and "" or "󰥶 ",
                custom = {
                    youtu = { pattern = "youtu%.be", icon = "󰗃 " },
                },
            },
        })
        -- Shim for snacks.nvim which expects a .render() method
        require("render-markdown.api").render = function(opts)
            local buf = opts.buf
            local win = vim.fn.bufwinid(buf)
            if win == -1 then
                return
            end
            require("render-markdown.core.ui").update(buf, win, "Snacks", true)
        end
    end,
}
