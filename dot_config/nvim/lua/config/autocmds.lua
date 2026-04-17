-- ~/.config/nvim/lua/core/autocmds.lua




-- local preview_opened = false
--
-- vim.api.nvim_create_autocmd("User", {
--   pattern = "OilEnter",
--   callback = function()
--     if preview_opened then return end
--     preview_opened = true
--
--     local oil = require("oil")
--     vim.defer_fn(function()
--       pcall(oil.open_preview)
--     end, 100)
--   end,
-- })

-- Failsafe to ensure filetype is always detected
vim.api.nvim_create_autocmd("BufEnter", {
  pattern = "*",
  callback = function()
    if vim.bo.filetype == "" then
      vim.cmd("filetype detect")
    end
  end,
})

-- Add any other autocommands here...

-- A robust global autocommand to enforce simple text wrapping
vim.api.nvim_create_autocmd("FileType", {
  pattern = "*",
  callback = function()
    -- Add any filetypes here that should NOT be touched
    local ignore_ft = {
      "gitcommit",
      "man",
      "TelescopePrompt",
      "NvimTree",
      "term",
    }

    -- If the filetype is not in the ignore list, enforce our settings
    if not vim.tbl_contains(ignore_ft, vim.bo.filetype) then
      
      -- 1.  Reset the advanced indentation engines. This is the key!
      vim.bo.indentexpr = "" -- Disable expression-based indenting
      vim.bo.cindent = false   -- Disable C-style indenting
      vim.bo.smartindent = false -- Disable smart indenting

      -- 2. Enable the simple indentation we want
      vim.bo.autoindent = true

      -- 3. Set our wrapping preferences
      vim.bo.textwidth = 68
      vim.opt.formatoptions:append 't'
    end
  end,
  desc = "Force simple wrapping and indent for most filetypes"
})



--
-- -- Global autocommand to enforce text wrapping for all filetypes
-- vim.api.nvim_create_autocmd("FileType", {
--   pattern = "*", -- The '*' is a wildcard that matches ALL filetypes
--   callback = function()
--     -- Set the width to 80 characters
--     vim.bo.textwidth = 68
--
--     -- Ensure the 't' flag is present to enable auto-wrapping
--     vim.opt.formatoptions:append 't'
--   end,
--   desc = "Enable wrapping for all filetypes"
-- })
