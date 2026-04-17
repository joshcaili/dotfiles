// @ts-nocheck
import fs from "fs";
import { KarabinerRules } from "./types";
import {
  createHyperSubLayers,
  createTabHyperSubLayers,
  createNumLayer,
  createSymbolLayer,
  app,
  open,
  rectangle,
  shell,
} from "./utils";
const rules: KarabinerRules[] = [


    
        {
            "description": "10. Vivaldi open dupe profiles (no multitouch conditions)",
            "manipulators": [
                {
                    "from": {
                        "key_code": "f20",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Default'" }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "f22",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 1'" }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "f22",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 2'" }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "f22",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 3'" }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "f22",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 4'" }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "f22",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 5'" }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "f22",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 6'" }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "f15",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 7'" }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "right shift to option (aerospace) Lctrl+backspace = delforward",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 0
                        }
                    ],
                    "from": { "key_code": "right_shift" },
                    "to": [{ "key_code": "right_option" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 0
                        }
                    ],
                    "from": {
                        "key_code": "delete_or_backspace",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "key_code": "delete_forward" }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "10. Vivaldi open dupe profiles (Left + Bottom half only, no frontmost check)",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_lower_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "a",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Default'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_lower_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "s",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 1'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_lower_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "n",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 2'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_lower_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "f",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 3'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_lower_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "g",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 4'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_lower_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "d",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 5'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_lower_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "h",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 6'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_lower_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "j",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 7'" }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "10. Vivaldi switch profiles (Left + Upper half only, Frontmost Vivaldi)",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_upper_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "bundle_identifiers": [
                                "^com\\.vivaldi\\.Vivaldi$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "a",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Default'" }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_upper_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "bundle_identifiers": [
                                "^com\\.vivaldi\\.Vivaldi$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "s",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 1'" }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_upper_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "bundle_identifiers": [
                                "^com\\.vivaldi\\.Vivaldi$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "n",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 2'" }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_upper_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "bundle_identifiers": [
                                "^com\\.vivaldi\\.Vivaldi$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "f",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 3'" }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_upper_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "bundle_identifiers": [
                                "^com\\.vivaldi\\.Vivaldi$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "g",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 4'" }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_upper_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "bundle_identifiers": [
                                "^com\\.vivaldi\\.Vivaldi$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "d",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 5'" }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_upper_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "bundle_identifiers": [
                                "^com\\.vivaldi\\.Vivaldi$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "h",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 6'" }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_upper_half_area",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "bundle_identifiers": [
                                "^com\\.vivaldi\\.Vivaldi$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "j",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 7'" }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "Left Trackpad + J/K (Vertical) and H/L (Horizontal) Scroll for piantor",
            "enabled": false,
            "manipulators": [
                {
                    "description": "Scroll Down",
                    "from": {
                        "key_code": "end",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "mouse_key": { "vertical_wheel": 62 } }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 0
                        }
                    ],
                    "description": "Scroll Up",
                    "from": {
                        "key_code": "home",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "mouse_key": { "vertical_wheel": -62 } }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 0
                        }
                    ],
                    "description": "Scroll Left",
                    "from": {
                        "key_code": "keypad_2",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "mouse_key": { "horizontal_wheel": -42 } }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "description": "Scroll Right",
                    "from": {
                        "key_code": "keypad_1",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "mouse_key": { "horizontal_wheel": 42 } }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "Left Trackpad + U for Left Click, I for Right Click",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "n",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "pointing_button": "button1" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "m",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "pointing_button": "button2" }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "Left Trackpad + J/K (Vertical) and H/L (Horizontal) Scroll",
            "enabled": false,
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "description": "Scroll Down",
                    "from": {
                        "key_code": "j",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "mouse_key": { "vertical_wheel": 42 } }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "description": "Scroll Up",
                    "from": {
                        "key_code": "k",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "mouse_key": { "vertical_wheel": -42 } }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "description": "Scroll Left",
                    "from": {
                        "key_code": "l",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "mouse_key": { "horizontal_wheel": -42 } }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "description": "Scroll Right",
                    "from": {
                        "key_code": "h",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "mouse_key": { "horizontal_wheel": 42 } }],
                    "type": "basic"
                }
            ]
        },

        {
            "description": "Left Shift + 1 Finger Extension = Left Click (Hold)",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "left_shift",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "pointing_button": "button1" }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "Lctrl + tab, no need anymore bec i have thumb keys",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_right_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "left_control",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        {
                            "key_code": "tab",
                            "modifiers": ["left_control"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "11. Switch layouts kaehi",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_right_half_area",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "delete_or_backspace",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        { "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Default'" },
                        { "select_input_source": { "input_source_id": "com.apple.keylayout.US" } }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "delete_or_backspace",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        { "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Mod'" },
                        // { "select_input_source": { "input_source_id": "org.unknown.keylayout.ColemakDH" } }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_right_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "delete_or_backspace",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "select_input_source": { "input_source_id": "org.unknown.keylayout.ColemakDH" } }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "delete_or_backspace",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "select_input_source": { "input_source_id": "com.apple.keylayout.US" } }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "up_arrow",
                        "modifiers": { "mandatory": ["right_command"] }
                    },
                    "to": [{ "select_input_source": { "input_source_id": "org.unknown.keylayout.jemak" } }],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "up_arrow",
                        "modifiers": { "mandatory": ["right_command"] }
                    },
                    "to": [{ "select_input_source": { "input_source_id": "org.unknown.keylayout.Graphite" } }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "Tap + 1 finger total",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "9",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Finder'" }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "12.  left half right half",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "caps_lock",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        {
                            "key_code": "delete_or_backspace",
                            "modifiers": ["left_option"]
                        }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_right_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "tab",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        {
                            "key_code": "grave_accent_and_tilde",
                            "modifiers": ["left_command"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "9. Obsidian Link to Embed F[;a! (Option-E on Colemak)",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "bundle_identifiers": [
                                "^md\\.obsidian$"
                            ],
                            "type": "frontmost_application_if"
                        }
                    ],
                    "from": {
                        "key_code": "k",
                        "modifiers": { "mandatory": ["option"] }
                    },
                    "to": [
                        { "key_code": "escape" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        {
                            "key_code": "e",
                            "modifiers": ["left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "open_bracket" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "o" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "u" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        {
                            "key_code": "1",
                            "modifiers": ["left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "escape" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "e" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "close_bracket" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "o" }
                    ],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "open_bracket",
                        "modifiers": { "mandatory": ["option"] }
                    },
                    "to": [
                        { "key_code": "escape" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        {
                            "key_code": "e",
                            "modifiers": ["left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        {
                            "key_code": "1",
                            "modifiers": ["left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "z" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "e" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "close_bracket" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "p" }
                    ],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "close_bracket",
                        "modifiers": { "mandatory": ["option"] }
                    },
                    "to": [
                        { "key_code": "escape" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "left_arrow" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "a" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        {
                            "key_code": "backslash",
                            "modifiers": ["left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 1,
                            "key_code": "vk_none"
                        },
                        { "key_code": "period" },
                        {
                            "hold_down_milliseconds": 1,
                            "key_code": "vk_none"
                        },
                        { "key_code": "period" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "escape" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "e" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "close_bracket" },
                        {
                            "hold_down_milliseconds": 50,
                            "key_code": "vk_none"
                        },
                        { "key_code": "p" }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "99.Global Trackpad Vi Arrows + Fill)",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "w",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "key_code": "up_arrow" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "a",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "key_code": "down_arrow" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "d",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "key_code": "left_arrow" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "f",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "key_code": "right_arrow" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "s",
                        "modifiers": { "mandatory": [] }
                    },
                    "to": [
                        {
                            "key_code": "e",
                            "modifiers": ["control", "fn"]
                        }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "s",
                        "modifiers": { "mandatory": ["left_shift"] }
                    },
                    "to": [
                        {
                            "key_code": "e",
                            "modifiers": ["left_command", "left_control"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "99 global Touch Vi ER DF CV (Left Side) EOL EOW",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "o",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "key_code": "home" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "l",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "key_code": "end" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "3",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        {
                            "key_code": "left_arrow",
                            "modifiers": ["left_command"]
                        }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "4",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        {
                            "key_code": "right_arrow",
                            "modifiers": ["left_command"]
                        }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_right_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "d",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Obsidian'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "e",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        {
                            "key_code": "left_arrow",
                            "modifiers": ["left_option"]
                        }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "r",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        {
                            "key_code": "right_arrow",
                            "modifiers": ["left_option"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "8bit do u → Ctrl+Z (device-specific)", //8bitdo micro
            "manipulators": [
                {
                    "conditions": [
                        {
                            "identifiers": [
                                {
                                    "is_keyboard": true,
                                    "product_id": 36888,
                                    "vendor_id": 11720
                                }
                            ],
                            "type": "device_if"
                        }
                    ],
                    "from": {
                        "key_code": "u",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [
                        {
                            "key_code": "z",
                            "modifiers": ["control"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "8BitDo micro – Button mappings (VID 11720 / PID 36896)",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "identifiers": [
                                {
                                    "is_game_pad": true,
                                    "product_id": 36896,
                                    "vendor_id": 11720
                                }
                            ],
                            "type": "device_if"
                        }
                    ],
                    "from": {
                        "modifiers": { "optional": ["any"] },
                        "pointing_button": "button5"
                    },
                    "to": [
                        {
                            "key_code": "t",
                            "modifiers": ["command"]
                        }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "identifiers": [
                                {
                                    "is_game_pad": true,
                                    "product_id": 36896,
                                    "vendor_id": 11720
                                }
                            ],
                            "type": "device_if"
                        }
                    ],
                    "from": {
                        "modifiers": { "optional": ["any"] },
                        "pointing_button": "button4"
                    },
                    "to": [
                        {
                            "key_code": "4",
                            "modifiers": ["command"]
                        }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "identifiers": [
                                {
                                    "is_game_pad": true,
                                    "product_id": 36896,
                                    "vendor_id": 11720
                                }
                            ],
                            "type": "device_if"
                        }
                    ],
                    "from": {
                        "modifiers": { "optional": ["any"] },
                        "pointing_button": "button11"
                    },
                    "to": [
                        {
                            "key_code": "t",
                            "modifiers": ["command", "shift"]
                        }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "identifiers": [
                                {
                                    "is_game_pad": true,
                                    "product_id": 36896,
                                    "vendor_id": 11720
                                }
                            ],
                            "type": "device_if"
                        }
                    ],
                    "from": {
                        "modifiers": { "optional": ["any"] },
                        "pointing_button": "button12"
                    },
                    "to": [
                        {
                            "key_code": "4",
                            "modifiers": ["command"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": " (8BitDo Zero 2 Windows mode)Ctrl+Z",
            "manipulators": [
                {
                    "conditions": [
                        {
                            "identifiers": [
                                {
                                    "is_game_pad": true,
                                    "product_id": 1476,
                                    "vendor_id": 1356
                                }
                            ],
                            "type": "device_if"
                        }
                    ],
                    "from": {
                        "modifiers": { "optional": ["any"] },
                        "pointing_button": "button4"
                    },
                    "to": [
                        {
                            "key_code": "t",
                            "modifiers": ["command"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "2. double tap spacebar to caps lock(doesn't work good idea tho)",
            "enabled": false,
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "space pressed",
                            "type": "variable_if",
                            "value": 1
                        },
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 0
                        }
                    ],
                    "from": {
                        "key_code": "7",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "key_code": "a" }],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "5. Basic swap Esc - grave (Built-in Keyboard Only)broken2/26/2026?",
            "enabled": false,
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 0
                        },
                        {
                            "identifiers": [{ "is_built_in_keyboard": true }],
                            "type": "device_if"
                        }
                    ],
                    "from": { "key_code": "escape" },
                    "to": [{ "key_code": "grave_accent_and_tilde" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 0
                        },
                        {
                            "identifiers": [{ "is_built_in_keyboard": true }],
                            "type": "device_if"
                        }
                    ],
                    "from": {
                        "key_code": "left_control",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "key_code": "left_control" }],
                    "to_if_alone": [
                        {
                            "key_code": "escape",
                            "modifiers": ["any"]
                        }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "10. Vivaldi switch profiles(OLD)",
            "enabled": false,
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "a",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Default' " }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "s",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 1' " }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "n",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 2' " }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "f",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 3' " }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "g",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 4' " }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "d",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 5' " }
                    ],
                    "type": "basic"
                },
                {
                    "from": {
                        "key_code": "h",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 6' " }
                    ],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_left_half_area",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "j",
                        "modifiers": { "mandatory": ["left_control"] }
                    },
                    "to": [
                        {
                            "key_code": "w",
                            "modifiers": ["left_command", "left_shift"]
                        },
                        {
                            "hold_down_milliseconds": 120,
                            "key_code": "vk_none"
                        },
                        { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 7' " }
                    ],
                    "type": "basic"
                }
            ]
        },
        {
            "description": "13. 2 Fingers to open(not used anymore)",
            "enabled": false,
            "manipulators": [
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "a",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ''" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "b",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Discord'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "c",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Google Chrome'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "d",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a '_'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "w",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Microsoft Word'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "g",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ' Goodnotes'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "p",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a '   '" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "m",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'MATLAB_R2024b'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "n",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ' Goodnotes'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "t",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Terminal'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "f",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ' ' " }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "n",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ' Karabiner-Elements'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "h",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ' Homerow.app'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "p",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Microsoft Powerpoint'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 1
                        }
                    ],
                    "from": {
                        "key_code": "m",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Youtube Music'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "i",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a 'Photos'" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "r",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ''" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "v",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ' '" }],
                    "type": "basic"
                },
                {
                    "conditions": [
                        {
                            "name": "multitouch_extension_finger_count_total",
                            "type": "variable_if",
                            "value": 2
                        }
                    ],
                    "from": {
                        "key_code": "r",
                        "modifiers": { "optional": ["any"] }
                    },
                    "to": [{ "shell_command": "open -a ' Goodnotes'" }],
                    "type": "basic"
                }
            ]
        },
    




];
const vivaldi = [
    {
        description: "tab hyper",
        manipulators: [
          {
            from: {
              key_code: "grave_accent_and_tilde",
              modifiers: {
                optional: ["any"],
              },
            },
            to: [
              {
                set_variable: {
                  name: "hypertab",
                  value: 1,
                },
              },
            ],
            to_after_key_up: [
              {
                set_variable: {
                  name: "hypertab",
                  value: 0,
                },
              },
            ],
            to_if_alone: [
                {
                  key_code: "grave_accent_and_tilde",
                },
              ],
            type: "basic",
          },
        ],
    },

    {
        description: "space hyper",
        manipulators: [
          {
            from: {
              key_code: "spacebar",
              modifiers: {
                optional: ["any"],
              },
            },
            to: [
              {
                set_variable: {
                  name: "hyper",
                  value: 1,
                },
              },
              {
                "key_code": "spacebar"
            },
            ],
            to_after_key_up: [
              {
                set_variable: {
                  name: "hyper",
                  value: 0,
                },
              },
            ],

            type: "basic",
          },
        ],
    }
]

const devices = [
        {
            "identifiers": {
                "is_pointing_device": true,
                "product_id": 45108,
                "vendor_id": 1133
            },
            "ignore": false,
            "mouse_flip_vertical_wheel": true,
            "mouse_swap_wheels": true
        },
        {
            "identifiers": {
                "is_game_pad": true,
                "product_id": 8201,
                "vendor_id": 1406
            },
            "ignore": false,
            "simple_modifications": [
                {
                    "from": { "generic_desktop": "dpad_down" },
                    "to": [{ "key_code": "4" }]
                },
                {
                    "from": { "generic_desktop": "dpad_left" },
                    "to": [{ "key_code": "1" }]
                },
                {
                    "from": { "generic_desktop": "dpad_right" },
                    "to": [{ "key_code": "2" }]
                },
                {
                    "from": { "generic_desktop": "dpad_up" },
                    "to": [{ "key_code": "spacebar" }]
                }
            ]
        },
        {
            "identifiers": {
                "is_keyboard": true,
                "product_id": 36888,
                "vendor_id": 11720
            },
            "simple_modifications": [
                {
                    "from": { "generic_desktop": "dpad_up" },
                    "to": [{ "key_code": "t" }]
                },
                {
                    "from": { "key_code": "h" },
                    "to": [{ "key_code": "hyphen" }]
                },
                {
                    "from": { "key_code": "k" },
                    "to": [{ "key_code": "p" }]
                },
                {
                    "from": { "key_code": "m" },
                    "to": [{ "key_code": "w" }]
                }
            ]
        },
        {
            "identifiers": { "is_consumer": true },
            "ignore": false
        },
        {
            "identifiers": {
                "is_game_pad": true,
                "is_pointing_device": true,
                "product_id": 736,
                "vendor_id": 1118
            },
            "ignore": false,
            "simple_modifications": [
                {
                    "from": { "pointing_button": "button3" },
                    "to": [{ "key_code": "hyphen" }]
                },
                {
                    "from": { "pointing_button": "button5" },
                    "to": [{ "key_code": "p" }]
                },
                {
                    "from": { "pointing_button": "button6" },
                    "to": [{ "key_code": "w" }]
                }
            ]
        },
        {//controller
            "identifiers": {
                "is_game_pad": true,
                "product_id": 1476,
                "vendor_id": 1356
            },
            "ignore": false,
            "simple_modifications": [
                {
                    "from": { "generic_desktop": "dpad_down" },
                    "to": [{ "key_code": "4" }]
                },
                {
                    "from": { "generic_desktop": "dpad_left" },
                    "to": [{ "key_code": "1" }]
                },
                {
                    "from": { "generic_desktop": "dpad_right" },
                    "to": [{ "key_code": "2" }]
                },
                {
                    "from": { "generic_desktop": "dpad_up" },
                    "to": [{ "key_code": "spacebar" }]
                },
                {
                    "from": { "pointing_button": "button3" },
                    "to": [{ "key_code": "hyphen" }]
                },
                {
                    "from": { "pointing_button": "button5" },
                    "to": [{ "key_code": "p" }]
                },
                {
                    "from": { "pointing_button": "button6" },
                    "to": [{ "key_code": "w" }]
                },
                {
                    "from": { "pointing_button": "button9" },
                    "to": [{ "key_code": "o" }]
                }
            ]
        },
        {
            "identifiers": { // 8bitdo micro
                "is_game_pad": true,
                "product_id": 36896,
                "vendor_id": 11720
            },
            "ignore": false,
            "simple_modifications": [
                {
                    "from": { "generic_desktop": "dpad_down" },
                    "to": [{ "key_code": "4" }]
                },
                {
                    "from": { "generic_desktop": "dpad_left" },
                    "to": [{ "key_code": "1" }]
                },
                {
                    "from": { "generic_desktop": "dpad_right" },
                    "to": [{ "key_code": "2" }]
                },
                {
                    "from": { "generic_desktop": "dpad_up" },
                    "to": [{ "key_code": "spacebar" }]
                },
                {
                    "from": { "pointing_button": "button4" },
                    "to": [{ "key_code": "hyphen" }]
                },
                {
                    "from": { "pointing_button": "button7" },// Left shoulderpad button2
                    "to": [{ "key_code": "r" }]
                },
                {
                    "from": { "pointing_button": "button8" }, // Right shoulderpad. to replay sentence
                    "to": [{ "key_code": "w" }]
                },
                {
                    "from": { "pointing_button": "button9" },
                    "to": [{ "key_code": "1" }]
                },
                {
                    "from": { "pointing_button": "button10" },
                    "to": [{ "key_code": "spacebar" }]
                },
                {
                    "from": { "pointing_button": "button13" },  //heart emoji
                    "to": [{ "key_code": "o" }]
                }
            ]
        },
        {
            "identifiers": {
                "is_pointing_device": true,
                "product_id": 49288,
                "vendor_id": 1133
            },
            "ignore": false,
            "mouse_flip_vertical_wheel": true
        },
        {
            "identifiers": {
                "is_pointing_device": true,
                "product_id": 50484,
                "vendor_id": 1133
            },
            "ignore": false,
            "simple_modifications": [
                {
                    "from": { "key_code": "right_option" },
                    "to": [{ "key_code": "right_command" }]
                }
            ]
        },
        {
            "identifiers": {
                "is_pointing_device": true,
                "product_id": 50489,
                "vendor_id": 1133
            },
            "ignore": false
        },
        {
            "identifiers": {
                "is_keyboard": true,
                "product_id": 50484,
                "vendor_id": 1133
            },
            "simple_modifications": [
                {
                    "from": { "key_code": "right_control" },
                    "to": [{ "key_code": "right_command" }]
                }
            ]
        },
        {
            "identifiers": {//piantor keyboard kb
                "is_keyboard": true,
                "is_pointing_device": true,
                "product_id": 24926,
                "vendor_id": 7504
            },
            "ignore": false,
            "manipulate_caps_lock_led": false
        },
        {
            "identifiers": {// built in mac keyboard
                "is_keyboard": true,
                "product_id": 834,
                "vendor_id": 1452
            },
            "simple_modifications": [
                {
                    "from": { "pointing_button": "button19" },
                    "to": [{ "apple_vendor_keyboard_key_code": "launchpad" }]
                }
            ]
        },
        {
            "identifiers": {//pulsar dongle
                "is_keyboard": true,
                "product_id": 64124,
                "vendor_id": 9639
            },
            "ignore": true
        },
        {
            "identifiers": { //pulsar xlite
                "is_pointing_device": true,
                "product_id": 64124,
                "vendor_id": 9639
            },
            "ignore": false,
            "mouse_flip_vertical_wheel": true
        }
];

const profiles = [
    {
        devices,
        name: "Mod",
        virtual_hid_keyboard: { "keyboard_type_v2": "ansi" },
        complex_modifications: {
            "parameters": { "basic.to_if_alone_timeout_milliseconds": 30 },
            rules,
        },
    },
    {
        devices, 
        name: "Default",//qwerty
        virtual_hid_keyboard: { "keyboard_type_v2": "ansi" },
        complex_modifications: {
            "rules": [
                {
                    "description": "Switch layouts",
                    "manipulators": [
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_right_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "delete_or_backspace",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Default'" }],
                            // "to": [{ "select_input_source": { "input_source_id": "org.unknown.keylayout.ColemakDH" } }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "delete_or_backspace",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Mod'" }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "1",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Colemak'" }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "spacebar",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'QWERTYMod'" }],
                            "type": "basic"
                        }

                    ]
                }
            ]
        },
    },


    {
        devices, 
        name: "QWERTYMod",//qwerty
        virtual_hid_keyboard: { "keyboard_type_v2": "ansi" },
        complex_modifications: {
            "rules": [
                {
                    "description": "Switch layouts",
                    "manipulators": [
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_right_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "delete_or_backspace",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Default'" }],
                            // "to": [{ "select_input_source": { "input_source_id": "org.unknown.keylayout.ColemakDH" } }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "delete_or_backspace",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Mod'" }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "1",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Colemak'" }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "spacebar",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'QWERTYMod'" }],
                            "type": "basic"
                        }

                    ]
                }
            ]
        },
    },




    {
        devices, 
        name: "Colemak",//qwerty
        virtual_hid_keyboard: { "keyboard_type_v2": "ansi" },
        complex_modifications: {
            "rules": [
                {
                    "description": "Switch layouts",
                    "manipulators": [
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_right_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "delete_or_backspace",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Default'" }],
                            // "to": [{ "select_input_source": { "input_source_id": "org.unknown.keylayout.ColemakDH" } }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "delete_or_backspace",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Mod'" }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "1",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'Colemak'" }],
                            "type": "basic"
                        },
                        {
                            "conditions": [
                                {
                                    "name": "multitouch_extension_finger_count_left_half_area",
                                    "type": "variable_if",
                                    "value": 2
                                }
                            ],
                            "from": {
                                "key_code": "spacebar",
                                "modifiers": { "optional": ["any"] }
                            },
                            "to": [{ "shell_command": "'/Library/Application Support/org.pqrs/Karabiner-Elements/bin/karabiner_cli' --select-profile 'QWERTYMod'" }],
                            "type": "basic"
                        }

                    ]
                }
            ]
        },
    },
];











fs.writeFileSync(
    "karabiner.json",
    JSON.stringify(
        {
            global: {
                show_in_menu_bar: false,
            },
            "machine_specific": { "krbn-3e128889-a957-446c-bc73-ec1c62ceed3d": { "enable_multitouch_extension": true } },
            profiles,
        },
        null,
        2
    )
);














