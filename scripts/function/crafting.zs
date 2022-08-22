import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;

public function removeAndShaped(out as IItemStack, shaped as IIngredient[][]) as void {
    craftingTable.remove(out);
    craftingTable.addShaped(out.descriptionId, out, shaped); 
}

public function readdShaped(out as IItemStack, shaped as IIngredient[][]) as void {
    craftingTable.addShaped(out.descriptionId, out, shaped); 
}