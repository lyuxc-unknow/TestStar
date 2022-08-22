/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.simple_substance_converter", handler: (event: Internal.RecipeUIEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.create_ui.multiblocked.blueprint_table_part", handler: (event: Internal.CreateUIEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.custom_shape.multiblocked.pedestal", handler: (event: Internal.CustomShapeEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.teststar.simple_substance_converter", handler: (event: Internal.StatusChangedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.custom_shape.multiblocked.blueprint_table", handler: (event: Internal.CustomShapeEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.teststar.simple_washing_machine", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.serializer.special.flag", handler: (event: Internal.SpecialRecipeSerializerManager) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.chest.opened", handler: (event: Internal.ChestEventJS) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.teststar.magic_furnace", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.right_click.multiblocked.blueprint_table_part", handler: (event: Internal.RightClickEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.teststar.simple_substance_converter", handler: (event: Internal.UpdateTickEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.teststar.simple_washing_machine", handler: (event: Internal.UpdateFormedEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.teststar.simple_substance_converter", handler: (event: Internal.UpdateRendererEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.trait_ui.teststar.melting_crucible", handler: (event: Internal.InitTraitUIEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.pedestal", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.neighbor_changed.multiblocked.pedestal", handler: (event: Internal.NeighborChangedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.teststar.simple_substance_converter", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.blueprint_table", handler: (event: Internal.StatusChangedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.item.any", handler: (event: Internal.PartAddedEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.trait_ui.teststar.simple_substance_converter", handler: (event: Internal.InitTraitUIEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.teststar.melting_crucible", handler: (event: Internal.UpdateTickEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.blueprint_table_part", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.teststar.simple_washing_machine", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.add.items", handler: (event: Internal.AddJEIEventJS<any>) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.blueprint_table", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.magic_furnace_recipes_map", handler: (event: Internal.RecipeUIEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.custom_shape.multiblocked.blueprint_table_part", handler: (event: Internal.CustomShapeEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.fluids", handler: (event: Internal.HideJEIEventJS<any>) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.remove.categories", handler: (event: Internal.RemoveJEICategoriesEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.swm_recipes", handler: (event: Internal.RecipeUIEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.paint_screen", handler: (event: Internal.ScreenPaintEventJS) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.teststar.air_collector", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.model_properties", handler: (event: Internal.ItemModelPropertiesEventJS) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.teststar.assembly_machine", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.multiblocked.blueprint_table_part", handler: (event: Internal.PartAddedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.teststar.air_collector", handler: (event: Internal.UpdateTickEvent) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "command.registry", handler: (event: Internal.CommandRegistryEventJS) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.teststar.simple_washing_machine", handler: (event: Internal.UpdateRendererEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.pedestal", handler: (event: Internal.UpdateRendererEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.teststar.melting_crucible", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.status_changed.multiblocked.blueprint_table_part", handler: (event: Internal.StatusChangedEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.create_ui.teststar.simple_substance_converter", handler: (event: Internal.CreateUIEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.teststar.simple_washing_machine", handler: (event: Internal.UpdateTickEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.water_collector_recipes_map", handler: (event: Internal.RecipeUIEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.create_ui.teststar.simple_washing_machine", handler: (event: Internal.CreateUIEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.multiblocked.blueprint_table", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.items", handler: (event: Internal.HideJEIEventJS<any>) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.crucible", handler: (event: Internal.RecipeUIEvent) => void);
/**
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.registry.tool_tiers", handler: (event: Internal.ItemToolTierEventJS) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.subtypes", handler: (event: Internal.JEISubtypesEventJS) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.teststar.air_collector", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.create_ui.multiblocked.blueprint_table", handler: (event: Internal.CreateUIEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.blueprint_table_part", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.teststar.assembly_machine", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.neighbor_changed.multiblocked.blueprint_table_part", handler: (event: Internal.NeighborChangedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.teststar.item_modular", handler: (event: Internal.PartAddedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.teststar.air_collector", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.teststar.melting_crucible", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.multiblocked.controller_tester", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.multiblocked.blueprint_table", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.teststar.air_collector", handler: (event: Internal.UpdateRendererEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_tick.multiblocked.blueprint_table", handler: (event: Internal.UpdateTickEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.multiblocked.controller_tester", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.trait_ui.teststar.simple_washing_machine", handler: (event: Internal.InitTraitUIEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.create_ui.teststar.melting_crucible", handler: (event: Internal.CreateUIEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.blueprint_table", handler: (event: Internal.UpdateRendererEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.teststar.crafting_table_old", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.custom_shape.teststar.simple_substance_converter", handler: (event: Internal.CustomShapeEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.custom_shape.teststar.air_collector", handler: (event: Internal.CustomShapeEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.teststar.simple_substance_converter", handler: (event: Internal.UpdateFormedEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.read_initial_data.teststar.melting_crucible", handler: (event: Internal.ReadInitialDataEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.remove.recipes", handler: (event: Internal.RemoveJEIRecipesEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.right_click.teststar.simple_substance_converter", handler: (event: Internal.RightClickEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.teststar.crafting_table_old", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.part_added.teststar.energy_modular", handler: (event: Internal.PartAddedEvent) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.type_registry", handler: (event: Internal.RecipeTypeRegistryEventJS) => void);
/**
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "sound.registry", handler: (event: Internal.SoundRegistryEventJS) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "recipes.compostables", handler: (event: Internal.CompostablesRecipeEventJS) => void);
/**
* 
* The event fires on: **startup**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "item.registry.armor_tiers", handler: (event: Internal.ItemArmorTierEventJS) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.generate_assets", handler: (event: Internal.ClientGenerateAssetsEventJS) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.teststar.air_collector", handler: (event: Internal.UpdateFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.multiblocked.blueprint_table", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.teststar.simple_substance_converter", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.dynamic_pattern.teststar.air_collector", handler: (event: Internal.DynamicPatternEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.information", handler: (event: Internal.InformationJEIEventJS) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.multiblocked.blueprint_table_part", handler: (event: Internal.UpdateRendererEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "client.painter_updated", handler: (event: Internal.PainterUpdatedEventJS) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.teststar.melting_crucible", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.add.fluids", handler: (event: Internal.AddJEIEventJS<any>) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.custom_shape.teststar.melting_crucible", handler: (event: Internal.CustomShapeEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_renderer.teststar.melting_crucible", handler: (event: Internal.UpdateRendererEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.right_click.teststar.melting_crucible", handler: (event: Internal.RightClickEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.teststar.simple_washing_machine", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **startup**, **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "jei.hide.custom", handler: (event: Internal.HideCustomJEIEventJS) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.custom_shape.teststar.simple_washing_machine", handler: (event: Internal.CustomShapeEvent) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "command.run", handler: (event: Internal.CommandEventJS) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.right_click.teststar.simple_washing_machine", handler: (event: Internal.RightClickEvent) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "entity.check_spawn", handler: (event: Internal.CheckLivingEntitySpawnEventJS) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.teststar.simple_washing_machine", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
* 
* The event fires on: **client**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.recipe_ui.ass", handler: (event: Internal.RecipeUIEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.update_formed.teststar.melting_crucible", handler: (event: Internal.UpdateFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.structure_formed.teststar.magic_furnace", handler: (event: Internal.StructureFormedEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is cancellable.
*/
declare function onEvent(name: "mbd.right_click.multiblocked.blueprint_table", handler: (event: Internal.RightClickEvent) => void);
/**
* 
* The event fires on: **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "mbd.write_initial_data.multiblocked.pedestal", handler: (event: Internal.WriteInitialDataEvent) => void);
/**
* 
* The event fires on: **startup**, **server**.
* 
* The event is **not** cancellable.
*/
declare function onEvent(name: "player.chest.closed", handler: (event: Internal.ChestEventJS) => void);
declare function onEvent(name: `mbd.recipe_ui.${string}`, handler: (event: Internal.RecipeUIEvent) => void);
declare function onEvent(name: `mbd.create_ui.${string}`, handler: (event: Internal.CreateUIEvent) => void);
declare function onEvent(name: `mbd.dynamic_pattern.${string}`, handler: (event: Internal.DynamicPatternEvent) => void);
declare function onEvent(name: `mbd.update_renderer.${string}`, handler: (event: Internal.UpdateRendererEvent) => void);
declare function onEvent(name: `mbd.status_changed.${string}`, handler: (event: Internal.StatusChangedEvent) => void);
declare function onEvent(name: `mbd.right_click.${string}`, handler: (event: Internal.RightClickEvent) => void);
declare function onEvent(name: `mbd.custom_shape.${string}`, handler: (event: Internal.CustomShapeEvent) => void);
declare function onEvent(name: `mbd.structure_formed.${string}`, handler: (event: Internal.StructureFormedEvent) => void);
declare function onEvent(name: `mbd.write_initial_data.${string}`, handler: (event: Internal.WriteInitialDataEvent) => void);
declare function onEvent(name: `mbd.read_initial_data.${string}`, handler: (event: Internal.ReadInitialDataEvent) => void);
declare function onEvent(name: `mbd.trait_ui.${string}`, handler: (event: Internal.InitTraitUIEvent) => void);
declare function onEvent(name: `mbd.part_added.${string}`, handler: (event: Internal.PartAddedEvent) => void);
declare function onEvent(name: `mbd.update_tick.${string}`, handler: (event: Internal.UpdateTickEvent) => void);
declare function onEvent(name: `mbd.update_formed.${string}`, handler: (event: Internal.UpdateFormedEvent) => void);
declare function onEvent(name: `mbd.neighbor_changed.${string}`, handler: (event: Internal.NeighborChangedEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.RenderWidgetEvent$Post", handler: (event: Internal.RenderWidgetEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.ProjectileImpactEvent", handler: (event: Internal.ProjectileImpactEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$LoadFromFile", handler: (event: Internal.PlayerEvent$LoadFromFile) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogColors", handler: (event: Internal.EntityViewRenderEvent$FogColors) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.RenderWidgetBackgroundEvent$Pre", handler: (event: Internal.RenderWidgetBackgroundEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent", handler: (event: Internal.FurnaceFuelBurnTimeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$UnWatch", handler: (event: Internal.ChunkWatchEvent$UnWatch) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: Internal.VillagerTradesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck", handler: (event: Internal.PlayerEvent$HarvestCheck) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: Internal.AddReloadListenerEvent) => void);
declare function onForgeEvent(name: "mekanism.common.content.network.FluidNetwork$FluidTransferEvent", handler: (event: Internal.FluidNetwork$FluidTransferEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StopTracking", handler: (event: Internal.PlayerEvent$StopTracking) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseInputEvent", handler: (event: Internal.InputEvent$MouseInputEvent) => void);
declare function onForgeEvent(name: "io.github.noeppi_noeppi.libx.event.ConfigLoadedEvent", handler: (event: Internal.ConfigLoadedEvent) => void);
declare function onForgeEvent(name: "io.github.noeppi_noeppi.libx.event.RandomTickEvent$Block", handler: (event: Internal.RandomTickEvent$Block) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$DrawScreenEvent$Post", handler: (event: Internal.ScreenEvent$DrawScreenEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerChangeGameTypeEvent", handler: (event: Internal.ClientPlayerChangeGameTypeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$CameraSetup", handler: (event: Internal.EntityViewRenderEvent$CameraSetup) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: Internal.LivingDamageEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseScrollEvent", handler: (event: Internal.InputEvent$MouseScrollEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.menu.button.ButtonCachedEvent", handler: (event: Internal.ButtonCachedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderHandEvent", handler: (event: Internal.RenderHandEvent) => void);
declare function onForgeEvent(name: "com.blakebr0.cucumber.event.RegisterRecipesEvent", handler: (event: Internal.RegisterRecipesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: Internal.RegisterCommandsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangeGameModeEvent", handler: (event: Internal.PlayerEvent$PlayerChangeGameModeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedInEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$AllowDespawn", handler: (event: Internal.LivingSpawnEvent$AllowDespawn) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.SoundLoadEvent", handler: (event: Internal.SoundLoadEvent) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.HUDOverlayEvent$Exhaustion", handler: (event: Internal.HUDOverlayEvent$Exhaustion) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.modifiers.ModifierManager$ModifiersLoadedEvent", handler: (event: Internal.ModifierManager$ModifiersLoadedEvent) => void);
declare function onForgeEvent(name: "com.simibubi.create.api.event.TileEntityBehaviourEvent", handler: (event: Internal.TileEntityBehaviourEvent<any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Pre", handler: (event: Internal.RenderLivingEvent$Pre<any, any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$Watch", handler: (event: Internal.ChunkWatchEvent$Watch) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerStartedEvent", handler: (event: Internal.ServerStartedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderNameplateEvent", handler: (event: Internal.RenderNameplateEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseClickedEvent$Pre", handler: (event: Internal.ScreenEvent$MouseClickedEvent$Pre) => void);
declare function onForgeEvent(name: "com.supermartijn642.core.render.RenderWorldEvent", handler: (event: Internal.RenderWorldEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityJoinWorldEvent", handler: (event: Internal.EntityJoinWorldEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$RenderFogEvent", handler: (event: Internal.EntityViewRenderEvent$RenderFogEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TagsUpdatedEvent", handler: (event: Internal.TagsUpdatedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseReleasedEvent$Post", handler: (event: Internal.ScreenEvent$MouseReleasedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: Internal.ItemTooltipEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingGetProjectileEvent", handler: (event: Internal.LivingGetProjectileEvent) => void);
declare function onForgeEvent(name: "org.zeith.hammerlib.event.client.ClientLoadedInEvent", handler: (event: Internal.ClientLoadedInEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityLeaveWorldEvent", handler: (event: Internal.EntityLeaveWorldEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyReleasedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardKeyReleasedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$WorldTickEvent", handler: (event: Internal.TickEvent$WorldTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RegisterClientCommandsEvent", handler: (event: Internal.RegisterClientCommandsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.DifficultyChangeEvent", handler: (event: Internal.DifficultyChangeEvent) => void);
declare function onForgeEvent(name: "net.blay09.mods.balm.api.event.server.ServerReloadFinishedEvent", handler: (event: Internal.ServerReloadFinishedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.DrawSelectionEvent$HighlightBlock", handler: (event: Internal.DrawSelectionEvent$HighlightBlock) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock", handler: (event: Internal.PlayerInteractEvent$LeftClickBlock) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$PostLayer", handler: (event: Internal.RenderGameOverlayEvent$PostLayer) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$ClickInputEvent", handler: (event: Internal.InputEvent$ClickInputEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Load", handler: (event: Internal.WorldEvent$Load) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.item.ItemTossEvent", handler: (event: Internal.ItemTossEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ContainerScreenEvent$DrawBackground", handler: (event: Internal.ContainerScreenEvent$DrawBackground) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$EntityMultiPlaceEvent", handler: (event: Internal.BlockEvent$EntityMultiPlaceEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: Internal.ClientChatEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.RenderWidgetBackgroundEvent$Post", handler: (event: Internal.RenderWidgetBackgroundEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Post", handler: (event: Internal.RenderGameOverlayEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: Internal.OnDatapackSyncEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.PlaySoundAtEntityEvent", handler: (event: Internal.PlaySoundAtEntityEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$CheckSpawn", handler: (event: Internal.LivingSpawnEvent$CheckSpawn) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseClickedEvent$Post", handler: (event: Internal.ScreenEvent$MouseClickedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerAboutToStartEvent", handler: (event: Internal.ServerAboutToStartEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.PlayWidgetClickSoundEvent$Pre", handler: (event: Internal.PlayWidgetClickSoundEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EntityConstructing", handler: (event: Internal.EntityEvent$EntityConstructing) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenOpenEvent", handler: (event: Internal.ScreenOpenEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderArmEvent", handler: (event: Internal.RenderArmEvent) => void);
declare function onForgeEvent(name: "net.blay09.mods.balm.api.event.server.ServerReloadedEvent", handler: (event: Internal.ServerReloadedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLevelLastEvent", handler: (event: Internal.RenderLevelLastEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogDensity", handler: (event: Internal.EntityViewRenderEvent$FogDensity) => void);
declare function onForgeEvent(name: "vazkii.botania.api.mana.ManaItemsEvent", handler: (event: Internal.ManaItemsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: Internal.WandererTradesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseDragEvent$Post", handler: (event: Internal.ScreenEvent$MouseDragEvent$Post) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.PlayWidgetClickSoundEvent$Post", handler: (event: Internal.PlayWidgetClickSoundEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: Internal.LivingDeathEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: Internal.TickEvent$RenderTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$Size", handler: (event: Internal.EntityEvent$Size) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedInEvent", handler: (event: Internal.ClientPlayerNetworkEvent$LoggedInEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close", handler: (event: Internal.PlayerContainerEvent$Close) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.FOVModifierEvent", handler: (event: Internal.FOVModifierEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: Internal.LivingDropsEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderPlayerEvent$Post", handler: (event: Internal.RenderPlayerEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Load", handler: (event: Internal.ChunkEvent$Load) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$BreakEvent", handler: (event: Internal.BlockEvent$BreakEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Load", handler: (event: Internal.ChunkDataEvent$Load) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: Internal.RecipesUpdatedEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.SoftMenuReloadEvent", handler: (event: Internal.SoftMenuReloadEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BiomeLoadingEvent", handler: (event: Internal.BiomeLoadingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.RegistryEvent$IdMappingEvent", handler: (event: Internal.RegistryEvent$IdMappingEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.item.ItemExpireEvent", handler: (event: Internal.ItemExpireEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$EntityPlaceEvent", handler: (event: Internal.BlockEvent$EntityPlaceEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.MovementInputUpdateEvent", handler: (event: Internal.MovementInputUpdateEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock", handler: (event: Internal.PlayerInteractEvent$RightClickBlock) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseReleasedEvent$Pre", handler: (event: Internal.ScreenEvent$MouseReleasedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseDragEvent$Pre", handler: (event: Internal.ScreenEvent$MouseDragEvent$Pre) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.BeginFrameEvent", handler: (event: Internal.BeginFrameEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Open", handler: (event: Internal.PlayerContainerEvent$Open) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: Internal.LivingAttackEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Chat", handler: (event: Internal.RenderGameOverlayEvent$Chat) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedOutEvent", handler: (event: Internal.ClientPlayerNetworkEvent$LoggedOutEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerNegotiationEvent", handler: (event: Internal.PlayerNegotiationEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLevelStageEvent", handler: (event: Internal.RenderLevelStageEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$DrawScreenEvent$Pre", handler: (event: Internal.ScreenEvent$DrawScreenEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardCharTypedEvent$Post", handler: (event: Internal.ScreenEvent$KeyboardCharTypedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyPressedEvent$Post", handler: (event: Internal.ScreenEvent$KeyboardKeyPressedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes", handler: (event: Internal.PermissionGatherEvent$Nodes) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Unload", handler: (event: Internal.ChunkEvent$Unload) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.RenderLayerEvent", handler: (event: Internal.RenderLayerEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: Internal.TickEvent$PlayerTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Handler", handler: (event: Internal.PermissionGatherEvent$Handler) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$TabListNameFormat", handler: (event: Internal.PlayerEvent$TabListNameFormat) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: Internal.LootingLevelEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerFlyableFallEvent", handler: (event: Internal.PlayerFlyableFallEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent", handler: (event: Internal.LivingEvent$LivingJumpEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.RenderGuiListBackgroundEvent$Pre", handler: (event: Internal.RenderGuiListBackgroundEvent$Pre) => void);
declare function onForgeEvent(name: "dev.ftb.mods.ftblibrary.sidebar.SidebarButtonCreatedEvent", handler: (event: Internal.SidebarButtonCreatedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: Internal.PlayerEvent$StartTracking) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$KeyInputEvent", handler: (event: Internal.InputEvent$KeyInputEvent) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.MaterialsLoadedEvent", handler: (event: Internal.MaterialsLoadedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: Internal.LootTableLoadEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$PreLayer", handler: (event: Internal.RenderGameOverlayEvent$PreLayer) => void);
declare function onForgeEvent(name: "org.zeith.hammerlib.event.player.PlayerLoadedInEvent", handler: (event: Internal.PlayerLoadedInEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardCharTypedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardCharTypedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$NameFormat", handler: (event: Internal.PlayerEvent$NameFormat) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FieldOfView", handler: (event: Internal.EntityViewRenderEvent$FieldOfView) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseScrollEvent$Pre", handler: (event: Internal.ScreenEvent$MouseScrollEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatReceivedEvent", handler: (event: Internal.ClientChatReceivedEvent) => void);
declare function onForgeEvent(name: "moze_intel.projecte.api.event.EMCRemapEvent", handler: (event: Internal.EMCRemapEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$InitScreenEvent$Pre", handler: (event: Internal.ScreenEvent$InitScreenEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Pre", handler: (event: Internal.RenderGameOverlayEvent$Pre) => void);
declare function onForgeEvent(name: "vazkii.botania.api.mana.ManaNetworkEvent", handler: (event: Internal.ManaNetworkEvent) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.HUDOverlayEvent$Saturation", handler: (event: Internal.HUDOverlayEvent$Saturation) => void);
declare function onForgeEvent(name: "me.desht.pneumaticcraft.api.heat.HeatRegistrationEvent", handler: (event: Internal.HeatRegistrationEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.RenderGuiListBackgroundEvent$Post", handler: (event: Internal.RenderGuiListBackgroundEvent$Post) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.RenderWidgetEvent$Pre", handler: (event: Internal.RenderWidgetEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: Internal.LivingEquipmentChangeEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: Internal.TickEvent$ClientTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Save", handler: (event: Internal.WorldEvent$Save) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundEvent", handler: (event: Internal.PlaySoundEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.GuiInitCompletedEvent", handler: (event: Internal.GuiInitCompletedEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerStartingEvent", handler: (event: Internal.ServerStartingEvent) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.ReloadRenderersEvent", handler: (event: Internal.ReloadRenderersEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$RawMouseEvent", handler: (event: Internal.InputEvent$RawMouseEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$Pre", handler: (event: Internal.RenderTooltipEvent$Pre) => void);
declare function onForgeEvent(name: "mekanism.common.content.network.EnergyNetwork$EnergyTransferEvent", handler: (event: Internal.EnergyNetwork$EnergyTransferEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.RenderWidgetLabelEvent$Post", handler: (event: Internal.RenderWidgetLabelEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.VanillaGameEvent", handler: (event: Internal.VanillaGameEvent) => void);
declare function onForgeEvent(name: "de.keksuccino.fancymenu.events.RenderWidgetLabelEvent$Pre", handler: (event: Internal.RenderWidgetLabelEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.CommandEvent", handler: (event: Internal.CommandEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$BackgroundDrawnEvent", handler: (event: Internal.ScreenEvent$BackgroundDrawnEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ContainerScreenEvent$DrawForeground", handler: (event: Internal.ContainerScreenEvent$DrawForeground) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Post", handler: (event: Internal.RenderLivingEvent$Post<any, any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: Internal.TickEvent$ServerTickEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderPlayerEvent$Pre", handler: (event: Internal.RenderPlayerEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Text", handler: (event: Internal.RenderGameOverlayEvent$Text) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyReleasedEvent$Post", handler: (event: Internal.ScreenEvent$KeyboardKeyReleasedEvent$Post) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", handler: (event: Internal.PlayerEvent$BreakSpeed) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EnteringSection", handler: (event: Internal.EntityEvent$EnteringSection) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AttachCapabilitiesEvent", handler: (event: Internal.AttachCapabilitiesEvent<any>) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.ItemAttributeModifierEvent", handler: (event: Internal.ItemAttributeModifierEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents", handler: (event: Internal.RenderTooltipEvent$GatherComponents) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyPressedEvent$Pre", handler: (event: Internal.ScreenEvent$KeyboardKeyPressedEvent$Pre) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingHurtEvent", handler: (event: Internal.LivingHurtEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundSourceEvent", handler: (event: Internal.PlaySoundSourceEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionRemoveEvent", handler: (event: Internal.PotionEvent$PotionRemoveEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$SaveToFile", handler: (event: Internal.PlayerEvent$SaveToFile) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$NeighborNotifyEvent", handler: (event: Internal.BlockEvent$NeighborNotifyEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$InitScreenEvent$Post", handler: (event: Internal.ScreenEvent$InitScreenEvent$Post) => void);
declare function onForgeEvent(name: "net.blay09.mods.waystones.api.KnownWaystonesEvent", handler: (event: Internal.KnownWaystonesEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingUpdateEvent", handler: (event: Internal.LivingEvent$LivingUpdateEvent) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Save", handler: (event: Internal.ChunkDataEvent$Save) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.ToolEquipmentChangeEvent", handler: (event: Internal.ToolEquipmentChangeEvent) => void);
declare function onEvent(name: "minecraft.sound_event.registry", handler: (event: Registry.Sound_event) => void);
declare function onEvent(name: "sound_event.registry", handler: (event: Registry.Sound_event) => void);
declare function onEvent(name: "minecraft.fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "minecraft.block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "minecraft.item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "minecraft.enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "minecraft.mob_effect.registry", handler: (event: Registry.Mob_effect) => void);
declare function onEvent(name: "mob_effect.registry", handler: (event: Registry.Mob_effect) => void);
declare function onEvent(name: "minecraft.entity_type.registry", handler: (event: Registry.Entity_type) => void);
declare function onEvent(name: "entity_type.registry", handler: (event: Registry.Entity_type) => void);
declare function onEvent(name: "minecraft.block_entity_type.registry", handler: (event: Registry.Block_entity_type) => void);
declare function onEvent(name: "block_entity_type.registry", handler: (event: Registry.Block_entity_type) => void);
declare function onEvent(name: "minecraft.potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "minecraft.particle_type.registry", handler: (event: Registry.Particle_type) => void);
declare function onEvent(name: "particle_type.registry", handler: (event: Registry.Particle_type) => void);
declare function onEvent(name: "minecraft.motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "minecraft.custom_stat.registry", handler: (event: Registry.Custom_stat) => void);
declare function onEvent(name: "custom_stat.registry", handler: (event: Registry.Custom_stat) => void);
declare function onEvent(name: "minecraft.point_of_interest_type.registry", handler: (event: Registry.Point_of_interest_type) => void);
declare function onEvent(name: "point_of_interest_type.registry", handler: (event: Registry.Point_of_interest_type) => void);
declare function onEvent(name: "minecraft.villager_type.registry", handler: (event: Registry.Villager_type) => void);
declare function onEvent(name: "villager_type.registry", handler: (event: Registry.Villager_type) => void);
declare function onEvent(name: "minecraft.villager_profession.registry", handler: (event: Registry.Villager_profession) => void);
declare function onEvent(name: "villager_profession.registry", handler: (event: Registry.Villager_profession) => void);
declare function onEvent(name: "mekanism.gas.registry", handler: (event: Registry.Gas) => void);
declare function onEvent(name: "mekanism.infuse_type.registry", handler: (event: Registry.Infuse_type) => void);
declare function onEvent(name: "mekanism.pigment.registry", handler: (event: Registry.Pigment) => void);
declare function onEvent(name: "mekanism.slurry.registry", handler: (event: Registry.Slurry) => void);
