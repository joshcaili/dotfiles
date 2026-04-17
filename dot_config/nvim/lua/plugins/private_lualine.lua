return {
  "nvim-lualine/lualine.nvim",
  event = "VeryLazy", -- load lazily
  enabled = true,
  config = function()
    require("lualine").setup({
      options = {
        theme = "auto", -- or "auto", "gruvbox", etc.
        icons_enabled = true,
        section_separators = { left = "", right = "" },
        component_separators = {},
        disabled_filetypes = { statusline = {}, winbar = {} },
        always_divide_middle = true,
        globalstatus = true, -- modern statusline
      },
      sections = {
        lualine_a = { "mode" },
        lualine_b = {},
        lualine_c = { { "filename", path = 0 } }, -- 0 = short, 1 = relative, 2 = absolute
        lualine_x = {
          {
            "filename",
            path = 2,
            file_status = true,
            symbols = {
              modified = "+", -- removes [+]
              readonly = "[RO]",
            },
          },
        }, -- removes [RO]  } },
        lualine_y = { "progress" },
        lualine_z = { "location" },
      },
      inactive_sections = {
        lualine_a = {},
        lualine_b = {},
        lualine_c = { { "filename", path = 0 } },
        -- lualine_x = { "location" },
        lualine_y = {},
        lualine_z = {},
      },
      tabline = {},
      winbar = {},
      inactive_winbar = {},
      extensions = { "lazy", "nvim-tree", "quickfix" },
    })
  end,
}
