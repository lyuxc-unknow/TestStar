onEvent('block.registry', event => {
	event.create('purpur_dust_block').material('stone').hardness(5.2).displayName('紫珀粉块')
	event.create('stone_dust_block').material('sand').tagBlock('minecraft:mineable/shovel').hardness(1).displayName('石粉块')
})