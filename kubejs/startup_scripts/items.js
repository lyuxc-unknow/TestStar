console.info("KubeJS Info:Start Register Items")

onEvent('item.registry', event => {
	event.create('test_item').displayName('测试物品~仅限测试')
	event.create('money').displayName('通用货币')
	event.create('reset_flag').displayName('重置标记~')
	event.create('purpur_dust').displayName('紫珀粉')
	event.create('purpur_stack').displayName('紫珀棍')
	event.create('purpur_hummer').displayName('紫珀锤').maxDamage(128)
	event.create('stone_dust').displayName('石粉')
	event.create('sticks_with_vegetation').displayName('含有植被的木棍')
	event.create('stone_dust_ingot').tag('forge:ingots/brick').displayName('压缩石粉砖')
	event.create('plant_fibres').displayName('植物纤维')
	event.create('hemp_rope').tag('forge:string').displayName('麻绳')
	event.create('mixed_fuel').displayName('混合燃料')
	event.create('yellow_iron_ingot').displayName('黄铁锭')
})

console.info("KubeJS Info:Finish Register Items")