// @ts-nocheck
import fs from "fs";
import { KarabinerRules } from "./types";
import {
  createHyperSubLayers,
  createTabHyperSubLayers,
  createNumLayer,
  createSymbolLayer,
  multitouchUpperLeftConditions,
  app,
  open,
  rectangle,
  shell,
} from "./utils";


 const simplemods = [
        {
            "from": { "key_code": "right_shift" },
            "to": [{ "key_code": "right_option" }],
        },
        //row 1
        // grave is tab hyper key
        { "from": { "key_code": "1" }, "to": { "key_code": "x" } },
        { "from": { "key_code": "2" }, "to": { "key_code": "f" } },
        { "from": { "key_code": "3" }, "to": { "key_code": "d" } },
        { "from": { "key_code": "4" }, "to": { "key_code": "p" } },
        { "from": { "key_code": "5" }, "to": { "key_code": "slash" } },

        { "from": { "key_code": "8" }, "to": { "key_code": "j" } },
        { "from": { "key_code": "9" }, "to": { "key_code": "o" } },
        { "from": { "key_code": "0" }, "to": { "key_code": "u" } },
        { "from": { "key_code": "hyphen" }, "to": { "key_code": "delete_or_backspace" } },
        { "from": { "key_code": "equal_sign" }, "to": { "key_code": "n" } },
        { "from": { "key_code": "backspace" }, "to": { "key_code": "s" } },

        //row2
        { "from": { "key_code": "tab" }, "to": { "key_code": "backspace" } },
        { "from": { "key_code": "q" }, "to": { "key_code": "n" } },
        { "from": { "key_code": "w" }, "to": { "key_code": "s" } },
        { "from": { "key_code": "e" }, "to": { "key_code": "t" } },
        { "from": { "key_code": "r" }, "to": { "key_code": "c" } },
        { "from": { "key_code": "t" }, "to": { "key_code": "y" } },
        { "from": { "key_code": "u" }, "to": { "key_code": "m" } },
        { "from": { "key_code": "i" }, "to": { "key_code": "h" } },
        { "from": { "key_code": "o" }, "to": { "key_code": "a" } },
        { "from": { "key_code": "p" }, "to": { "key_code": "e" } },
        { "from": { "key_code": "open_bracket" }, "to": { "key_code": "i" } },
        { "from": { "key_code": "close_bracket" }, "to": { "key_code": "quote" } },
        //row3
        { "from": { "key_code": "caps_lock" }, "to": { "key_code": "left_shift" } },
        { "from": { "key_code": "a" }, "to": { "key_code": "b" } },
        { "from": { "key_code": "s" }, "to": { "key_code": "v" } },
        { "from": { "key_code": "d" }, "to": { "key_code": "k" } },
        { "from": { "key_code": "f" }, "to": { "key_code": "g" } },
        { "from": { "key_code": "g" }, "to": { "key_code": "w" } },

        { "from": { "key_code": "j" }, "to": { "key_code": "z" } },
        { "from": { "key_code": "k" }, "to": { "key_code": "l" } },
        { "from": { "key_code": "l" }, "to": { "key_code": "comma" } },
        { "from": { "key_code": "semicolon" }, "to": { "key_code": "period" } },
        { "from": { "key_code": "quote" }, "to": { "key_code": "q" } },
        { "from": { "key_code": "return_or_enter" }, "to": { "key_code": "right_option" } },
        
        // { "from": { "key_code": "v" }, "to": { "key_code": "r" } },
        // { "from": { "key_code": "c" }, "to": { "key_code": "left_command" } },
        
        // { "from": { "key_code": "left_command" }, "to": { "key_code": "left_command" } },
        // { "from": { "key_code": "m" }, "to": { "key_code": "spacebar" } },
        { "from": { "key_code": "comma" }, "to": { "key_code": "spacebar" } }  ,
        { "from": { "key_code": "period" }, "to": { "key_code": "" } }  
    ];


const rules: KarabinerRules[] = [
	{
        "description": "Set the mouse cursor position to center of the first screen by right_shift+c",
        "manipulators": [
            {
                "type": "basic",
                "from": {
                    "key_code": "f23",
                    "modifiers": { "optional": ["any"] }
                },
                "to": [
                    {
                        "software_function": {
                            "set_mouse_cursor_position": {
                                "x": "50%",
                                "y": "50%",
                                "screen": 0
                            }
                        }
                    }
                ]
            }
        ]
    },
    // {
    //     "description": "Trackpad: vi",
    //     "manipulators": [
    //         { "type": "basic", "from": { "key_code": "e" }, "to": [{ "key_code": "left_arrow", "modifiers": ["left_option"] }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_left_half_area", "value": 1 }] },
    //         { "type": "basic", "from": { "key_code": "r" }, "to": [{ "key_code": "right_arrow", "modifiers": ["left_option"] }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_total", "value": 1 }] },
    //         { "type": "basic", "from": { "key_code": "d" }, "to": [{ "key_code": "left_arrow"}], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_left_half_area", "value": 1 }] },
    //         { "type": "basic", "from": { "key_code": "f" }, "to": [{ "key_code": "right_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_total", "value": 1 }] }
    //     ]
    // }, 

    // {
    //     "description": "Trackpad: vi",
    //     "manipulators": [
    //         { "type": "basic", "from": { "key_code": "d" }, "to": [{ "key_code": "left_arrow", "modifiers": ["left_option"] }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_left_half_area", "value": 1 }] },
    //         { "type": "basic", "from": { "key_code": "f" }, "to": [{ "key_code": "right_arrow", "modifiers": ["left_option"] }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_total", "value": 1 }] },
    //         { "type": "basic", "from": { "key_code": "e" }, "to": [{ "key_code": "left_arrow"}], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_left_half_area", "value": 1 }] },
    //         { "type": "basic", "from": { "key_code": "r" }, "to": [{ "key_code": "right_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_total", "value": 1 }] },
            
    //         { "type": "basic", "from": { "key_code": "tab" }, "to": [{ "key_code": "escape" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_total", "value": 1 }] },
    //         { "type": "basic", "from": { "key_code": "q" }, "to": [{ "key_code": "down_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_total", "value": 1 }] },
    //         { "type": "basic", "from": { "key_code": "w" }, "to": [{ "key_code": "up_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_total", "value": 1 }] },
    //     ]
    // },
        {
        "description": "Trackpad: vi",
        "manipulators": [
            { "type": "basic", "from": { "key_code": "d" }, "to": [{ "key_code": "left_arrow", "modifiers": ["left_option"] }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "f" }, "to": [{ "key_code": "right_arrow", "modifiers": ["left_option"] }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "e" }, "to": [{ "key_code": "left_arrow"}], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "r" }, "to": [{ "key_code": "right_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            
            // { "type": "basic", "from": { "key_code": "i" }, "to": [{ "key_code": "left_arrow", "modifiers": ["left_option"] }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            // { "type": "basic", "from": { "key_code": "o" }, "to": [{ "key_code": "right_arrow", "modifiers": ["left_option"] }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "i" }, "to": [{ "key_code": "left_arrow"}], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "o" }, "to": [{ "key_code": "right_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "open_bracket" }, "to": [{ "key_code": "down_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "p" }, "to": [{ "key_code": "up_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },

            
            // { "type": "basic", "from": { "key_code": "tab" }, "to": [{ "key_code": "escape" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "q" }, "to": [{ "key_code": "down_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
            { "type": "basic", "from": { "key_code": "w" }, "to": [{ "key_code": "up_arrow" }], "conditions": [{ "type": "variable_if", "name": "multitouch_extension_finger_count_right_half_area", "value": 1 }] },
        ]
    },
    {
        "description": "11. Switch profiles MUST keep",
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
                    // { "select_input_source": { "input_source_id": "com.apple.keylayout.US" } }
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
                // "to": [{ "select_input_source": { "input_source_id": "org.unknown.keylayout.ColemakDH" } }],
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
        ]
    },
    {
        "description": "Lctrl+backspace = delforward",
        "manipulators": [
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

];

const dusk = [
    // --- MAIN LAYOUT ---
{
    "description": "Compressed MacBook Layout",
    "manipulators": 
    // [        // row 1  for qwertySHIFTed+MODon built in keyboard
    //     { "type": "basic", "from": { "key_code": "grave_accent_and_tilde", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "tab" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "1", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "q" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "2", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "w" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "3", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "e" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "4", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "r" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "5", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "t" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "6", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "y" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     // { "type": "basic", "from": { "key_code": "6", "modifiers": { "mandatory":["left_shift"]} }, "to": [{ "key_code": "slash", modifiers:["left_shift"] }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    //     { "type": "basic", "from": { "key_code": "7", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "u" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     // { "type": "basic", "from": { "key_code": "7", "modifiers": { "mandatory":["left_shift"]} }, "to": [{ "key_code": "i", modifiers:["left_shift"] }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     // { "type": "basic", "from": { "key_code": "7", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "f23" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "8", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "y" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "9", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "u" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "0", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "i" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "hyphen" }, "to": [{ "key_code": "o" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     // { "type": "basic", "from": { "key_code": "hyphen","modifiers":{"mandatory":["left_shift"]} }, "to": [{ "key_code": "close_bracket", modifiers:["left_shift"] }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "equal_sign" }, "to": [{ "key_code": "p" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "delete_or_backspace" }, "to": [{ "key_code": "left_control" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    //     // row 2
    //     { "type": "basic", "from": { "key_code": "tab", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "delete_or_backspace" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "q", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "a" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "w", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "s" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "e", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "d" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "r", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "f" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "t", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "g" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "u", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "h" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "i", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "j" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "o", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "k" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "p", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "l" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "open_bracket", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "semicolon" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "close_bracket", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "quote" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    //     // row 3
    //     { "type": "basic", "from": { "key_code": "caps_lock", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "left_shift" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "a", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "z" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "s", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "x" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "d", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "c" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "f", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "v" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "g", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "b" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    //     { "type": "basic", "from": { "key_code": "j", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "n" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "k", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "m" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "l", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "comma" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "semicolon", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "period" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "quote", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "slash" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "return_or_enter", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "right_option" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    //     { "type": "basic", "from": { "key_code": "x", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "left_command" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "c", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "r" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     //hyper { "type": "basic", "from": { "key_code": "v", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "r" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    //     { "type": "basic", "from": { "key_code": "right_command", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "spacebar" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "m", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "spacebar" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "comma", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "right_control" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    


    //     { "type": "basic", "from": { "key_code": "left_shift" }, "to": [{ "key_code": "vk_non" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    //     { "type": "basic", "from": { "key_code": "left_command" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    // ]


     [        // row 1  for  if you want dusk duskShiftedBOTHpiantor_QWERTMODprofile | if you want dusk_BothSidepiantor-QWERT_BuiltinMac-ModProfile | dusk_LHSpiantor-qwert_BuiltinMac-ModProfile,
    // { "type": "basic", "from": { "key_code": "tab", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "delete_or_backspace" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "grave_accent_and_tilde", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "tab" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code":"2", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "x" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // { "type": "basic", "from": { "key_code": "2", "modifiers": { "mandatory":["left_shift"]} }, "to": [{ "key_code": "slash", modifiers:["left_shift"] }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "3", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "l" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "4", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "d" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "5", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "p" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "6", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "f23" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // { "type": "basic", "from": { "key_code": "6", "modifiers": { "mandatory":["left_shift"]} }, "to": [{ "key_code": "slash", modifiers:["left_shift"] }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

        { "type": "basic", "from": { "key_code": "7", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "slash" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "7", "modifiers": { "mandatory":["left_shift"]} }, "to": [{ "key_code": "slash", modifiers:["left_shift"] }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // { "type": "basic", "from": { "key_code": "7", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "f23" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "8", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "j" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "9", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "o" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "0", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "u" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // Shift+hyphen first: optional any so shift+option+hyphen still maps to shifted semicolon (not plain semicolon+option).
        { "type": "basic", "from": { "key_code": "hyphen", "modifiers": { "mandatory": ["left_shift"], "optional": ["any"] } }, "to": [{ "key_code": "semicolon", "modifiers": ["left_shift"] }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // optional any: Enter→right_option (or any option) + physical hyphen must remap to semicolon so chords use dusk positions, not QWERTY hyphen.
        { "type": "basic", "from": { "key_code": "hyphen", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "semicolon" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "equal_sign", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "left_control" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

        // row 2
        { "type": "basic", "from": { "key_code": "tab", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "delete_or_backspace" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "q", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "n" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "w", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "s" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "e", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "t" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "r", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "c" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "t", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "y" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "u", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "m" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "i", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "h" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "o", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "a" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "p", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "e" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "open_bracket", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "i" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "close_bracket", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "quote" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

        // row 3
        { "type": "basic", "from": { "key_code": "caps_lock", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "left_shift" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "a", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "b" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "s", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "v" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "d", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "k" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "f", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "g" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "g", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "w" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

        { "type": "basic", "from": { "key_code": "j", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "z" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "k", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "f" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "l", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "comma" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "semicolon", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "period" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "quote", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "q" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "return_or_enter", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "right_option" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

        // Do not require symbol=0: if comma is held first (symbol layer), x must still become left_command or ⌘+symbol chords never get a command modifier.
        // { "type": "basic", "from": { "key_code": "x", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "left_command" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // { "type": "basic", "from": { "key_code": "c", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "r" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        //hyper { "type": "basic", "from": { "key_code": "v", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "r" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

        { "type": "basic", "from": { "key_code": "spacebar", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "r" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // { "type": "basic", "from": { "key_code": "right_command", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "spacebar" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // { "type": "basic", "from": { "key_code": "m", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "spacebar" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "comma", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "spacebar" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // { "type": "basic", "from": { "key_code": "period", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        
        { "type": "basic", "from": { "key_code": "left_shift" }, "to": [{ "key_code": "vk_non" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        // { "type": "basic", "from": { "key_code": "left_command" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "z" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "v" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "n" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "b" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "comma" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "period" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "slash" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "up_arrow" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "down_arrow" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "right_arrow" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "left_arrow" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
        { "type": "basic", "from": { "key_code": "escape" }, "to": [{ "key_code": "vk_none" }], "conditions": [{ "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    ]
    

    // { "type": "basic", "from": { "key_code": "tab", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "delete_or_backspace" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "q", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "n" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "w", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "s" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "e", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "t" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "r", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "c" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "t", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "y" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "u", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "m" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "i", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "h" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "o", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "a" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "p", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "e" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "open_bracket", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "i" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "close_bracket", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "quote" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    // // row 3
    // { "type": "basic", "from": { "key_code": "caps_lock", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "left_shift" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "a", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "b" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "s", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "v" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "d", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "k" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "f", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "g" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "g", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "w" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    // { "type": "basic", "from": { "key_code": "j", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "z" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "k", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "f" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "l", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "comma" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "semicolon", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "period" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "quote", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "q" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "return_or_enter", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "right_option" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },

    // { "type": "basic", "from": { "key_code": "v", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "0" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "c", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "r" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "m", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "spacebar" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] },
    // { "type": "basic", "from": { "key_code": "comma", "modifiers": { "optional": ["any"] } }, "to": [{ "key_code": "right_control" }], "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }, { "type": "variable_if", "name": "num", "value": 0 }, { "type": "variable_if", "name": "symbol", "value": 0 }, { "type": "variable_if", "name": "hyper", "value": 0 }] }
},
];
const vivaldi = [
    // {
    //     "description": "10. Vivaldi dupe profiles (kb only, only when frontmost is Vivaldi)",
    //     "manipulators": [
    //         {
    //             "conditions": [
    //                 {
    //                     "type": "frontmost_application_if",
    //                     "bundle_identifiers": [
    //                         "^com\\.vivaldi\\.Vivaldi$"
    //                     ]
    //                 }
    //             ],
    //             "from": {
    //                 "key_code": "f14"
    //             },
    //             "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Default'" }],
    //             "type": "basic"
    //         },
    //         {
    //             "conditions": [
    //                 {
    //                     "type": "frontmost_application_if",
    //                     "bundle_identifiers": [
    //                         "^com\\.vivaldi\\.Vivaldi$"
    //                     ]
    //                 }
    //             ],
    //             "from": {
    //                 "key_code": "f15"
    //             },
    //             "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 1'" }],
    //             "type": "basic"
    //         },
    //         {
    //             "conditions": [
    //                 {
    //                     "type": "frontmost_application_if",
    //                     "bundle_identifiers": [
    //                         "^com\\.vivaldi\\.Vivaldi$"
    //                     ]
    //                 }
    //             ],
    //             "from": {
    //                 "key_code": "f22"
    //             },
    //             "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 2'" }],
    //             "type": "basic"
    //         },
    //         {
    //             "conditions": [
    //                 {
    //                     "type": "frontmost_application_if",
    //                     "bundle_identifiers": [
    //                         "^com\\.vivaldi\\.Vivaldi$"
    //                     ]
    //                 }
    //             ],
    //             "from": {
    //                 "key_code": "f22"
    //             },
    //             "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 3'" }],
    //             "type": "basic"
    //         },
    //         {
    //             "conditions": [
    //                 {
    //                     "type": "frontmost_application_if",
    //                     "bundle_identifiers": [
    //                         "^com\\.vivaldi\\.Vivaldi$"
    //                     ]
    //                 }
    //             ],
    //             "from": {
    //                 "key_code": "f22"
    //             },
    //             "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 4'" }],
    //             "type": "basic"
    //         },
    //         {
    //             "conditions": [
    //                 {
    //                     "type": "frontmost_application_if",
    //                     "bundle_identifiers": [
    //                         "^com\\.vivaldi\\.Vivaldi$"
    //                     ]
    //                 }
    //             ],
    //             "from": {
    //                 "key_code": "f22"
    //             },
    //             "to": [{ "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 5'" }],
    //             "type": "basic"
    //         },
    //     ]
    // },

    // COPY: Vivaldi switch profiles via F13-F18 (Frontmost Vivaldi, no multitouch conditions)
    {
        "description": "10. Vivaldi switch profiles (F13-F18, Vivaldi frontmost, no multitouch conditions)",
        "manipulators": [
            {
                "conditions": [
                    {
                        "bundle_identifiers": [
                            "^com\\.vivaldi\\.Vivaldi$"
                        ],
                        "type": "frontmost_application_if"
                    }
                ],
                "from": {
                    "key_code": "f13"
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
                        "bundle_identifiers": [
                            "^com\\.vivaldi\\.Vivaldi$"
                        ],
                        "type": "frontmost_application_if"
                    }
                ],
                "from": {
                    "key_code": "f14"
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
                        "bundle_identifiers": [
                            "^com\\.vivaldi\\.Vivaldi$"
                        ],
                        "type": "frontmost_application_if"
                    }
                ],
                "from": {
                    "key_code": "f15"
                },
                "to": [
                    {
                        "key_code": "w",
                        "modifiers": ["left_command", "left_shift"]
                    },
                    {
                        "hold_down_milliseconds": 120,
                        "key_code": "vk_none"
                    },// geo nba
                    { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 2'" }
                ],
                "type": "basic"
            },
            {
                "conditions": [
                    {
                        "bundle_identifiers": [
                            "^com\\.vivaldi\\.Vivaldi$"
                        ],
                        "type": "frontmost_application_if"
                    }
                ],
                "from": {
                    "key_code": "f16"
                },
                "to": [
                    {
                        "key_code": "w",
                        "modifiers": ["left_command", "left_shift"]
                    },
                    {
                        "hold_down_milliseconds": 120,
                        "key_code": "vk_none"
                    },//math
                    { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 3'" }
                ],
                "type": "basic"
            },
            {
                "conditions": [
                    {
                        "bundle_identifiers": [
                            "^com\\.vivaldi\\.Vivaldi$"
                        ],
                        "type": "frontmost_application_if"
                    }
                ],
                "from": {
                    "key_code": "f17"
                },
                "to": [
                    {
                        "key_code": "w",
                        "modifiers": ["left_command", "left_shift"]
                    },
                    {
                        "hold_down_milliseconds": 120,
                        "key_code": "vk_none"
                    },//media manga
                    { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 4'" }
                ],
                "type": "basic"
            },
            {
                "conditions": [
                    {
                        "bundle_identifiers": [
                            "^com\\.vivaldi\\.Vivaldi$"
                        ],
                        "type": "frontmost_application_if"
                    }
                ],
                "from": {
                    "key_code": "f18"
                },
                "to": [
                    {
                        "key_code": "w",
                        "modifiers": ["left_command", "left_shift"]
                    },
                    {
                        "hold_down_milliseconds": 120,
                        "key_code": "vk_none"
                    },//food
                    { "shell_command": "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 5'" }
                ],
                "type": "basic"
            }
        ]
    },

];


const devices = [
        {
            "identifiers": {
                "is_pointing_device": true,
                "product_id": 45108,
                "vendor_id": 1133
            },
            "ignore": false,
            "mouse_flip_vertical_wheel": false,
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
            "simple_modifications": [ //dusk
                {
                    "from": { "key_code": "right_shift" },
                    "to": [{ "key_code": "right_option" }],
                },
            ]
        },
        // {
        //     "identifiers": {//pulsar dongle
        //         "is_keyboard": true,
        //         "product_id": 64124,
        //         "vendor_id": 9639
        //     },
        //     "ignore": true
        // },
        {
            "identifiers": { //pulsar xlite
                "is_pointing_device": true,
                "product_id": 64123,
                "vendor_id": 9639
            },
            "ignore": false,
            "mouse_flip_vertical_wheel": true
        }
];


const modtap = [
    // --- LAYER TRIGGERS ---
    // Num layer (keyboard): hold a key that sets variable `num` while held — required for the `createNumLayer` branch besides multitouch.
    // Example (pick a free key_code; conflicts with "vim hypervim" if you use right_command for both):
    // { "description": "num layer hold", "manipulators": [{ "type": "basic", "from": { "key_code": "right_option", "modifiers": { "optional": ["any"] } }, "to": [{ "set_variable": { "name": "num", "value": 1 } }], "to_after_key_up": [{ "set_variable": { "name": "num", "value": 0 } }] }] },
{ "description": "num layer n", "manipulators": [{ "type": "basic", "from": { "key_code": "z", "modifiers": { "optional": ["any"] } }, "to": [{ "set_variable": { "name": "num", "value": 1 } }], "to_after_key_up": [{ "set_variable": { "name": "num", "value": 0 } }]   }] },
// { "description": "symbol layer comma", "manipulators": [{ "type": "basic", "from": { "key_code": "comma", "modifiers": { "optional": ["any"] } }, "to": [{ "set_variable": { "name": "symbol", "value": 1 } }], "to_after_key_up": [{ "set_variable": { "name": "symbol", "value": 0 } }],  "conditions": [{ "type": "device_if", "identifiers": [{ "vendor_id": 1452, "product_id": 834 }] }] }] },


{
  description: "symbol layer comma",
  manipulators: [
    {
      type: "basic",
      from: { key_code: "period", modifiers: { optional: ["any"] } },
      to: [{ set_variable: { name: "symbol", value: 1 } }],
      to_after_key_up: [{ set_variable: { name: "symbol", value: 0 } }]
    }
  ]
},


    {
        description: "vim hypervim",
        manipulators: [
          {
            from: {
              key_code: "m",
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
            conditions: [
            //   {
            //     type: "device_if",
            //     identifiers: [
            //       { vendor_id: 1452, product_id: 834 }
            //     ]
            //   }
            ],
          },
        ],
    },

    
];

const layers = [
    ...createHyperSubLayers({
        // "grave_accent_and_tilde": { to: [{ key_code: "f1" }]},
        "2": { to: [{ key_code: "f1" }]},
        "3":    { to: [{ key_code: "f2" }] },
        "4":    { to: [{ key_code: "f3" }] },
        "5":    { to: [{ "key_code": "left_arrow", "modifiers": ["left_option"] }]},
        "6":    { to: [{ "key_code": "right_arrow", "modifiers": ["left_option"] }]},
        "7":    { to: [{ key_code: "f6" }] },

        "8":    { to: [{ key_code: "f7" }] },
        "9":    { to: [{ key_code: "f8" }] },
        "0":    { to: [{ key_code: "f9" }] },
        "hyphen":    { to: [{ key_code: "f10" }] },
        "equal_sign":    { to: [{ key_code: "f11" }] },
        "backspace":    { to: [{ key_code: "f12" }] },

        "tab": {to: [{ key_code: "escape"}]},
        "q":  { to: [{ key_code: "down_arrow" }] },
        "w":    { to: [{ key_code: "up_arrow" }] },
        "e":    { to: [{ key_code: "left_arrow" }] },
        "r":    { to: [{ key_code: "right_arrow" }] },
        "t":    { to: [{ key_code: "5" }] },
        
        "u":    { to: [{ key_code: "up_arrow" }] },
        "i":    { to: [{"pointing_button": "button1"}] },
        "o":    { to: [{"pointing_button": "button2"}] },
        "p":    { to: [{ key_code: "left_arrow" }] },
        "open_bracket":    { to: [{ key_code: "right_arrow" }] },
        "close_bracket":    { to: [{ key_code: "return_or_enter" }] },

        // "u":    { to: [{ key_code: "6" }] },
        // "i":    { to: [{ key_code: "left_arrow"}] },
        // "o":    { to: [{ key_code: "right_arrow"}] },
        // "p":    { to: [{ key_code: "up_arrow" }] },
        // "open_bracket":    { to: [{ key_code: "down_arrow" }] },
        // "close_bracket":    { to: [{ key_code: "return_or_enter" }] },

        "caps_lock":    { to: [{ key_code: "f13" }] },
        "a":    { to: [{ key_code: "f14" }] },
        "s":    { to: [{ key_code: "f15" }] },
        "d":    { to: [{ key_code: "f16" }] },
        "f":    { to: [{ key_code: "f17" }] },
        "g":    { to: [{ key_code: "f18" }] },

        "j":    { to: [{ key_code: "down_arrow" }] },
        "k":    { to: [{"pointing_button": "button1"}] },
        "l":    { to: [{"pointing_button": "button2"}] },
        "semicolon": { to: [{ key_code: "left_shift" }] },
        "quote": { to: [{ key_code: "left_shift" }] },
        "return_or_enter": { to: [{ key_code: "left_shift" }] },

    }),


    // Tab Hyper sublayers (activated while holding `hypertab` / grave_accent_and_tilde)
    // ...createTabHyperSubLayers({


    // }),

    // Num layer: `num === 1` (hold a key that sets variable `num` in modtap) OR upper-left multitouch (`alsoWhen`).
    ...createNumLayer(
      {
        grave_accent_and_tilde: { to: [{ key_code: "f1" }] },
        "1": { to: [{ key_code: "f1" }] },
        "2": { to: [{ key_code: "f2" }] },
        "3": { to: [{ key_code: "f3" }] },
        "4": { to: [{ key_code: "f4" }] },
        "5": { to: [{ key_code: "f5" }] },
        "6": { to: [{ key_code: "f6" }] },

        
        "8": { to: [{ key_code: "f8" }] },
        "9": { to: [{ key_code: "f9" }] },
        "0": { to: [{ key_code: "f10" }] },
        hyphen: { to: [{ key_code: "f11" }] },
        equal_sign: { to: [{ key_code: "f12" }] },
        delete_or_backspace: { to: [{ key_code: "f12" }] },
        tab: { to: [{ key_code: "escape" }] },
        q: { to: [{ key_code: "1" }] },
        w: { to: [{ key_code: "2" }] },
        e: { to: [{ key_code: "3" }] },
        r: { to: [{ key_code: "4" }] },
        t: { to: [{ key_code: "5" }] },
        u: { to: [{ key_code: "6" }] },
        i: { to: [{ key_code: "7" }] },
        o: { to: [{ key_code: "8" }] },
        p: { to: [{ key_code: "9" }] },
        open_bracket: { to: [{ key_code: "0" }] },
        close_bracket: { to: [{ key_code: "return_or_enter" }] },
        a: {
          to: [
            { key_code: "w", modifiers: ["left_command", "left_shift"] },
            { hold_down_milliseconds: 120, key_code: "vk_none" },
            {
              shell_command:
                "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Default'",
            },
          ],
        },
        s: {
          to: [
            { key_code: "w", modifiers: ["left_command", "left_shift"] },
            { hold_down_milliseconds: 120, key_code: "vk_none" },
            {
              shell_command:
                "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 1'",
            },
          ],
        },
        d: {
          to: [
            { key_code: "w", modifiers: ["left_command", "left_shift"] },
            { hold_down_milliseconds: 120, key_code: "vk_none" },
            {
              shell_command:
                "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 2'",
            },
          ],
        },
        f: {
          to: [
            { key_code: "w", modifiers: ["left_command", "left_shift"] },
            { hold_down_milliseconds: 120, key_code: "vk_none" },
            {
              shell_command:
                "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 5'",
            },
          ],
        },
        g: {
          to: [
            { key_code: "w", modifiers: ["left_command", "left_shift"] },
            { hold_down_milliseconds: 120, key_code: "vk_none" },
            {
              shell_command:
                "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 7'",
            },
          ],
        },
        caps_lock: {
          to: [
            { key_code: "w", modifiers: ["left_command", "left_shift"] },
            { hold_down_milliseconds: 120, key_code: "vk_none" },
            {
              shell_command:
                "/Applications/Vivaldi.app/Contents/MacOS/Vivaldi --profile-directory='Profile 4'",
            },
          ],
        },
        j: { to: [{ key_code: "delete_or_backspace" }] },
        k: { to: [{ key_code: "studio_unlock" }] },
        l: { to: [{ key_code: "delete_or_backspace" }] },
        semicolon: { to: [{ key_code: "left_shift" }] },
        quote: { to: [{ key_code: "left_shift" }] },
        return_or_enter: { to: [{ key_code: "left_shift" }] },
      },
      { alsoWhen: multitouchUpperLeftConditions }
    ),

    ...createSymbolLayer({
//row 1
"grave_accent_and_tilde": {to: [{ key_code: "backslash"}]},
"2":  { to: [{ key_code: "1" , modifiers: ["left_shift"]}] },
"3":    { to: [{ key_code: "2", modifiers: ["left_shift"] }] },
"4":    { to: [{ key_code: "3" , modifiers: ["left_shift"] }] },
"5":    { to: [{ key_code: "4", modifiers: ["left_shift"] }] },
"6":    { to: [{ key_code: "5", modifiers: ["left_shift"] }] },

"7":    { to: [{ key_code: "6" , modifiers: ["left_shift"]}] },
"8":    { to: [{ key_code: "7" , modifiers: ["left_shift"]}] },
"9":    { to: [{ key_code: "8" , modifiers: ["left_shift"]}] },
"0":    { to: [{ key_code: "9" , modifiers: ["left_shift"]}] },
"hyphen":    { to: [{ key_code: "0" , modifiers: ["left_shift"]}] },
"equal_sign":    { to: [{ key_code: "f23" }],},

//row 2
tab: { to: [{ key_code: "escape" }] },
q: { to: [{ key_code: "1" }] },
w: { to: [{ key_code: "2" }] },
e: { to: [{ key_code: "3" }] },
r: { to: [{ key_code: "4" }] },
t: { to: [{ key_code: "5" }] },
"u":    { to: [{ key_code: "backslash", modifiers: ["left_shift"] }] },
"i":    { to: [{ key_code: "hyphen" }] },
"o":    { to: [{ key_code: "equal_sign" }] },
"p":    { to: [{ key_code: "open_bracket" }] },
"open_bracket":    { to: [{ key_code: "close_bracket" }] },
"close_bracket":    { to: [{ key_code: "return_or_enter" }] },

//row 3
caps_lock: { to: [{ key_code: "grave_accent_and_tilde" }] },
left_shift: { to: [{ key_code: "grave_accent_and_tilde" }] },
a: { to: [{ key_code: "6" }] },
s: { to: [{ key_code: "7" }] },
d: { to: [{ key_code: "8" }] },
f: { to: [{ key_code: "9" }] },
g: { to: [{ key_code: "0" }] },

"j":    { to: [{ key_code: "backslash" }] },
"k":    { to: [{ key_code: "hyphen", modifiers: ["left_shift"] }] },
"l":    { to: [{ key_code: "equal_sign", modifiers: ["left_shift"] }] },
"semicolon":    { to: [{ key_code: "open_bracket", modifiers: ["left_shift"]}] },
"quote": { to: [{ key_code: "close_bracket" , modifiers: ["left_shift"]}] },
"return_or_enter": { to: [{ key_code: "grave_accent_and_tilde", modifiers: ["left_shift"] }] },
        // -----------------------------------------------------------------------------------------
        // |  TAB |  !  |  @  |  #  |  $  |  %  |  ^  |  &  |  *  |  (  |  )  | BSPC |
        // | CTRL |     |     |     |     |     |  -  |  =  |  [  |  ]  |  \  |  `   |
        // | SHFT |     |     |     |     |     |  _  |  +  |  {  |  }  | "|" |  ~   |

        // Top (number row)
    }),
];

const profiles = [
    {
        devices,
        name: "Mod",
        "fn_function_keys": [
                {
                    "from": { "key_code": "f3" },
                    "to": [{ "key_code": "f3" }]
                },
                {
                    "from": { "key_code": "f4" },
                    "to": [{ "key_code": "f4" }]
                },
                {
                    "from": { "key_code": "f6" },
                    "to": [{ "key_code": "f6" }]
                }
            ],    
        virtual_hid_keyboard: { "keyboard_type_v2": "ansi" },
        complex_modifications: {
            "parameters": { "basic.to_if_alone_timeout_milliseconds": 30 },
            rules: [...rules,   ...modtap, ...vivaldi , ...layers,...dusk],
        },
    },
    {
        // devices,  if enabled, the simplmodsfrom dusk will transfer
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
            rules: [ ...rules, ...vivaldi,
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



//colemak
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
                "show_profile_name_in_menu_bar": true,
                show_in_menu_bar: false,
            },
            "machine_specific": { "krbn-3e128889-a957-446c-bc73-ec1c62ceed3d": { "enable_multitouch_extension": true } },
            profiles,
        },
        null,
        2
    )
);














