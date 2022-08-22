import crafttweaker.api.item.IItemStack;
//import scripts.function.crafting;

<recipetype:botania:petal_apothecary>.remove(<item:botania:pure_daisy>);
<recipetype:botania:petal_apothecary>.addRecipe("change_daisy",<item:botania:pure_daisy>,<item:botania:white_petal>,<item:botania:white_petal>,<item:botania:white_petal>,<item:botania:white_petal>,<item:botania:white_petal>,<item:botania:white_petal>,<item:botania:white_petal>,<item:botania:white_petal>);

<recipetype:botania:pure_daisy>.remove(<block:botania:livingrock>);
<recipetype:botania:pure_daisy>.remove(<block:botania:livingwood>);
<recipetype:botania:pure_daisy>.addRecipe("living_rock",<blockstate:botania:livingrock>,<block:minecraft:mossy_cobblestone>,2400);
<recipetype:botania:pure_daisy>.addRecipe("living_wood",<blockstate:botania:livingwood:axis=y>,<block:minecraft:oak_wood>,2400);

<recipetype:botania:mana_infusion>.addRecipe("gold",<item:minecraft:gold_ingot>,<item:kubejs:yellow_iron_ingot>,1000);

val air as IItemStack= <item:minecraft:air>;

craftingTable.remove(<item:botania:mana_spreader>);
craftingTable.addShaped("mana_spreader", <item:botania:mana_spreader>, [
    [<tag:items:botania:livingwood_logs>, <tag:items:botania:livingwood_logs>, <tag:items:botania:livingwood_logs>],
    [<item:kubejs:yellow_iron_ingot>,<tag:items:botania:petals>,air],
    [<tag:items:botania:livingwood_logs>,<tag:items:botania:livingwood_logs>,<tag:items:botania:livingwood_logs>]
]);

removeAndShaped(<item:botania:diluted_pool>, [
    [<item:botania:livingrock>,air,<item:botania:livingrock>],
    [<item:botania:livingrock>,<item:botania:livingrock>,<item:botania:livingrock>]
]);

removeAndShaped(<item:botania:mana_pool>, [
    [<item:botania:mana_diamond>,air,<item:botania:mana_diamond>],
    [<item:botania:livingrock>,<item:botania:mana_diamond>,<item:botania:livingrock>],
    [<item:botania:livingrock>,<item:botania:livingrock>,<item:botania:livingrock>]
]);

readdShaped(<item:kubejs:mixed_fuel> * 16, [
    [<item:kubejs:plant_fibres>,<item:kubejs:purpur_dust>,<item:kubejs:plant_fibres>],
    [<item:kubejs:sticks_with_vegetation>,<item:minecraft:blaze_powder>,<item:kubejs:sticks_with_vegetation>],
    [<item:kubejs:plant_fibres>,<item:kubejs:purpur_dust>,<item:kubejs:plant_fibres>]
]);