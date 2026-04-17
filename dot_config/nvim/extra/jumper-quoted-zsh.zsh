# Source this file AFTER: eval "$(jumper shell zsh)"
#
# jumper's default __jumper_update_db runs on every precmd and calls:
#   jumper update --type=directories ... "$PWD"
# which stores plain paths in ~/.jfolders. If you want literal "path" in the DB
# (same as the patched jumper.nvim plugin/jumper.lua), this redefines only
# __jumper_update_db to pass "\"$PWD\"" as a single argv (quotes stored in DB).

if ! typeset -f __jumper_update_db >/dev/null 2>&1; then
  echo "jumper-quoted-zsh: load jumper shell first: eval \"\$(jumper shell zsh)\"" >&2
  return 1
fi

__jumper_update_db() {
  if [[ ! -z $__jumper_current_folder ]]; then
    if [[ $__jumper_current_folder != $PWD ]]; then
      jumper update --type=directories -w 1.0 "\"$PWD\""
    else
      jumper update --type=directories -w 0.3 "\"$PWD\""
    fi
  fi
  __jumper_current_folder=$PWD
  if [[ -n $__JUMPER_CLEAN_FREQ ]] && [[ $(( RANDOM % __JUMPER_CLEAN_FREQ )) == 0 ]]; then
    jumper clean > /dev/null 2>&1
  fi
}
