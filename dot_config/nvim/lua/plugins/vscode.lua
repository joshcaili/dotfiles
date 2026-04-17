local in_vscode = (vim.g.vscode == true) or (vim.env.VSCODE_PID ~= nil)

if not in_vscode then
  return {}
end

return {
  { import = "plugins.flash" },
}

