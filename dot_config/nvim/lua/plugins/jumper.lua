-- Quoted paths in ~/.jfiles / ~/.jfolders:
-- 1) Neovim: `~/.local/share/nvim/lazy/jumper.nvim/plugin/jumper.lua` wraps path before
--    `jumper update` (re-apply after `:Lazy sync` if overwritten).
-- 2) Terminal (zsh): most folder DB writes come from `jumper shell zsh` precmd, NOT from
--    Neovim. Source after jumper shell:
--      source ~/.config/nvim/extra/jumper-quoted-zsh.zsh

return {
    "homerours/jumper.nvim",
    dependencies = { "ibhagwan/fzf-lua" },
    config = function()
        local jumper = require("jumper.fzf-lua")

        -- Override jump_to_directory to open directories with oil instead of netrw
        jumper.jump_to_directory = function(opts)
            opts = opts or {}
            opts.exec_empty_query = true
            opts.actions = {
                default = function(selected)
                    local f = require("fzf-lua").path.entry_to_file(selected[1])
                    if vim.fn.isdirectory(f.path) == 1 then
                        _G.oil_ui.open_oil_in_preferred_mode(f.path)
                    else
                        vim.cmd.edit(f.path)
                    end
                end
            }
            opts.fzf_opts = { ['--keep-right'] = true, ['--ansi'] = true }
            opts = require("fzf-lua").config.normalize_opts(opts, "files")
            opts.preview = {
                type = 'cmd',
                fn = function(items)
                    local f = require("fzf-lua").path.entry_to_file(items[1])
                    return "ls -1UpC --color=always " .. vim.fn.shellescape(vim.fs.normalize(f.path))
                end
            }
            opts.cwd_prompt = false
            opts.previewer = true
            require("fzf-lua").fzf_live(function(q)
                local cmd = require("jumper").make_command("directories", opts, q[1])
                return vim.fn.systemlist(cmd)
            end, opts)
        end

        local function jump_to_oil_3pane()
          local jumper_mod = require("jumper")
          local fzf = require("fzf-lua")
          
          local function split(inputstr, sep)
            if sep == nil then sep = "%s" end
            local t = {}
            for str in string.gmatch(inputstr, "([^" .. sep .. "]+)") do
              table.insert(t, str)
            end
            return t
          end

          local opts = {
            exec_empty_query = true,
            actions = {
              ["default"] = function(selected)
                local f = fzf.path.entry_to_file(selected[1])
                _G.oil_ui.open_oil_in_preferred_mode(f.path)
              end
            },
            fzf_opts = { ['--keep-right'] = true, ['--ansi'] = true },
            preview = {
              type = 'cmd',
              fn = function(items)
                local f = fzf.path.entry_to_file(items[1])
                return "ls -1UpC --color=always " .. vim.fn.shellescape(vim.fs.normalize(f.path))
              end
            },
            cwd_prompt = false,
            previewer = true,
          }
          opts = fzf.config.normalize_opts(opts, "files")
          
          fzf.fzf_live(function(q)
            local cmd = jumper_mod.make_command("directories", opts, q[1])
            return vim.fn.systemlist(cmd)
          end, opts)
        end

        vim.keymap.set('n', '<leader>ffd', jump_to_oil_3pane)

        vim.keymap.set('n', '<leader>fff', jumper.jump_to_file)

        vim.keymap.set('n', '<leader>ffg', jumper.find_in_files)

        -- Defaults should be good enough,
        -- one typically does not need the following:
        require("jumper").setup({
            jumper_max_results = 200,           -- maximum number of results to show 
                                                -- in Telescope. Default: 300
            jumper_max_completion_results = 10, -- maximum number of results to show
                                                -- when completing :Z/Zf commands. Default: 12
            jumper_beta = 0.9,                  -- "beta" used for ranking (default: 1.0)
            jumper_syntax = "fuzzy",            -- default = "extended"
            jumper_home_tilde = true,           -- substitute $HOME with ~/ in the results (default: true)
            jumper_relative = false,            -- outputs relative pathes (default: false)
            jumper_case_sensitivity = "insensitive", 
        })
    end
}
