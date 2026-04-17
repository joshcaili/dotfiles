return {
  "nvim-telescope/telescope.nvim",
  keys = {
    { "<leader>tz", "<cmd>Telescope zoxide list<cr>", desc = "telescop" },
  },
  dependencies = {
    "nvim-lua/plenary.nvim",
    "jvgrootveld/telescope-zoxide",
  },
  config = function()
    local telescope = require("telescope")

    telescope.setup({
      extensions = {
        zoxide = {
          mappings = {
            default = {
              -- This tells Telescope to do nothing for the main action,
              -- allowing the after_action to handle everything.
              action = function() end,

              -- ✨ Your original logic, now placed correctly
              after_action = function(selection)
                local oil = require("oil")
                local snacks = require("snacks")
                local resolved_path = vim.fn.expand(selection.path)

                -- Delay opening oil by 50ms
                vim.defer_fn(function()
                  oil.open(vim.fn.expand(selection.path), { preview = { vertical = true } })
                end, 10)

                -- Update zoxide score in the background
                vim.system({ "zoxide", "add", resolved_path }, { text = true }, function(obj)
                  if obj.code == 0 then
                    snacks.notify("Z added: " .. resolved_path)
                  else
                    snacks.notify("Z failed: " .. (obj.stderr or "unknown error"), vim.log.levels.ERROR)
                  end
                end)
              end,
            },
          },
        },
      },
    })

    telescope.load_extension("zoxide")
  end,
}
