onEvent("recipes",event => {
    event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": "kubejs:sticks_with_vegetation",
    },
    "block_in": "minecraft:water",
    "time": 5,
    "post": [{
            "type": "drop_item",
            "item": "minecraft:oak_planks"
        }]
    })
})
