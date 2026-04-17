import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle, shell } from "./utils";

const rules: KarabinerRules[] = [


  {
    description: "Double Left Shift to Capslock",                             /// nya but works
    manipulators: [
      {
        "conditions": [
          {
            "name": "left_shift_pressed",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "left_shift",
          "modifiers": { "optional": ["any"] }
        },
        // @ts-ignore
        "parameters": { "basic.to_if_alone_timeout_milliseconds": 500 },
        "to": [{ "key_code": "left_shift" }],
        "to_if_alone": [
          // @ts-ignore
          { "key_code": "F14" },
          {
            "set_variable": {
              "name": "left_shift_pressed",
              "value": 0
            }
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "left_shift",
          "modifiers": { "optional": ["any"] }
        },
        "parameters": {// @ts-ignore        ///// to ignore the correction
          "basic.to_delayed_action_delay_milliseconds": 500,
          "basic.to_if_alone_timeout_milliseconds": 500
        },
        "to": [{ "key_code": "left_shift" }],
        "to_delayed_action": {
          "to_if_canceled": [
            {
              "set_variable": {
                "name": "left_shift_pressed",
                "value": 0
              }
            }
          ],
          "to_if_invoked": [
            {
              "set_variable": {
                "name": "left_shift_pressed",
                "value": 0
              }
            }
          ]
        },
        "to_if_alone": [
          {
            "set_variable": {
              "name": "left_shift_pressed",
              "value": 1
            }
          },
          { "key_code": "left_shift" }
        ],
        "type": "basic"
      }
    ]
  },

  {
    description: "Multitouch Vi Mode 1 finger )",
    manipulators: [ //tyuiopghklbnm b n currently used for split screen but i get rid


      {// open finder track
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_total",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "x",
          "modifiers": { "optional": ["any"] }
        },
        "to": [{ "shell_command": "open -a Finder" }],
        "type": "basic"
      },

    ]
  },

  {
    description: "Multitouch Vi Arrows MAIN)",
    manipulators: [
      {//up arrow                                                               //vim controls
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_total",
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

      {//down arrow
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
      {//left arrow
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_total",
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
      {//right
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




      {//Fill
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_total",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "s",
          "modifiers": { "optional": ["any"] }
        },
        "to": [{ "key_code": "f6", "modifiers": ["fn"] }],

        "type": "basic"
      },

    ]
  },
  {
    description: "Multitouch 2 fingers",
    manipulators: [
      //{//Full Screen doesnt work think its apples bug
      //   "conditions": [
      //     {
      //       "name": "multitouch_extension_finger_count_total",
      //       "type": "variable_if",
      //       "value": 1
      //     }
      //   ],
      //   "from": {
      //     "key_code": "g",
      //     "modifiers": { "optional": ["any"] }
      //   },
      //   "to": [{ "key_code": "f18", "modifiers": ["fn"] }],

      //   "type": "basic"
      // },

      // {//split screen left
      //   conditions: [
      //     {
      //       "name": "multitouch_extension_finger_count_total",
      //       "type": "variable_if",
      //       "value": 1
      //     }
      //   ],
      //   "from": {
      //     key_code: "b",
      //     "modifiers": { "optional": ["any"] }
      //   },
      //   to: [{ key_code: "f13" }],
      //   "type": "basic"
      // },

      // {//split screen right
      //   conditions: [
      //     {
      //       "name": "multitouch_extension_finger_count_total",
      //       "type": "variable_if",
      //       "value": 1
      //     }
      //   ],
      //   "from": {
      //     key_code: "n",
      //     "modifiers": { "optional": ["any"] }
      //   },
      //   to: [{ key_code: "f14" }],
      //   "type": "basic"
      // },

            {// open arc
                "conditions": [
                    {
                        "name": "multitouch_extension_finger_count_total",
                        "type": "variable_unless",
                        "value": 0
                    }
                ],
                "from": {
                    key_code: "a",
                    "modifiers": { "optional": ["any"] }
                },
                to: [{ "shell_command": "open -a 'Arc'" }],
                "type": "basic"
            },

            {
              "conditions": [
                  {
                      "name": "multitouch_extension_finger_count_total",
                      "type": "variable_unless",
                      "value": 0
                  }
              ],
              "from": {
                  key_code: "f",
                  "modifiers": { "optional": ["any"] }
              },
              "to": [{ "shell_command": "open -a Finder" }],
              "type": "basic"
          },
,

    {
        "conditions": [
            {
                "name": "multitouch_extension_finger_count_total",
                "type": "variable_unless",
                "value": 0
            }
        ],
        "from": {
            key_code: "d",
            "modifiers": { "optional": ["any"] }
        },
        to: [{ "shell_command": "open -a 'Discord'" }],
        "type": "basic"
    },
    {
        "conditions": [
            {
                "name": "multitouch_extension_finger_count_total",
                "type": "variable_unless",
                "value": 0
            }
        ],
        "from": {
            key_code: "f",
            "modifiers": { "optional": ["any"] }
        },
        to: [{ key_code: "end" }],
        "type": "basic"
    },

    {
      "conditions": [
          {
              "name": "multitouch_extension_finger_count_total",
              "type": "variable_unless",
              "value": 0
          }
      ],
      "from": {
          key_code: "s",
          "modifiers": { "optional": ["any"] }
      },
      to: [{ "shell_command": "open -a 'obsidian'" }],
      "type": "basic"
  },


  {
    "conditions": [
        {
            "name": "multitouch_extension_finger_count_total",
            "type": "variable_unless",
            "value": 1
        }
    ],
    "from": {
        key_code: "v",
        "modifiers": { "optional": ["any"] }
    },
    to: [{ "shell_command": "open -a 'Visual Studio Code'" }],
    "type": "basic"
},

              {// move monitor to the 2nd top monitor
                "conditions": [
                  {
                      "name": "multitouch_extension_finger_count_total",
                      "type": "variable_unless",
                      "value": 0
                  }
              ],
              "from": {
                  key_code: "2",
                  "modifiers": { "optional": ["any"] }
              },
              to: [
                {
                    "software_function": {
                      // @ts-ignore
                        "set_mouse_cursor_position": {         ///// to ignore the correction
                            "x": "50%",
                            "y": "50%",
                            "screen": 1
                        }
                    }
                }





              ],
              "type": "basic"
          },


              {// move cursor to the bottom monitor
                "conditions": [
                  {
                      "name": "multitouch_extension_finger_count_total",
                      "type": "variable_unless",
                      "value": 0
                  }
              ],
              "from": {
                  key_code: "1",
                  "modifiers": { "optional": ["any"] }
              },
              to: [
                {
                    "software_function": {
                      // @ts-ignore
                        "set_mouse_cursor_position": {         ///// to ignore the correction
                            "x": "50%",
                            "y": "50%",
                            "screen": 0
                        }
                    }
                }





              ],
              "type": "basic"
          },



          
    ]
  },
    
  {
    description: "Multitouch Vi Mode (Left Side) Bonus EOL EOW",
    manipulators: [

      {//home
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


      {//end 
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

      {//beginning of word
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_total",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "e",
          "modifiers": { "optional": ["any"] }
        },
        "to": [{
          "key_code": "left_arrow",
          "modifiers": ["left_command"]
        }],
        "type": "basic"
      },


      {//end of line
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
        "to": [{
          "key_code": "right_arrow",
          "modifiers": ["left_command"]
        }],
        "type": "basic"
      },

      {//beginning of word                                                            //this is left option 
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_total",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "c",
          "modifiers": { "optional": ["left_option"] }
        },
        "to": [{
          "key_code": "left_arrow",
          "modifiers": ["left_option"]
        }],
        "type": "basic"
      },


      {//end of word
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_total",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "v",
          "modifiers": { "optional": ["any"] }
        },
        "to": [{
          "key_code": "right_arrow",
          "modifiers": ["left_option"]
        }],
        "type": "basic"
      },

    ]
  },

  {
    description: "Multitouch Vi Mode (rightside)",           //vim up & down right side with j & m
    manipulators: [
      {//up arrow vim
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_total",
            "type": "variable_if",
            "value": 1
          }
        ],
        "from": {
          "key_code": "j",
          "modifiers": { "optional": ["any"] }
        },
        "to": [{ "key_code": "up_arrow" }],
        "type": "basic"
      },
      {//down vim
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
        "to": [{ "key_code": "down_arrow" }],
        "type": "basic"
      },
    ]
  },




  {// Caps -> Backspace     Esc <-> `     & disabling arrow keys                        // basic switches
    description: "Escape to Grave Accent and Caps Lock with Backspace",
    manipulators: [
      {
        "type": "basic",
        "from": {
          "key_code": "escape"
        },
        "to": [
          {
            "key_code": "grave_accent_and_tilde"
          }
        ]
      },
      {
        "type": "basic",
        "from": {
          "key_code": "caps_lock"
        },
        "to": [
          {
            "key_code": "delete_or_backspace"
          }
        ]
      },
      // {
      //   "type": "basic",
      //   "from": {
      //       "key_code": "left_arrow"
      //   },
      //   "to": [
      //       {
      //           "key_code": "vk_none"
      //       }
      //   ]
      // },
      // {
      //   "type": "basic",
      //   "from": {
      //       "key_code": "right_arrow"
      //   },
      //   "to": [
      //       {
      //           "key_code": "vk_none"
      //       }
      //   ]
      // },
      // {
      //   "type": "basic",
      //   "from": {
      //       "key_code": "down_arrow"
      //   },
      //   "to": [
      //       {
      //           "key_code": "vk_none"
      //       }
      //   ]
      // },
      // {
      //   "type": "basic",
      //   "from": {
      //       "key_code": "up_arrow"
      //   },
      //   "to": [
      //       {
      //           "key_code": "vk_none"
      //       }
      //   ]
      // },


      {
        "type": "basic",
        "from": {
          "key_code": "delete_or_backspace"
        },
        "to": [
          {
            "key_code": "caps_lock"
          }
        ]
      },
      


    ]
  },

  {  // Define the Hyper key itself & change to esc
    description: "Hyper Key (⌃⌥⇧⌘) & tilde to esc",
    manipulators: [
      {
        description: "` -> Hyper Key",
        from: {
          key_code: "grave_accent_and_tilde",
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
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],





  },


  ...createHyperSubLayers({
  }),



];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      "machine_specific": { "krbn-3e128889-a957-446c-bc73-ec1c62ceed3d": { "enable_multitouch_extension": true } },
      profiles: [
        {//added devices for my specific mouse
          "devices": [
            {
              "identifiers": {
                "is_pointing_device": true,
                "product_id": 45108,
                "vendor_id": 1133
              },
              "ignore": false,
              "mouse_flip_vertical_wheel": true
            }
          ],// added keyboard so it doesn't constantly notify me
          name: "Default",
          virtual_hid_keyboard: { "keyboard_type_v2": "ansi" },
          fn_function_keys: [
            {
              "from": { "key_code": "f3" },
              "to": [{ "key_code": "f3" }]
            },
            {
              "from": { "key_code": "f4" },
              "to": [{ "key_code": "f4" }]
            }
          ],
          complex_modifications: {
            rules,
          },

        },
      ],
    },
    null,
    2
  )
);
