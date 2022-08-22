console.info("mdb reading.....")

//let crucible = MbdRegistry.getDefinition("teststar:melting_crucible")

onEvent('recipes', event => {
    event.recipes.multiblocked.multiblock("crucible")
         .setChance(0.25).inputItem('kubejs:mixed_fuel')
         .setChance(1).inputItem('2x cyclic:compressed_cobblestone')
         .outputFluid(Fluid.of('minecraft:lava',500))
         .duration(100)
    event.recipes.multiblocked.multiblock("simple_substance_converter")
         .setChance(0.5).inputItem('kubejs:mixed_fuel')
         .setChance(1).inputItem('thermal:gunpowder_block')
         .outputItem('minecraft:blaze_powder')
         .duration(400)
    event.recipes.multiblocked.multiblock("fans")
         .inputItem('2x minecraft:charcoal')
         .inputItem('2x minecraft:clay_ball')
         .inputItem('minecraft:blaze_powder')
         .inputStress(256)
         .outputItem('2x powah:dielectric_paste')
         .duration(400)
})

onEvent('mbd.create_ui.teststar.air_collector',event =>{
    event.cancel();
})

onEvent('mbd.create_ui.teststar.melting_crucible',event => {
    if(!event.component.isFormed()) {
        event.cancel();
    }
})