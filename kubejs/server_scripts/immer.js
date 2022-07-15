onEvent('recipes', event=>{
    event.remove({output:'create:andesite_alloy'})
    event.recipes.immersiveengineeringAlloy('create:andesite_alloy','minecraft:andesite','minecraft:iron_ingot')
    
})