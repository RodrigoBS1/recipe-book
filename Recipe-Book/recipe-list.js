export default class RecipeName {
    constructor(recipeName, categoryOfRecipe, recipeOccasion = []){
        this.recipeName = recipeName;
        this.categoryOfRecipe = categoryOfRecipe;
        this.recipeOccasion = recipeOccasion;
    }

   addRecipe(recipe){
        this.recipeName.push(recipe)
        console.log(`The recipe ${recipe} was add!`)
    }
}
