return {
  {
    "glacambre/firenvim",
    lazy = false,
    enabled = true,
    build = ":call firenvim#install(0)",
    config = function()
      -- Firenvim's main configuration (vim.g.firenvim_config)
      vim.g.firenvim_config = {
        globalSettings = { alt = "all" },
        localSettings = {
          [".*"] = {
            cmdline  = "neovim",
            content  = "text",
            priority = 0,
            selector = "textarea",
            takeover = "never" -- Or "auto", "always" as desired
          }
        }
      }

      -- The vim.cmd block for Firenvim UI adjustments
      -- vim.cmd([[
      --   function! s:IsFirenvimActive(event) abort
      --     if !exists('*nvim_get_chan_info')
      --       return 0
      --     endif
      --     let l:ui = nvim_get_chan_info(a:event.chan)
      --     return has_key(l:ui, 'client') && has_key(l:ui.client, 'name') &&
      --         \ l:ui.client.name =~? 'Firenvim'
      --   endfunction
      --
      --   function! OnUIEnter(event) abort
      --     if s:IsFirenvimActive(a:event) && &lines < 10
      --       set lines=20
      --     endif
      --   endfunction
      --
      --   augroup FirenvimUser
      --     autocmd!
      --     autocmd UIEnter * call OnUIEnter(deepcopy(v:event))
      --   augroup end
      -- ]])



    end, -- Closing the config function for Firenvim
  },
  -- ... other plugin definitions would go here, separated by commas ...
}
