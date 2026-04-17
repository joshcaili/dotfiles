
return {
  {
      enabled = true,
    "chrishrb/gx.nvim",
    keys = { { "gx", "<cmd>Browse<cr>", mode = { "n", "x" } } },
    cmd = { "Browse" },
    init = function()
      vim.g.netrw_nogx = 1 -- disable netrw gx
    end,
    dependencies = { "nvim-lua/plenary.nvim" },
    submodules = false,
    config = function()
      require("gx").setup {
        open_browser_app = "open",
        open_browser_args = {  }, --background  if it's not empty & you have { " "} that opens finder

        open_callback = function(url)
          vim.fn.setreg("+", url) -- copy URL to clipboard
        end,

        select_prompt = true,

        handlers = {
          plugin = true,
          github = true,
          brewfile = true,
          package_json = true,
          search = true,
          go = true,
          jira = {
            name = "jira",
            handle = function(mode, line, _)
              local ticket = require("gx.helper").find(line, mode, "(%u+-%d+)")
              if ticket and #ticket < 20 then
                return "http://jira.company.com/browse/" .. ticket
              end
            end,
          },
          rust = {
            name = "rust",
            filetype = { "toml" },
            filename = "Cargo.toml",
            handle = function(mode, line, _)
              local crate = require("gx.helper").find(line, mode, "(%w+)%s-=%s")
              if crate then
                return "https://crates.io/crates/" .. crate
              end
            end,
          },
        },

        handler_options = {
          search_engine = "https://search.brave.com/search?q=",
          select_for_search = false,

          git_remotes = function(fname)
            if fname:match("myproject") then
              return { "mygit" }
            end
            return { "upstream", "origin" }
          end,

          git_remote_push = function(fname)
            return fname:match("myproject")
          end,
        },
      }
    end,
  },
}

