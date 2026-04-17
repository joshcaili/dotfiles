#!/bin/bash
# --- Notch Wrapping Script (Dummy Spacer Reorder) ---
# This script monitors the width of items on the left side of the bar.
# When items hit the notch threshold, it moves an invisible `notch_dummy` item
# immediately before the overlapping item.
# Because `notch_dummy` is assigned `display=$INTERNAL_DISPLAY` in sketchybarrc,
# it ONLY affects the built-in monitor! External monitors are completely gap-less.

NOTCH_START=520 
CURRENT_X=10 

ITEMS=($(sketchybar --query bar | jq -r '.items[]' | grep -E '^space\.|^front_app$'))

OVERLAP_FOUND=0
OVERLAP_ITEM=""

# Reset ALL items to their standard left position (removes any old position=e wrapper effects)
for item in "${ITEMS[@]}"; do
  sketchybar --set "$item" position=left
done

# Loop through and find the exact item that overlaps the notch
for item in "${ITEMS[@]}"; do
  QUERY=$(sketchybar --query "$item")
  DRAWING=$(echo "$QUERY" | jq -r '.geometry.drawing')
  
  if [ "$DRAWING" != "on" ]; then
    continue
  fi

  WIDTH=$(echo "$QUERY" | jq -r '.bounding_rects[].size[0]' 2>/dev/null | head -n 1)
  
  if [ -z "$WIDTH" ] || [ "$WIDTH" == "null" ] || [ "$WIDTH" == "0.000000" ] || [ "$WIDTH" == "0" ]; then
    continue
  fi

  WIDTH=${WIDTH%.*}
  
  # Check if adding this item would enter the notch area
  if [ $((CURRENT_X + WIDTH)) -gt $NOTCH_START ]; then
    OVERLAP_FOUND=1
    OVERLAP_ITEM="$item"
    break # Stop searching, we found the insertion point!
  fi
  
  CURRENT_X=$((CURRENT_X + WIDTH))
done

if [ "$OVERLAP_FOUND" -eq 1 ]; then
  # We hit the notch! Turn on the dummy spacer and move it right before the overlapping item.
  sketchybar --set notch_dummy drawing=on
  sketchybar --move notch_dummy before "$OVERLAP_ITEM"
else
  # Nothing hits the notch, completely hide the dummy spacer.
  sketchybar --set notch_dummy drawing=off
fi
