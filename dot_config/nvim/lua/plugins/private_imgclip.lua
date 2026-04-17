return {
	ft = "markdown",
  lazy = true,
  event = { "BufReadPost", "BufNewFile"},
    enabled = true,
  "HakonHarnes/img-clip.nvim",
  opts = {
      default = {
      drag_and_drop = {
      insert_mode = true,
    	},
    },
    	filetypes =  {
		markdown = {
template = "![[$FILE_PATH]]"
		}
	},
},
    

    -- add options here
    -- or leave it empty to use the default settings
  keys = {
    -- suggested keymap
    { "<leader>p", "<cmd>PasteImage<cr>", desc = "Paste image from system clipboard" },
  },
}
