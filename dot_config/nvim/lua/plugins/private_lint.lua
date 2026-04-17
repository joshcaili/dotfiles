return {
  {
    "mfussenegger/nvim-lint",
    event = { "BufReadPost", "BufNewFile"}, -- Use a simple event for loading
    config = function()
      local lint = require("lint")


require('lint').linters.markdownlint = {
        cmd = "markdownlint",
        stdin = false, -- This linter needs a filename, not stdin
        args =  { "--disable", "MD040" },
 parser = require('lint.parser').from_errorformat("%f:%l:%c: %m"),
      }

      -- 2. THEN, assign the now-defined linter to the filetype
      lint.linters_by_ft = {
        markdown = { "markdownlint" },
        fish = { "fish" },
      }

      -- 3. Set up the autocommand to trigger it on events
      vim.api.nvim_create_autocmd({ "BufWritePost", "InsertLeave" }, {
        callback = function()
          lint.try_lint()
        end,
      })

      -- Your keymap for manual triggering is fine
      vim.keymap.set("n", "<leader>rz", function()
        lint.try_lint()
      end, { desc = "Trigger linting" })
    end,
  },
}
