import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle, shell } from "./utils";

const rules: KarabinerRules[] = [
  
    {
    description: "Multitouch Vi Mode (rightside)",
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




  {
    description: "Multitouch Vi Mode (Left Side)",
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
          "to": [{ "key_code": "left_arrow",
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
        "to": [{ "key_code": "right_arrow",
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
        "to": [{ "key_code": "left_arrow",
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
      "to": [{ "key_code": "right_arrow",
               "modifiers": ["left_option"]
       }],
      "type": "basic"
  },      

    {//fullscreen nya                                             // fullscreen
      "conditions": [
        {
            "name": "multitouch_extension_finger_count_total",
            "type": "variable_if",
            "value": 1
        }
    ],
    "from": {
        "key_code": "spacebar",
        "modifiers": { "optional": ["any"] }
    },
    "to": [{ "key_code": "f",
             "modifiers": ["left_control", "fn"]
     }],
    "type": "basic"
},      
      {// open arc
        "conditions": [
            {
                "name": "multitouch_extension_finger_count_total",
                "type": "variable_if",
                "value": 1
            }
        ],
        "from": {
            "key_code": "z",
            "modifiers": { "optional": ["any"] }
        },
        "to": [{ "shell_command": "open -a 'Arc.app'" }],
        "type": "basic"
    },

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
            {// open obsidian track
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
            "to": [{ "shell_command": "open -a obsidian" }],
            "type": "basic"
            },

  


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
            "key_code": "q",
            "modifiers": { "optional": ["any"] }
        },
        "to": [{ "key_code": "f6" , "modifiers": ["fn"]}],
        
        "type": "basic"
        },
        
        {//Full Screen doesnt work think its apples bug
          "conditions": [
            {
                "name": "multitouch_extension_finger_count_total",
                "type": "variable_if",
                "value": 1
            }
        ],
        "from": {
            "key_code": "g",
            "modifiers": { "optional": ["any"] }
        },
        "to": [{ "key_code": "f18" , "modifiers": ["fn"]}],
        
        "type": "basic"
        },
        
      {//split screen left
          conditions: [
              {
                  "name": "multitouch_extension_finger_count_total",
                  "type": "variable_if",
                  "value": 1
              }
          ],
          "from": {
              key_code: "b",
              "modifiers": { "optional": ["any"] }
          },
          to: [{ key_code: "f13" }],
          "type": "basic"
      },

      {//split screen right
        conditions: [
            {
                "name": "multitouch_extension_finger_count_total",
                "type": "variable_if",
                "value": 1
            }
        ],
        "from": {
            key_code: "n",
            "modifiers": { "optional": ["any"] }
        },
        to: [{ key_code: "f14" }],
        "type": "basic"
    },

       // double fingers
        {
            "conditions": [
                {
                    "name": "multitouch_extension_finger_count_total",
                    "type": "variable_unless",
                    "value": 0
                }
            ],
            "from": {
                "key_code": "e",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "page_up" }],
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
                "key_code": "s",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "page_down" }],
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
                "key_code": "d",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "home" }],
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
                "key_code": "f",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "end" }],
            "type": "basic"
        }
    ]
},



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
            "parameters": {// @ts-ignore
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






  {// Caps -> Backspace     Esc <-> `     & disabling arrow keys                        // basic switches
    description: "Swap Escape with Grave Accent and Caps Lock with Backspace",
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

  {  // Define the Hyper key itself
    description: "Hyper Key (⌃⌥⇧⌘)",
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
  ...createHyperSubLayers({//////////////////  /////////////////////////  sublayers

    b: {
      t: open("https://twitter.com"),
      p: open("https://mxstbr.com/cal"),
      y: open("https://news.ycombinator.com"),
      f: open("https://facebook.com"),
      r: open("https://reddit.com"),
      h: open("https://hashnode.com/draft"),
      w: open("arc"),
    },
    // 1 = "Open" applications
    spacebar: {// numbers dont work if the layer is a number
      0: app("1Password"),
      2: app("arc"),
      3: app("arc"),
      4: app("arc"),
      5: app("arc"),
      6: app("arc"),
      7: app("arc"),
      8: app("arc"),
      9: app("arc"),

      a: app("Al Dente"),
      b: app(""),
      c: app("activity monitor"),
      d: app("arc"),
      e: app(""),
      f: app("finder"),
      g: app("Google Chrome"),
      h: open(""),
      i: app("_"),
      j: app("arc"),
      k: app("_"),
      l: open ("~/.trash"),
      m: app("messages"),
      n: app(""),
      o: app("Obsidian"),
      p: app(""),
      q: app("_"),
      r: app("Photos"),
      s: {                    "to": [ { "shell_command": "open -b com.apple.systempreferences" } ]   },    
      t: app("terminal"),
      u: app("_"),
      v: app("Visual Studio Code"),
      w: open(""),
      x: app(""),
      y: app(""),
      z: app(""),


    },

    // s = "System"

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      // Magicmove via homerow.app
      m: {
        to: [{ key_code: "f", modifiers: ["right_control"] }],
        // TODO: Trigger Vim Easymotion when VSCode is focused
      },
      // Scroll mode via homerow.app
      s: {
        to: [{ key_code: "j", modifiers: ["right_control"] }],
      },
      d: {
        to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      },
      u: {
        to: [{ key_code: "page_down" }],
      },
      i: {
        to: [{ key_code: "page_up" }],
      },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    c: {
      p: {
        to: [{ key_code: "play_or_pause" }],
      },
      n: {
        to: [{ key_code: "fastforward" }],
      },
      b: {
        to: [{ key_code: "rewind" }],
      },
    },

    // r = "Raycast"
    r: {
      c: open("raycast://extensions/thomas/color-picker/pick-color"),
      n: open("raycast://script-commands/dismiss-notifications"),
      l: open(
        "raycast://extensions/stellate/mxstbr-commands/create-mxs-is-shortlink"
      ),
      e: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      p: open("raycast://extensions/raycast/raycast/confetti"),
      a: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
      s: open("raycast://extensions/peduarte/silent-mention/index"),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
      1: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      ),
      2: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      ),
    },
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
