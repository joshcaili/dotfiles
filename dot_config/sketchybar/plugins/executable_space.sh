#!/usr/bin/env bash
source "$CONFIG_DIR/colors.sh"
. "$CONFIG_DIR/plugins/icon_map_fn.sh"

FOCUSED_WORKSPACE=${FOCUSED_WORKSPACE:-$1}

WINDOW_COUNT="$(aerospace list-windows --workspace "$1" --count 2>/dev/null | tr -d '[:space:]')"
if [[ -z "$WINDOW_COUNT" ]]; then WINDOW_COUNT=0; fi

if [[ "$WINDOW_COUNT" -eq 0 ]]; then
  sketchybar --set "$NAME" drawing=off background.drawing=off
  sketchybar --set "$NAME" label="" icon=""
  exit 0
fi

APP_LIST="$(
  aerospace list-windows --workspace "$1" 2>/dev/null | awk -F'|' '
    {
      gsub(/^ *| *$/, "", $2);
      if ($2 != "") print $2;
    }'
)"

ICON_STRIP=""
if [[ -n "$APP_LIST" ]]; then
  while IFS= read -r app; do
    [[ -z "$app" ]] && continue
    icon_map "$app"
    # icon_map sets `icon_result` based on the app name.
    ICON_STRIP+=" ${icon_result}"
  done <<< "$APP_LIST"
fi
ICON_STRIP="${ICON_STRIP#" "}"

sketchybar --set "$NAME" drawing=on

if [ "$1" = "$FOCUSED_WORKSPACE" ]; then
  # same as josean's "selected" branch
  sketchybar --set "$NAME" \
    background.drawing=on \
    background.color=$ACCENT_COLOR \
    label="$1" \
    label.font="SF Pro:Semibold:16.0" \
    label.color=$BAR_COLOR \
    icon.font="sketchybar-app-font:Regular:16.0" \
    icon.color=$BAR_COLOR \
    icon.drawing=$([[ -n "$ICON_STRIP" ]] && echo on || echo off) \
    icon="$ICON_STRIP"
else
  # same as josean's "else" branch
  sketchybar --set "$NAME" \
    background.drawing=off \
    label="$1" \
    label.font="SF Pro:Semibold:16.0" \
    label.color=$ACCENT_COLOR \
    icon.font="sketchybar-app-font:Regular:16.0" \
    icon.color=$ACCENT_COLOR \
    icon.drawing=$([[ -n "$ICON_STRIP" ]] && echo on || echo off) \
    icon="$ICON_STRIP"
fi