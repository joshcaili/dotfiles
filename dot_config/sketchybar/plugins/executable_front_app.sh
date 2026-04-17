#!/bin/sh

. "$CONFIG_DIR/plugins/icon_map_fn.sh"

get_front_app() {
  osascript -e 'tell application "System Events" to get name of first application process whose frontmost is true' 2>/dev/null
}

APP_NAME=""
case "$SENDER" in
  "front_app_switched")
    APP_NAME="$INFO"
    ;;
  *)
    APP_NAME="$(get_front_app)"
    ;;
esac

if [ -z "$APP_NAME" ]; then
  sketchybar --bar hidden=on
  sketchybar --set "$NAME" label="" icon=""
  exit 0
fi

icon_map "$APP_NAME"
sketchybar --bar hidden=off
sketchybar --set "$NAME" label="$APP_NAME" icon="$icon_result"