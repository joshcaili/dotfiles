return {
  "ibhagwan/fzf-lua",
  config = function()
    require("fzf-lua").setup {
      keymap = {
        fzf = {
          -- Change Esc so it doesn't abort the picker
          ["esc"] = "none",
        },
      },
    }
  end,
}