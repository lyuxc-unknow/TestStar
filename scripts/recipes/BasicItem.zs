import crafttweaker.api.item.IItemStack;

val air as IItemStack= <item:minecraft:air>;

craftingTable.addShaped("purpur_stack", <item:kubejs:purpur_stack> * 4, [
        [<item:minecraft:purpur_block>], 
        [<item:minecraft:purpur_block>]
]);

craftingTable.addShaped("purpur_hummer", <item:kubejs:purpur_hummer>, [
    [<item:minecraft:air>, <item:minecraft:purpur_block>],
    [<item:kubejs:purpur_stack>, <item:minecraft:air>]
]);

craftingTable.addShapeless("purpur_dust", <item:kubejs:purpur_dust> * 16,
    [<item:kubejs:purpur_hummer>.anyDamage().transformDamage(16), <item:minecraft:purpur_block>]
);

craftingTable.addShaped("purpur_dust_block", <item:kubejs:purpur_dust_block>,[
    [<item:kubejs:purpur_dust>,<item:kubejs:purpur_dust>],
    [<item:kubejs:purpur_dust>,<item:kubejs:purpur_dust>]
]);

craftingTable.addShaped("purpur_furnace", <item:teststar:magic_furnace>,[
    [<item:kubejs:purpur_dust_block>, <item:kubejs:purpur_dust_block>],
    [<item:kubejs:purpur_dust_block>, <item:kubejs:purpur_dust_block>]
]);

craftingTable.addShapeless("stone_dust", <item:kubejs:stone_dust> * 16,
    [<tag:items:forge:stone>, <item:kubejs:purpur_hummer>.anyDamage().transformDamage(16)]
);

craftingTable.addShapeless("gravel", <item:minecraft:gravel>,
    [<item:minecraft:smooth_stone>, <item:kubejs:purpur_hummer>.anyDamage().transformDamage(1)]
);

craftingTable.addShaped("water_col",<item:teststar:air_collector>,[
    [<tag:items:forge:stone>,<item:minecraft:warped_roots>,<tag:items:forge:stone>],
    [<tag:items:forge:cobblestone>,<item:kubejs:stone_dust>,<tag:items:forge:cobblestone>],
    [air,<tag:items:forge:stone>,air]
]);

craftingTable.addShaped("stack_form_craft",<item:minecraft:stick>,[
    [<item:kubejs:purpur_stack>,<item:minecraft:warped_roots>],
    [<item:minecraft:warped_roots>,<item:kubejs:purpur_stack>]
]);
craftingTable.remove(<item:minecraft:crafting_table>);
craftingTable.addShaped("crafting_table_change",<item:minecraft:crafting_table>,[
    [<item:kubejs:purpur_hummer>,<item:kubejs:stone_dust>],
    [<item:minecraft:oak_planks>,<item:minecraft:oak_planks>]
]);

craftingTable.addShaped("wood_stack_with_plane",<item:kubejs:sticks_with_vegetation>,[
    [<item:minecraft:warped_roots>,<item:minecraft:stick>],
    [<item:minecraft:stick>,<item:minecraft:warped_roots>]
]);
/*
craftingTable.addShaped("sand",<item:minecraft:sand>,[
    [<item:kubejs:stone_dust>,<item:kubejs:stone_dust>,<item:kubejs:stone_dust>],
    [<item:kubejs:stone_dust>,<item:kubejs:purpur_hummer>.anyDamage().transformDamage(1),<item:kubejs:stone_dust>],
    [<item:kubejs:stone_dust>,<item:kubejs:stone_dust>,<item:kubejs:stone_dust>]
]);
*/

craftingTable.addShaped("dirt",<item:minecraft:dirt> * 8,[
    [<item:minecraft:warped_roots>,<item:kubejs:purpur_dust>,<item:minecraft:warped_roots>],
    [<item:kubejs:stone_dust>,<item:minecraft:clay_ball>,<item:kubejs:stone_dust>],
    [<item:minecraft:warped_roots>,<item:kubejs:purpur_dust>,<item:minecraft:warped_roots>]
]);

craftingTable.addShaped("swm_machine",<item:teststar:simple_washing_machine>,[
    [<item:kubejs:purpur_dust_block>,<item:minecraft:warped_roots>,<item:kubejs:purpur_dust_block>],
    [<item:kubejs:purpur_dust_block>,<item:minecraft:furnace>,<item:kubejs:purpur_dust_block>],
    [<item:kubejs:purpur_dust_block>,<item:kubejs:purpur_dust_block>,<item:kubejs:purpur_dust_block>]
]);

craftingTable.addShaped("stone_dust_block",<item:kubejs:stone_dust_block>,[
    [<item:kubejs:stone_dust>, <item:kubejs:stone_dust>, <item:kubejs:stone_dust>],
    [<item:kubejs:stone_dust>, <item:kubejs:stone_dust>, <item:kubejs:stone_dust>],
    [<item:kubejs:stone_dust>, <item:kubejs:stone_dust>, <item:kubejs:stone_dust>]
]);

craftingTable.addShaped("stone_dust_ingot",<item:kubejs:stone_dust_ingot> * 2,[
    [<item:kubejs:stone_dust_block>, <item:minecraft:warped_roots>, <item:kubejs:stone_dust_block>],
    [<item:minecraft:warped_roots>, <item:kubejs:stone_dust_block>, <item:minecraft:warped_roots>],
    [<item:kubejs:stone_dust_block>, <item:minecraft:warped_roots>, <item:kubejs:stone_dust_block>]
]);

craftingTable.addShaped("craft_andesite",<item:minecraft:andesite> * 4,[
    [<item:ae2:silicon>, <item:minecraft:stone>],
    [<item:minecraft:stone>, <item:ae2:silicon>]
]);

craftingTable.addShaped("mixed_fuel", <item:kubejs:mixed_fuel>,[
    [<item:kubejs:plant_fibres>,<item:kubejs:stone_dust>,<item:kubejs:plant_fibres>],
    [<item:kubejs:sticks_with_vegetation>,<item:kubejs:purpur_dust>,<item:kubejs:sticks_with_vegetation>],
    [<item:kubejs:plant_fibres>,<item:kubejs:stone_dust>,<item:kubejs:plant_fibres>]
]);

craftingTable.addShaped("basic_metter_reuse", <item:teststar:simple_substance_converter>,[
    [<item:kubejs:stone_dust_block>,<item:kubejs:mixed_fuel>,<item:kubejs:stone_dust_block>],
    [<item:kubejs:mixed_fuel>,<tag:items:forge:silicon>,<item:kubejs:mixed_fuel>],
    [<item:kubejs:stone_dust_block>,<item:kubejs:mixed_fuel>,<item:kubejs:stone_dust_block>]
]);

craftingTable.addShapeless("plant_fibres", <item:kubejs:plant_fibres>,[
    <item:minecraft:shears>.anyDamage().transformDamage(1),<tag:items:forge:plants>
]);

craftingTable.addShapeless("hemp_rope", <item:kubejs:hemp_rope>,[
    <item:kubejs:plant_fibres>,<item:kubejs:plant_fibres>,<item:kubejs:plant_fibres>
]);

<item:kubejs:mixed_fuel>.burnTime = 2400;

removeAndShaped(<item:minecraft:bucket>,[
    [air,<item:botania:mana_string>,air],
    [<tag:items:forge:plates/iron>,air,<tag:items:forge:plates/iron>],
    [air,<tag:items:forge:plates/iron>,air]
]);

blastFurnace.remove(<item:minecraft:blaze_powder>);

removeAndShaped(<item:teststar:melting_crucible>,[
    [<item:kubejs:purpur_dust_block>,air,<item:kubejs:purpur_dust_block>],
    [<item:kubejs:purpur_dust_block>,<item:minecraft:blaze_powder>,<item:kubejs:purpur_dust_block>],
    [<item:kubejs:purpur_dust_block>,<item:kubejs:purpur_dust_block>,<item:kubejs:purpur_dust_block>]
]);

removeAndShaped(<item:minecraft:chest>,[
    [<tag:items:minecraft:planks>,<tag:items:minecraft:planks>,<tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>,<item:minecraft:stone_button>,<tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>,<tag:items:minecraft:planks>,<tag:items:minecraft:planks>]
]);

craftingTable.removeByName("powah:crafting/dielectric_paste");
craftingTable.removeByName("powah:crafting/dielectric_paste_2");

craftingTable.removeByName("immersiveengineering:crafting/cokebrick");
craftingTable.addShaped("cokebrick",<item:immersiveengineering:cokebrick> * 3,[
    [<item:kubejs:stone_dust_ingot>,<tag:items:forge:sandstone>,<item:kubejs:stone_dust_ingot>],
    [<item:powah:dielectric_paste>,<item:minecraft:bricks>,<item:powah:dielectric_paste>],
    [<item:kubejs:stone_dust_ingot>,<tag:items:forge:sandstone>,<item:kubejs:stone_dust_ingot>]
]);

craftingTable.removeByName("immersiveengineering:crafting/blastbrick");
craftingTable.addShaped("blastbrick",<item:immersiveengineering:blastbrick> * 3,[
    [<tag:items:forge:sandstone>,<item:immersiveengineering:coal_coke>,<tag:items:forge:sandstone>],
    [<tag:items:forge:sandstone>,<item:immersiveengineering:cokebrick>,<tag:items:forge:sandstone>],
    [<tag:items:forge:sandstone>,<item:immersiveengineering:coal_coke>,<tag:items:forge:sandstone>]
]);

<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("mix_fuel",<item:kubejs:mixed_fuel>,24000);