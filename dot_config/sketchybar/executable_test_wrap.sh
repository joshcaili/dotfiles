#!/bin/bash
NOTCH_START=560
CURRENT_X=10 # padding_left

# We need the ordered list of items on the left side.
ITEMS=(
  "space.backspace" "space.tab" "space.quote" "space.semicolon"
  "space.v" "space.A" "space.B" "space.C" "space.D" "space.E"
  "space.F" "space.G" "space.H" "space.I" "space.J" "space.K"
  "space.L" "space.M" "space.N" "space.O" "space.P" "space.Q"
  "space.R" "space.S" "space.T" "space.U" "space.W" "space.X"
  "space.Y" "space.Z" "space.space"
  "front_app"
)

for item in "${ITEMS[@]}"; do
  # Get the raw width of the item (without surrounding padding maybe? No, sketchybar geometry includes padding if it's item padding, but wait, geometry.size is exactly the box it takes up).
  WIDTH=$(sketchybar --query "$item" | jq -r '.bounding_rects."display-1".size[0]' 2>/dev/null)
  
  # if width is null, maybe the item is hidden or doesn't exist
  if [ -z "$WIDTH" ] || [ "$WIDTH" == "null" ]; then
    continue
  fi

  # Cast float to int
  WIDTH=${WIDTH%.*}
  
  if [ $((CURRENT_X + WIDTH)) -gt $NOTCH_START ]; then
    sketchybar --set "$item" position=e
  else
    sketchybar --set "$item" position=q
  fi
  
  CURRENT_X=$((CURRENT_X + WIDTH))
done
