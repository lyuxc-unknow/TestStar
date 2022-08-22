import crafttweaker.api.item.IItemStack;

var air  = <item:minecraft:air>;

removeAndShaped(<item:multiblocked:create_input>, [
    [<tag:items:minecraft:planks>,<tag:items:minecraft:planks>,<tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>,<item:create:gearbox>,<tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>,<tag:items:minecraft:planks>,<tag:items:minecraft:planks>]
]);

removeAndShaped(<item:teststar:fan>, [
    [<tag:items:minecraft:planks>,<item:create:andesite_casing>,<tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>,<item:minecraft:furnace>,<item:create:encased_fan>],
    [<tag:items:minecraft:planks>,<item:create:andesite_casing>,<tag:items:minecraft:planks>]
]);

removeAndShaped(<item:ts_mod:hot_stone_dust_block>, [
    [<item:kubejs:stone_dust_block>,<item:kubejs:stone_dust_block>,<item:kubejs:stone_dust_block>],
    [<item:kubejs:stone_dust_block>,<item:minecraft:lava_bucket>.transformReplace(<item:minecraft:bucket>),<item:kubejs:stone_dust_block>],
    [<item:kubejs:stone_dust_block>,<item:kubejs:stone_dust_block>,<item:kubejs:stone_dust_block>]
]);

removeAndShaped(<item:teststar:item_modular>,[
    [<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>,<tag:items:forge:chests>,<item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>,<item:minecraft:iron_ingot>]
]);