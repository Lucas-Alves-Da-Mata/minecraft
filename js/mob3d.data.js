/* Modelos Bedrock (.geo.json) dos mobs - embutidos para funcionar offline via file://
   Fonte: Mojang/bedrock-samples (resource_pack/models/entity) */
window.MOB3D_MODELS = window.MOB3D_MODELS || {};
window.MOB3D_MODELS['axolotl'] = {
  "format_version": "1.21.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.axolotl",
        "texture_width": 64,
        "texture_height": 64,
        "visible_bounds_width": 1.5,
        "visible_bounds_height": 0.25,
        "visible_bounds_offset": [0, 0.75, 0]
      },
      "bones": [
        {
          "name": "root",
          "pivot": [0, -4, 0]
        },
        {
          "name": "body",
          "parent": "root",
          "pivot": [0, 3, 4],
          "cubes": [
            {"origin": [-4, 0, -5], "size": [8, 4, 10], "uv": [0, 11]},
            {"origin": [0, 0, -5], "size": [0, 5, 9], "uv": [2, 17]}
          ],
          "locators": {
            "lead": [0, 0, -5],
            "lead_hold": [0, 23, 0]
          }
        },
        {
          "name": "right_arm",
          "parent": "body",
          "pivot": [-4, 1, -4],
          "rotation": [0, -90, 0],
          "cubes": [
            {"origin": [-6, -4, -4], "size": [3, 5, 0], "uv": [2, 13]}
          ]
        },
        {
          "name": "right_leg",
          "parent": "body",
          "pivot": [-4, 1, 4],
          "rotation": [0, 90, 0],
          "cubes": [
            {"origin": [-5, -4, 4], "size": [3, 5, 0], "uv": [2, 13]}
          ]
        },
        {
          "name": "left_arm",
          "parent": "body",
          "pivot": [4, 1, -4],
          "rotation": [0, 90, 0],
          "cubes": [
            {"origin": [3, -4, -4], "size": [3, 5, 0], "uv": [2, 13]}
          ]
        },
        {
          "name": "left_leg",
          "parent": "body",
          "pivot": [4, 1, 4],
          "rotation": [0, -90, 0],
          "cubes": [
            {"origin": [2, -4, 4], "size": [3, 5, 0], "uv": [2, 13]}
          ]
        },
        {
          "name": "tail",
          "parent": "body",
          "pivot": [0, 2, 4],
          "cubes": [
            {"origin": [0, 0, 4], "size": [0, 5, 12], "uv": [2, 19]}
          ]
        },
        {
          "name": "head",
          "parent": "body",
          "pivot": [0, 2, -5],
          "cubes": [
            {"origin": [-4, 0, -10], "size": [8, 5, 5], "uv": [0, 1]}
          ]
        },
        {
          "name": "left_gills",
          "parent": "head",
          "pivot": [4, 2, -6],
          "cubes": [
            {"origin": [4, 0, -6], "size": [3, 7, 0], "uv": [11, 40]}
          ]
        },
        {
          "name": "right_gills",
          "parent": "head",
          "pivot": [-4, 2, -6],
          "cubes": [
            {"origin": [-7, 0, -6], "size": [3, 7, 0], "uv": [0, 40]}
          ]
        },
        {
          "name": "top_gills",
          "parent": "head",
          "pivot": [0, 5, -6],
          "cubes": [
            {"origin": [-4, 5, -6], "size": [8, 3, 0], "uv": [3, 37]}
          ]
        }
      ]
    }
  ]
};
window.MOB3D_MODELS['chicken'] = {
  "format_version" : "1.21.0",
  "minecraft:geometry" : [
    {
      "description" : {
        "identifier" : "geometry.chicken.v1.12",
        "texture_width" : 64.0,
        "texture_height" : 32.0,
        "visible_bounds_height" : 1.5,
        "visible_bounds_offset" : [ 0.0, 0.5, 0.0 ],
        "visible_bounds_width" : 1.5
      },
      "bones" : [
        {
          "name" : "body",
          "pivot" : [ 0.0, 8.0, 0.0 ],
          "cubes" : [
            {
              "origin" : [ -3.0, 4.0, -3.0 ],
              "rotation" : [ 90.0, 0.0, 0.0 ],
              "size" : [ 6.0, 8.0, 6.0 ],
              "uv" : [ 0.0, 9.0 ]
            }
          ],
          "locators" : {
            "lead_hold": [0, 28.0, 0.0 ]
          }
        },
        {
          "name" : "head",
          "pivot" : [ 0.0, 9.0, -4.0 ],
          "cubes" : [
            {
              "origin" : [ -2.0, 9.0, -6.0 ],
              "size" : [ 4.0, 6.0, 3.0 ],
              "uv" : [ 0.0, 0.0 ]
            }
          ],
          "locators" : {
            "lead" : [ 0.0, 9.0, -4.0 ]
          }
        },
        {
          "name" : "comb",
          "parent" : "head",
          "pivot" : [ 0.0, 9.0, -4.0 ],
          "cubes" : [
            {
              "origin" : [ -1.0, 9.0, -7.0 ],
              "size" : [ 2.0, 2.0, 2.0 ],
              "uv" : [ 14.0, 4.0 ]
            }
          ]
        },
        {
          "name" : "beak",
          "parent" : "head",
          "pivot" : [ 0.0, 9.0, -4.0 ],
          "cubes" : [
            {
              "origin" : [ -2.0, 11.0, -8.0 ],
              "size" : [ 4.0, 2.0, 2.0 ],
              "uv" : [ 14.0, 0.0 ]
            }
          ]
        },
        {
          "name" : "leg0",
          "pivot" : [ -2.0, 5.0, 1.0 ],
          "cubes" : [
            {
              "origin" : [ -3.0, 0.0, -2.0 ],
              "size" : [ 3.0, 5.0, 3.0 ],
              "uv" : [ 26.0, 0.0 ]
            }
          ]
        },
        {
          "name" : "leg1",
          "pivot" : [ 1.0, 5.0, 1.0 ],
          "cubes" : [
            {
              "origin" : [ 0.0, 0.0, -2.0 ],
              "size" : [ 3.0, 5.0, 3.0 ],
              "uv" : [ 26.0, 0.0 ]
            }
          ]
        },
        {
          "name" : "wing0",
          "pivot" : [ -3.0, 11.0, 0.0 ],
          "cubes" : [
            {
              "origin" : [ -4.0, 7.0, -3.0 ],
              "size" : [ 1.0, 4.0, 6.0 ],
              "uv" : [ 24.0, 13.0 ]
            }
          ]
        },
        {
          "name" : "wing1",
          "pivot" : [ 3.0, 11.0, 0.0 ],
          "cubes" : [
            {
              "origin" : [ 3.0, 7.0, -3.0 ],
              "size" : [ 1.0, 4.0, 6.0 ],
              "uv" : [ 24.0, 13.0 ]
            }
          ]
        }
      ]
    },
    {
      "description" : {
        "identifier" : "geometry.chicken",
        "texture_width" : 64.0,
        "texture_height" : 32.0,
        "visible_bounds_height" : 1.5,
        "visible_bounds_offset" : [ 0.0, 0.5, 0.0 ],
        "visible_bounds_width" : 1.5
      },
      "bones" : [
        {
          "name" : "body",
          "pivot" : [ 0.0, 8.0, 0.0 ],
          "cubes" : [
            {
              "origin" : [ -3.0, 4.0, -3.0 ],
              "size" : [ 6.0, 8.0, 6.0 ],
              "uv" : [ 0.0, 9.0 ]
            }
          ],
          "locators" : {
            "lead_hold" : [ 0.0, 28.0, 0.0 ]
          }
        },
        {
          "name" : "head",
          "pivot" : [ 0.0, 9.0, -4.0 ],
          "cubes" : [
            {
              "origin" : [ -2.0, 9.0, -6.0 ],
              "size" : [ 4.0, 6.0, 3.0 ],
              "uv" : [ 0.0, 0.0 ]
            }
          ],
          "locators" : {
            "lead" : [ 0.0, 9.0, -4.0 ]
          }
        },
        {
          "name" : "comb",
          "parent" : "head",
          "pivot" : [ 0.0, 9.0, -4.0 ],
          "cubes" : [
            {
              "origin" : [ -1.0, 9.0, -7.0 ],
              "size" : [ 2.0, 2.0, 2.0 ],
              "uv" : [ 14.0, 4.0 ]
            }
          ]
        },
        {
          "name" : "beak",
          "parent" : "head",
          "pivot" : [ 0.0, 9.0, -4.0 ],
          "cubes" : [
            {
              "origin" : [ -2.0, 11.0, -8.0 ],
              "size" : [ 4.0, 2.0, 2.0 ],
              "uv" : [ 14.0, 0.0 ]
            }
          ]
        },
        {
          "name" : "leg0",
          "pivot" : [ -2.0, 5.0, 1.0 ],
          "cubes" : [
            {
              "origin" : [ -3.0, 0.0, -2.0 ],
              "size" : [ 3.0, 5.0, 3.0 ],
              "uv" : [ 26.0, 0.0 ]
            }
          ]
        },
        {
          "name" : "leg1",
          "pivot" : [ 1.0, 5.0, 1.0 ],
          "cubes" : [
            {
              "origin" : [ 0.0, 0.0, -2.0 ],
              "size" : [ 3.0, 5.0, 3.0 ],
              "uv" : [ 26.0, 0.0 ]
            }
          ]
        },
        {
          "name" : "wing0",
          "pivot" : [ -3.0, 11.0, 0.0 ],
          "cubes" : [
            {
              "origin" : [ -4.0, 7.0, -3.0 ],
              "size" : [ 1.0, 4.0, 6.0 ],
              "uv" : [ 24.0, 13.0 ]
            }
          ]
        },
        {
          "name" : "wing1",
          "pivot" : [ 3.0, 11.0, 0.0 ],
          "cubes" : [
            {
              "origin" : [ 3.0, 7.0, -3.0 ],
              "size" : [ 1.0, 4.0, 6.0 ],
              "uv" : [ 24.0, 13.0 ]
            }
          ]
        }
      ]
    }
  ]
}
;
window.MOB3D_MODELS['cow'] = {
  "format_version": "1.21.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.cow.v2",
        "texture_width": 64,
        "texture_height": 64,
        "visible_bounds_width": 5,
        "visible_bounds_height": 3.5,
        "visible_bounds_offset": [ 0, 1.25, 0 ]
      },
      "bones": [
        {
          "name": "root",
          "pivot": [ 0, 0, -1 ]
        },
        {
          "name": "head",
          "parent": "root",
          "pivot": [ 0, 20, -9 ],
          "cubes": [
            {
              "origin": [ -4, 16, -15 ],
              "size": [ 8, 8, 6 ],
              "uv": [ 0, 0 ]
            },
            {
              "origin": [ -3, 16, -16 ],
              "size": [ 6, 3, 1 ],
              "uv": [ 1, 33 ]
            },
            {
              "origin": [ -5, 22, -14 ],
              "size": [ 1, 3, 1 ],
              "uv": [ 22, 0 ]
            },
            {
              "origin": [ 4, 22, -14 ],
              "size": [ 1, 3, 1 ],
              "uv": [ 22, 0 ]
            }
          ],
          "locators": {
            "lead": [ 0, 20, -9 ]
          }
        },
        {
          "name": "body",
          "parent": "root",
          "pivot": [ 0, 19, 1 ],
          "cubes": [
            {
              "origin": [ -6, 29, 14 ],
              "size": [ 12, 18, 10 ],
              "pivot": [ 0, 18, 20 ],
              "rotation": [ 90, 0, 0 ],
              "uv": [ 18, 4 ]
            },
            {
              "origin": [ -2, 29, 13 ],
              "size": [ 4, 6, 1 ],
              "pivot": [ 0, 18, 20 ],
              "rotation": [ 90, 0, 0 ],
              "uv": [ 52, 0 ]
            }
          ],
          "locators": {
            "lead_hold": [ 0, 34, 0 ]
          }
        },
        {
          "name": "leg0",
          "parent": "root",
          "pivot": [ -4, 12, 6 ],
          "cubes": [
            {
              "origin": [ -6, 0, 4 ],
              "size": [ 4, 12, 4 ],
              "uv": [ 0, 16 ]
            }
          ]
        },
        {
          "name": "leg1",
          "parent": "root",
          "pivot": [ 4, 12, 6 ],
          "mirror": true,
          "cubes": [
            {
              "origin": [ 2, 0, 4 ],
              "size": [ 4, 12, 4 ],
              "uv": [ 0, 16 ]
            }
          ]
        },
        {
          "name": "leg2",
          "parent": "root",
          "pivot": [ -4, 12, -7 ],
          "cubes": [
            {
              "origin": [ -6, 0, -8 ],
              "size": [ 4, 12, 4 ],
              "uv": [ 0, 16 ]
            }
          ]
        },
        {
          "name": "leg3",
          "parent": "root",
          "pivot": [ 4, 12, -7 ],
          "mirror": true,
          "cubes": [
            {
              "origin": [ 2, 0, -8 ],
              "size": [ 4, 12, 4 ],
              "uv": [ 0, 16 ]
            }
          ]
        }
      ]
    }
  ]
}
;
window.MOB3D_MODELS['creeper'] = {
  "format_version": "1.8.0",
  "geometry.creeper.v1.8": {
    "visible_bounds_width": 1,
    "visible_bounds_height": 2,
    "visible_bounds_offset": [ 0, 0.75, 0 ],
    "texturewidth": 64,
    "textureheight": 32,
    "bones": [
      {
        "name": "body",
        "cubes": [
          {
            "origin": [ -4.0, 6.0, -2.0 ],
            "size": [ 8, 12, 4 ],
            "uv": [ 16, 16 ]
          }
        ]        
      },
      {
        "name": "head",
        "parent": "body",
        "pivot": [ 0.0, 18.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 18.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 0, 0 ]
          }
        ]
      },
      {
        "name": "leg0",
        "parent": "body",
        "pivot": [ -2.0, 6.0, 4.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 0.0, 2.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      },
      {
        "name": "leg1",
        "parent": "body",
        "pivot": [ 2.0, 6.0, 4.0 ],
        "cubes": [
          {
            "origin": [ 0.0, 0.0, 2.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      },
      {
        "name": "leg2",
        "parent": "body",
        "pivot": [ -2.0, 6.0, -4.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 0.0, -6.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      },
      {
        "name": "leg3",
        "parent": "body",
        "pivot": [ 2.0, 6.0, -4.0 ],
        "cubes": [
          {
            "origin": [ 0.0, 0.0, -6.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      }
    ]
  },
  "geometry.creeper.charged.v1.8": {
    "visible_bounds_width": 1,
    "visible_bounds_height": 2,
    "visible_bounds_offset": [ 0, 0.75, 0 ],
    "texturewidth": 64,
    "textureheight": 32,
    "bones": [
      {
        "name": "body",
        "cubes": [
          {
            "origin": [ -4.0, 6.0, -2.0 ],
            "size": [ 8, 12, 4 ],
            "uv": [ 16, 16 ]
          }
        ],        
        "inflate": 2.0
      },
      {
        "name": "head",
        "parent": "body",
        "pivot": [ 0.0, 18.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 18.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 0, 0 ]
          }
        ],
        "inflate": 2.0
      },
      {
        "name": "leg0",
        "parent": "body",
        "pivot": [ -2.0, 6.0, 4.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 0.0, 2.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 16 ]
          }
        ],
        "inflate": 2.0
      },
      {
        "name": "leg1",
        "parent": "body",
        "pivot": [ 2.0, 6.0, 4.0 ],
        "cubes": [
          {
            "origin": [ 0.0, 0.0, 2.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 16 ]
          }
        ],
        "inflate": 2.0
      },
      {
        "name": "leg2",
        "parent": "body",
        "pivot": [ -2.0, 6.0, -4.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 0.0, -6.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 16 ]
          }
        ],
        "inflate": 2.0        
      },
      {
        "name": "leg3",
        "parent": "body",
        "pivot": [ 2.0, 6.0, -4.0 ],
        "cubes": [
          {
            "origin": [ 0.0, 0.0, -6.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 16 ]
          }
        ],
        "inflate": 2.0
      }
    ]
  }
};
window.MOB3D_MODELS['glow_squid'] = {
  "format_version": "1.21.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.glow_squid",
        "texture_width": 64,
        "texture_height": 32,
        "visible_bounds_width": 3,
        "visible_bounds_height": 2,
        "visible_bounds_offset": [ 0, 0.5, 0 ]
      },
      "bones": [
        {
          "name": "body",
          "cubes": [
            {
              "origin": [ -6, -8, -6 ],
              "size": [ 12, 16, 12 ],
              "uv": [ 0, 0 ]
            }
          ],
          "locators": {
            "lead": [ 0, 0, -5 ]
          }
        },
        {
          "name": "tentacle1",
          "parent": "body",
          "pivot": [ 5.0, -7.0, 0.0 ],
          "cubes": [
            {
              "origin": [ 4.0, -25.0, -1.0 ],
              "size": [ 2, 18, 2 ],
              "uv": [ 48, 0 ]
            }
          ],
          "rotation": [ 0, 90, 0 ]
        },
        {
          "name": "tentacle2",
          "parent": "body",
          "pivot": [ 3.5, -7.0, 3.5 ],
          "cubes": [
            {
              "origin": [ 2.5, -25.0, 2.5 ],
              "size": [ 2, 18, 2 ],
              "uv": [ 48, 0 ]
            }
          ],
          "rotation": [ 0, 45, 0 ]
        },
        {
          "name": "tentacle3",
          "parent": "body",
          "pivot": [ 0.0, -7.0, 5.0 ],
          "cubes": [
            {
              "origin": [ -1.0, -25.0, 4.0 ],
              "size": [ 2, 18, 2 ],
              "uv": [ 48, 0 ]
            }
          ],
          "rotation": [ 0, 0, 0 ]
        },
        {
          "name": "tentacle4",
          "parent": "body",
          "pivot": [ -3.5, -7.0, 3.5 ],
          "cubes": [
            {
              "origin": [ -4.5, -25.0, 2.5 ],
              "size": [ 2, 18, 2 ],
              "uv": [ 48, 0 ]
            }
          ],
          "rotation": [ 0, -45, 0 ]
        },
        {
          "name": "tentacle5",
          "parent": "body",
          "pivot": [ -5.0, -7.0, 0.0 ],
          "cubes": [
            {
              "origin": [ -6.0, -25.0, -1.0 ],
              "size": [ 2, 18, 2 ],
              "uv": [ 48, 0 ]
            }
          ],
          "rotation": [ 0, -90, 0 ]
        },
        {
          "name": "tentacle6",
          "parent": "body",
          "pivot": [ -3.5, -7.0, -3.5 ],
          "cubes": [
            {
              "origin": [ -4.5, -25.0, -4.5 ],
              "size": [ 2, 18, 2 ],
              "uv": [ 48, 0 ]
            }
          ],
          "rotation": [ 0, -135, 0 ]
        },
        {
          "name": "tentacle7",
          "parent": "body",
          "pivot": [ 0.0, -7.0, -5.0 ],
          "cubes": [
            {
              "origin": [ -1.0, -25.0, -6.0 ],
              "size": [ 2, 18, 2 ],
              "uv": [ 48, 0 ]
            }
          ],
          "rotation": [ 0, -180, 0 ]
        },
        {
          "name": "tentacle8",
          "parent": "body",
          "pivot": [ 3.5, -7.0, -3.5 ],
          "cubes": [
            {
              "origin": [ 2.5, -25.0, -4.5 ],
              "size": [ 2, 18, 2 ],
              "uv": [ 48, 0 ]
            }
          ],
          "rotation": [ 0, -225, 0 ]
        }
      ]
    }
  ]
}
;
window.MOB3D_MODELS['iron_golem'] = {
  "format_version": "1.21.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.irongolem",
        "visible_bounds_width": 3,
        "visible_bounds_height": 3,
        "visible_bounds_offset": [ 0, 1.5, 0 ],
        "texture_width": 128,
        "texture_height": 128
      },
      "bones": [
        {
          "name": "body",
          "pivot": [ 0.0, 31.0, 0.0 ],
          "cubes": [
            {
              "origin": [ -9.0, 21.0, -6.0 ],
              "size": [ 18, 12, 11 ],
              "uv": [ 0, 40 ]
            },
            {
              "origin": [ -4.5, 16.0, -3.0 ],
              "size": [ 9, 5, 6 ],
              "uv": [ 0, 70 ],
              "inflate": 0.5
            }
          ]
        },
        {
          "name": "head",
          "parent": "body",
          "pivot": [ 0.0, 31.0, -2.0 ],
          "locators": {
            "lead": [ 0.0, 31.0, -2.0 ],
            "lead_hold": [0, 46, -2]
          },
          "cubes": [
            {
              "origin": [ -4.0, 33.0, -7.5 ],
              "size": [ 8, 10, 8 ],
              "uv": [ 0, 0 ]
            },
            {
              "origin": [ -1.0, 32.0, -9.5 ],
              "size": [ 2, 4, 2 ],
              "uv": [ 24, 0 ]
            }
          ]
        },
        {
          "name": "arm0",
          "parent": "body",
          "pivot": [ 0.0, 31.0, 0.0 ],
          "cubes": [
            {
              "origin": [ -13.0, 3.5, -3.0 ],
              "size": [ 4, 30, 6 ],
              "uv": [ 60, 21 ]
            }
          ]
        },
        {
          "name": "arm1",
          "parent": "body",
          "pivot": [ 0.0, 31.0, 0.0 ],
          "cubes": [
            {
              "origin": [ 9.0, 3.5, -3.0 ],
              "size": [ 4, 30, 6 ],
              "uv": [ 60, 58 ]
            }
          ]
        },
        {
          "name": "leg0",
          "parent": "body",
          "pivot": [ -4.0, 13.0, 0.0 ],
          "cubes": [
            {
              "origin": [ -7.5, 0.0, -3.0 ],
              "size": [ 6, 16, 5 ],
              "uv": [ 37, 0 ]
            }
          ]
        },
        {
          "name": "leg1",
          "parent": "body",
          "mirror": true,
          "pivot": [ 5.0, 13.0, 0.0 ],
          "cubes": [
            {
              "origin": [ 1.5, 0.0, -3.0 ],
              "size": [ 6, 16, 5 ],
              "uv": [ 60, 0 ]
            }
          ]
        }
      ]
    }
  ]
};
window.MOB3D_MODELS['panda'] = {
  "format_version": "1.8.0",
  "geometry.panda": {
    "texturewidth": 64,
    "textureheight": 64,
    "bones": [
      {
        "name": "head",
        "parent": "body",
        "pivot": [ 0.0, 12.5, -17.0 ],
        "locators": {
          "lead": [ 0.0, 14.0, -16.0 ]
        },
        "cubes": [
          {
            "origin": [ -6.5, 7.5, -21.0 ],
            "size": [ 13.0, 10.0, 9.0 ],
            "uv": [ 0, 6 ]
          },
          {
            "origin": [ -3.5, 7.5, -23.0 ],
            "size": [ 7.0, 5.0, 2.0 ],
            "uv": [ 45, 16 ]
          },
          {
            "origin": [ -8.5, 16.5, -18.0 ],
            "size": [ 5.0, 4.0, 1.0 ],
            "uv": [ 52, 25 ]
          },
          {
            "origin": [ 3.5, 16.5, -18.0 ],
            "size": [ 5.0, 4.0, 1.0 ],
            "uv": [ 52, 25 ]
          }
        ]
      },
      {
        "name": "body",
        "pivot": [ 0.0, 14.0, 0.0 ],        
        "bind_pose_rotation": [ 90.0, 0.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -9.5, 1.0, -6.5 ],
            "size": [ 19.0, 26.0, 13.0 ],
          "uv":[0, 25]
          }
        ]
      },
      {
        "name": "leg0",
        "parent": "body",
        "pivot": [ -5.5, 9.0, 9.0 ],
        "cubes": [
          {
            "origin": [ -8.5, 0.0, 6.0 ],
            "size": [ 6.0, 9.0, 6.0 ],
            "uv": [ 40, 0 ]
          }
        ]
      },
      {
        "name": "leg1",
        "parent": "body",
        "pivot": [ 5.5, 9.0, 9.0 ],
        "cubes": [
          {
            "origin": [ 2.5, 0.0, 6.0 ],
            "size": [ 6.0, 9.0, 6.0 ],
            "uv": [ 40, 0 ]
          }
        ]
      },
      {
        "name": "leg2",
        "parent": "body",
        "pivot": [ -5.5, 9.0, -9.0 ],
        "cubes": [
          {
            "origin": [ -8.5, 0.0, -12.0 ],
            "size": [ 6.0, 9.0, 6.0 ],
            "uv": [ 40, 0 ]
          }
        ]
      },
      {
        "name": "leg3",
        "parent": "body",
        "pivot": [ 5.5, 9.0, -9.0 ],
        "cubes": [
          {
            "origin": [ 2.5, 0.0, -12.0 ],
            "size": [ 6.0, 9.0, 6.0 ],
            "uv": [ 40, 0 ]
          }
        ]
      }
    ]
  }
}
;
window.MOB3D_MODELS['pig'] = {
  "format_version": "1.21.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.pig.v3",
        "texture_width": 64,
        "texture_height": 64,
        "visible_bounds_width": 3,
        "visible_bounds_height": 2.5,
        "visible_bounds_offset": [ 0, 0.75, 0 ]
      },
      "bones": [
        {
          "name": "root",
          "pivot": [ 0, 0, 0 ]
        },
        {
          "name": "head",
          "parent": "root",
          "pivot": [ 0, 12, -7 ],
          "cubes": [
            {
              "origin": [ -4, 8, -15 ],
              "size": [ 8, 8, 8 ],
              "uv": [ 0, 0 ]
            },
            {
              "origin": [ -2, 9, -16 ],
              "size": [ 4, 3, 1 ],
              "uv": [ 16, 16 ]
            }
          ],
          "locators": {
            "lead": [ 0, 12, -7 ]
          }
        },
        {
          "name": "body",
          "parent": "root",
          "pivot": [ 0, 0, 0 ],
          "cubes": [
            {
              "origin": [ -5, 2, -5 ],
              "size": [ 10, 16, 8 ],
              "inflate": 0.5,
              "uv": [ 28, 32 ],
              "rotation": [ 90, 0, 0 ]
            },
            {
              "origin": [ -5, 2, -5 ],
              "size": [ 10, 16, 8 ],
              "uv": [ 28, 8 ],
              "rotation": [ 90, 0, 0 ]
            }
          ],
          "locators": {
            "lead_hold": [ 0, 32, 1 ]
          }
        },
        {
          "name": "leg0",
          "parent": "root",
          "pivot": [ -3, 6, 6 ],
          "cubes": [
            {
              "origin": [ -5, 0, 4 ],
              "size": [ 4, 6, 4 ],
              "uv": [ 0, 16 ]
            }
          ]
        },
        {
          "name": "leg1",
          "parent": "root",
          "pivot": [ 3, 6, 6 ],
          "mirror": true,
          "cubes": [
            {
              "origin": [ 1, 0, 4 ],
              "size": [ 4, 6, 4 ],
              "uv": [ 0, 16 ]
            }
          ]
        },
        {
          "name": "leg3",
          "parent": "root",
          "pivot": [ 3, 6, -6 ],
          "mirror": true,
          "cubes": [
            {
              "origin": [ 1, 0, -8 ],
              "size": [ 4, 6, 4 ],
              "uv": [ 0, 16 ]
            }
          ]
        },
        {
          "name": "leg2",
          "parent": "root",
          "pivot": [ -3, 6, -6 ],
          "cubes": [
            {
              "origin": [ -5, 0, -8 ],
              "size": [ 4, 6, 4 ],
              "uv": [ 0, 16 ]
            }
          ]
        }
      ]
    }
  ]
}
;
window.MOB3D_MODELS['sheep'] = {
  "format_version": "1.8.0",
  "geometry.sheep.sheared.v1.8": {
    "visible_bounds_width": 2,
    "visible_bounds_height": 1.75,
    "visible_bounds_offset": [ 0, 0.5, 0 ],
    "bones": [
      {
        "name": "body",
        "pivot": [ 0.0, 19.0, 2.0 ],
        "bind_pose_rotation": [ 90.0, 0.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 13.0, -5.0 ],
            "size": [ 8, 16, 6 ],
            "uv": [ 28, 8 ]
          }
        ],
          "locators": {
          "lead_hold": [0, 32, 0]
      }
      },
      {
        "name": "head",
        "pivot": [ 0.0, 18.0, -8.0 ],
        "locators": {
          "lead": [ 0.0, 18.0, -8.0 ]
        },
        "cubes": [
          {
            "origin": [ -3.0, 16.0, -14.0 ],
            "size": [ 6, 6, 8 ],
            "uv": [ 0, 0 ]
          }
        ]
      },
      {
        "name": "leg0",
        "parent": "body",
        "pivot": [ -3.0, 12.0, 7.0 ],
        "cubes": [
          {
            "origin": [ -5.0, 0.0, 5.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      },
      {
        "name": "leg1",
        "parent": "body",
        "pivot": [ 3.0, 12.0, 7.0 ],
        "cubes": [
          {
            "origin": [ 1.0, 0.0, 5.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      },
      {
        "name": "leg2",
        "parent": "body",
        "pivot": [ -3.0, 12.0, -5.0 ],
        "cubes": [
          {
            "origin": [ -5.0, 0.0, -7.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      },
      {
        "name": "leg3",
        "parent": "body",
        "pivot": [ 3.0, 12.0, -5.0 ],
        "cubes": [
          {
            "origin": [ 1.0, 0.0, -7.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      }
    ]
  },
  "geometry.sheep.v1.8": {
    "visible_bounds_width": 2,
    "visible_bounds_height": 1.75,
    "visible_bounds_offset": [ 0, 0.5, 0 ],
    "bones": [
      {
        "name": "head",
        "pivot": [ 0.0, 18.0, -8.0 ],
        "cubes": [
          {
            "origin": [ -3.0, 16.0, -12.0 ],
            "size": [ 6, 6, 6 ],
            "uv": [ 0, 32 ],
            "inflate": 0.6
          }
        ]
      },
      {
        "name": "body",
        "pivot": [ 0.0, 19.0, 2.0 ],
        "bind_pose_rotation": [ 90.0, 0.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 13.0, -5.0 ],
            "size": [ 8, 16, 6 ],
            "uv": [ 28, 40 ],
            "inflate": 1.75
          }
        ]
      },
      {
        "name": "leg0",
        "parent": "body",
        "pivot": [ -3.0, 12.0, 7.0 ],
        "cubes": [
          {
            "origin": [ -5.0, 6.0, 5.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 48 ],
            "inflate": 0.5
          }
        ]
      },

      {
        "name": "leg1",
        "parent": "body",
        "pivot": [ 3.0, 12.0, 7.0 ],
        "cubes": [
          {
            "origin": [ 1.0, 6.0, 5.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 48 ],
            "inflate": 0.5
          }
        ]
      },

      {
        "name": "leg2",
        "parent": "body",
        "pivot": [ -3.0, 12.0, -5.0 ],
        "cubes": [
          {
            "origin": [ -5.0, 6.0, -7.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 48 ],
            "inflate": 0.5
          }
        ]
      },

      {
        "name": "leg3",
        "parent": "body",
        "pivot": [ 3.0, 12.0, -5.0 ],
        "cubes": [
          {
            "origin": [ 1.0, 6.0, -7.0 ],
            "size": [ 4, 6, 4 ],
            "uv": [ 0, 48 ],
            "inflate": 0.5
          }
        ]
      }
    ]
  }
};
window.MOB3D_MODELS['skeleton'] = {
  "format_version": "1.8.0",
  "geometry.skeleton.v1.8": {
    "texturewidth": 64,
    "textureheight": 32,
    "visible_bounds_width": 2,
    "visible_bounds_height": 2,
    "visible_bounds_offset": [ 0, 1, 0 ],
    "bones": [
      {
        "name": "body",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 12.0, -2.0 ],
            "size": [ 8, 12, 4 ],
            "uv": [ 16, 16 ]
          }
        ],
        "parent": "waist"
      },

      {
        "name": "waist",
        "pivot": [ 0.0, 12.0, 0.0 ]
      },

      {
        "name": "head",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 0, 0 ]
          }
        ],
        "parent": "body"
      },

      {
        "name": "hat",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 32, 0 ],
            "inflate": 0.5
          }
        ],
        "neverRender": true,
        "parent": "head"
      },
      {
        "name": "rightArm",
        "pivot": [ -5.0, 22.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -6.0, 12.0, -1.0 ],
            "size": [ 2, 12, 2 ],
            "uv": [ 40, 16 ]
          }
        ],
        "parent": "body"
      },

      {
        "name": "rightItem",
        "pivot": [ -6, 15, 1 ],
        "neverRender": true,
        "parent": "rightArm"
      },

      {
        "name": "leftArm",
        "pivot": [ 5.0, 22.0, 0.0 ],
        "cubes": [
          {
            "origin": [ 4.0, 12.0, -1.0 ],
            "size": [ 2, 12, 2 ],
            "uv": [ 40, 16 ]
          }
        ],
        "mirror": true,
        "parent": "body"
      },
      {
        "name": "leftItem",
        "pivot": [ 6.0, 15.0, 1.0 ],
        "neverRender": true,
        "parent": "leftArm"
      },
      {
        "name": "rightLeg",
        "pivot": [ -2.0, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -3.0, 0.0, -1.0 ],
            "size": [ 2, 12, 2 ],
            "uv": [ 0, 16 ]
          }
        ],
        "parent": "body"
      },
      {
        "name": "leftLeg",
        "pivot": [ 2.0, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ 1.0, 0.0, -1.0 ],
            "size": [ 2, 12, 2 ],
            "uv": [ 0, 16 ]
          }
        ],
        "mirror": true,
        "parent": "body"
      }
    ]
  }
};
window.MOB3D_MODELS['strider'] = {
  "format_version": "1.21.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.strider",
        "texture_width": 64,
        "texture_height": 128,
        "visible_bounds_width": 3,
        "visible_bounds_height": 2,
        "visible_bounds_offset": [0, 1, 0]
      },
      "bones": [
        {
          "name": "right_leg",
          "pivot": [-4, 16, 0],
          "cubes": [
            {"origin": [-6, 0, -2], "size": [4, 16, 4], "uv": [0, 32]}
          ]
        },
        {
          "name": "left_leg",
          "pivot": [4, 16, 0],
          "cubes": [
            {"origin": [2, 0, -2], "size": [4, 16, 4], "uv": [0, 55]}
          ]
        },
        {
          "name": "body",
          "pivot": [0, 16, 0],
          "cubes": [
            {"origin": [-8, 14, -8], "size": [16, 14, 16], "uv": [0, 0]}
          ],
          "locators": {
            "lead": [0, 15, -1],
            "lead_hold": [0, 39, -1]
          }
        },
        {
          "name": "bristle5",
          "parent": "body",
          "pivot": [8, 19, 0],
          "cubes": [
            {"origin": [8, 19, -8], "size": [12, 0, 16], "pivot": [8, 19, 0], "rotation": [0, 0, 70], "uv": [16, 65]}
          ]
        },
        {
          "name": "bristle4",
          "parent": "body",
          "pivot": [8, 24, 0],
          "cubes": [
            {"origin": [8, 24, -8], "size": [12, 0, 16], "pivot": [8, 24, 0], "rotation": [0, 0, 65], "uv": [16, 49]}
          ]
        },
        {
          "name": "bristle3",
          "parent": "body",
          "pivot": [8, 28, 0],
          "cubes": [
            {"origin": [8, 28, -8], "size": [12, 0, 16], "pivot": [8, 28, 0], "rotation": [0, 0, 50], "uv": [16, 33]}
          ]
        },
        {
          "name": "bristle2",
          "parent": "body",
          "pivot": [-8, 28, 0],
          "cubes": [
            {"origin": [-20, 28, -8], "size": [12, 0, 16], "pivot": [-8, 28, 0], "rotation": [0, 0, -50], "uv": [16, 33], "mirror": true}
          ]
        },
        {
          "name": "bristle1",
          "parent": "body",
          "pivot": [-8, 24, 0],
          "cubes": [
            {"origin": [-20, 24, -8], "size": [12, 0, 16], "pivot": [-8, 24, 0], "rotation": [0, 0, -65], "uv": [16, 49], "mirror": true}
          ]
        },
        {
          "name": "bristle0",
          "parent": "body",
          "pivot": [-8, 19, 0],
          "cubes": [
            {"origin": [-20, 19, -8], "size": [12, 0, 16], "pivot": [-8, 19, 0], "rotation": [0, 0, -70], "uv": [16, 65], "mirror": true}
          ]
        }
      ]
    }
  ]
};
window.MOB3D_MODELS['warden'] = {
	"format_version": "1.12.0",
	"minecraft:geometry": [
		{
			"description": {
				"identifier": "geometry.warden",
				"texture_width": 128,
				"texture_height": 128,
				"visible_bounds_width": 4,
				"visible_bounds_height": 5.5,
				"visible_bounds_offset": [ 0, 2.25, 0 ]
			},
			"bones": [
				{
					"name": "root",
					"pivot": [ 0, 0, 0 ]
				},
				{
					"name": "body",
					"parent": "root",
					"pivot": [ 0, 21, 0 ],
					"cubes": [
            {
              "origin": [ -9, 13, -4 ],
              "size": [ 18, 21, 11 ],
              "uv": [ 0, 0 ]
            }
					]
				},
				{
					"name": "right_ribcage",
					"parent": "body",
					"pivot": [ -7, 23, -4 ],
					"cubes": [
            {
              "origin": [ -9, 13, -4.1 ],
              "size": [ 9, 21, 0 ],
              "uv": [ 90, 11 ]
            }
					]
				},
				{
					"name": "left_ribcage",
					"parent": "body",
					"pivot": [ 7, 23, -4 ],
					"cubes": [
            {
              "origin": [ 0, 13, -4.1 ],
              "size": [ 9, 21, 0 ],
              "uv": [ 90, 11 ],
              "mirror": true
            }
					]
				},
				{
					"name": "head",
					"parent": "body",
					"pivot": [ 0, 34, 0 ],
					"cubes": [
            {
              "origin": [ -8, 34, -5 ],
              "size": [ 16, 16, 10 ],
              "uv": [ 0, 32 ]
            }
					]
				},
				{
					"name": "right_tendril",
					"parent": "head",
					"pivot": [ -8, 46, 0 ],
					"cubes": [
            {
              "origin": [ -24, 43, 0 ],
              "size": [ 16, 16, 0 ],
              "uv": [ 52, 32 ]
            }
					]
				},
				{
					"name": "left_tendril",
					"parent": "head",
					"pivot": [ 8, 46, 0 ],
					"cubes": [
            {
              "origin": [ 8, 43, 0 ],
              "size": [ 16, 16, 0 ],
              "uv": [ 58, 0 ]
            }
					]
				},
				{
					"name": "right_arm",
					"parent": "body",
					"pivot": [ -13, 34, 1 ],
					"cubes": [
            {
              "origin": [ -17, 6, -3 ],
              "size": [ 8, 28, 8 ],
              "uv": [ 44, 50 ]
            }
					]
				},
				{
					"name": "left_arm",
					"parent": "body",
					"pivot": [ 13, 34, 1 ],
					"cubes": [
            {
              "origin": [ 9, 6, -3 ],
              "size": [ 8, 28, 8 ],
              "uv": [ 0, 58 ]
            }
					]
				},
				{
					"name": "right_leg",
					"parent": "root",
					"pivot": [ -5.9, 13, 0 ],
					"cubes": [
            {
              "origin": [ -9, 0, -3 ],
              "size": [ 6, 13, 6 ],
              "uv": [ 76, 48 ]
            }
					]
				},
				{
					"name": "left_leg",
					"parent": "root",
					"pivot": [ 5.9, 13, 0 ],
					"cubes": [
            {
              "origin": [ 3, 0, -3 ],
              "size": [ 6, 13, 6 ],
              "uv": [ 76, 76 ]
            }
					]
				}
			]
		}
	]
}
;
window.MOB3D_MODELS['wolf'] = {
  "format_version": "1.21.0",
  "minecraft:geometry": [
    {
      "description": {
        "identifier": "geometry.wolf",
        "texture_width": 64,
        "texture_height": 32,
        "visible_bounds_width": 3,
        "visible_bounds_height": 2,
        "visible_bounds_offset": [0, 1, 0]
      },
      "bones": [
        {
          "name": "head",
          "pivot": [-1, 10.5, -7],
          "cubes": [
            {"origin": [-3, 7.5, -9], "size": [6, 6, 4], "uv": [0, 0]},
            {"origin": [-3, 13.5, -7], "size": [2, 2, 1], "uv": [16, 14]},
            {"origin": [1, 13.5, -7], "size": [2, 2, 1], "uv": [16, 14]},
            {"origin": [-1.5, 7.51563, -12], "size": [3, 3, 4], "uv": [0, 10]}
          ],
          "locators": {
            "lead": [0, 10.5, -7]
          }
        },
        {
          "name": "body",
          "pivot": [0, 10, 2],
          "cubes": [
            {"origin": [-3, 3, -1], "size": [6, 9, 6], "uv": [18, 14]}
          ],
          "locators": {
            "lead_hold": [-1, 9, 22]
          }
        },
        {
          "name": "upperBody",
          "pivot": [-1, 10, 2],
          "cubes": [
            {"origin": [-4, 7, -1], "size": [8, 6, 7], "uv": [21, 0]}
          ]
        },
        {
          "name": "leg0",
          "pivot": [-2.5, 8, 7],
          "cubes": [
            {"origin": [-2.5, 0, 6], "size": [2, 8, 2], "uv": [0, 18]}
          ]
        },
        {
          "name": "leg1",
          "pivot": [0.5, 8, 7],
          "cubes": [
            {"origin": [0.5, 0, 6], "size": [2, 8, 2], "uv": [0, 18]}
          ]
        },
        {
          "name": "leg2",
          "pivot": [-2.5, 8, -4],
          "cubes": [
            {"origin": [-2.5, 0, -5], "size": [2, 8, 2], "uv": [0, 18]}
          ]
        },
        {
          "name": "leg3",
          "pivot": [0.5, 8, -4],
          "cubes": [
            {"origin": [0.5, 0, -5], "size": [2, 8, 2], "uv": [0, 18]}
          ]
        },
        {
          "name": "tail",
          "pivot": [-1, 12, 8],
          "cubes": [
            {"origin": [-1, 4, 7], "size": [2, 8, 2], "uv": [9, 18]}
          ]
        }
      ]
    }
  ]
};
window.MOB3D_MODELS['zombie'] = {
  "format_version": "1.8.0",
  "geometry.zombie.v1.8": {
    "visible_bounds_width": 2,
    "visible_bounds_height": 2,
    "visible_bounds_offset": [ 0, 1, 0 ],
    "texturewidth": 64,
    "textureheight": 32,
    "bones": [
      {
        "name": "body",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 12.0, -2.0 ],
            "size": [ 8, 12, 4 ],
            "uv": [ 16, 16 ]
          }
        ],
        "parent": "waist"
      },

      {
        "name": "waist",
        "neverRender": true,
        "pivot": [ 0.0, 12.0, 0.0 ]
      },

      {
        "name": "head",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 0, 0 ]
          }
        ],
        "parent": "body"
      },

      {
        "name": "hat",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 32, 0 ],
            "inflate": 0.5
          }
        ],
        "neverRender": true,
        "parent": "head"
      },

      {
        "name": "rightArm",
        "pivot": [ -5.0, 22.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -8.0, 12.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 40, 16 ]
          }
        ],
        "parent": "body"
      },

      {
        "name": "rightItem",
        "pivot": [ -6, 15, 1 ],
        "neverRender": true,
        "parent": "rightArm"
      },

      {
        "name": "leftArm",
        "pivot": [ 5.0, 22.0, 0.0 ],
        "cubes": [
          {
            "origin": [ 4.0, 12.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 40, 16 ]
          }
        ],
        "mirror": true,
        "parent": "body"
      },
      {
        "name": "leftItem",
        "pivot": [ 6.0, 15.0, 1.0 ],
        "neverRender": true,
        "parent": "leftArm"
      },

      {
        "name": "rightLeg",
        "pivot": [ -1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -3.9, 0.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ],
        "parent": "body"
      },

      {
        "name": "leftLeg",
        "pivot": [ 1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -0.1, 0.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ],
        "mirror": true,
        "parent": "body"
      }
    ]
  }
};
