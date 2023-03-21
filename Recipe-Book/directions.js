export default class DirectonsOfRecipe {
    constructor(ingredientsOfRecipe = [], howToDo, cookingTime) {
        this.ingredientsOfRecipe = ingredientsOfRecipe;
        this.howToDo = howToDo;
        this.cookingTime = cookingTime;
    }

    addIngredients(ingredients) {
        this.ingredientsOfRecipe.push(ingredients)
        console.log(`The ingredient ${ingredients} was add`)
    }

    removeIngredintes(item) {
       this.ingredientsOfRecipe.splice(this.ingredientsOfRecipe.indexOf(item),1)
       console.log(`The ingredient ${item} was removed`)
    }
}