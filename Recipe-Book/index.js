import RecipeBook from "./recipe-book.js";
import RecipeName from "./recipe-list.js";
import DirectonsOfRecipe from "./directions.js";
 
//Recipe Book
let brazilianFood = new RecipeBook("Brazilian Food", "Brazil", "Meats");

//Recipe List 
let brazilianBBQ = new RecipeName("Picanha", "Meat", "Lunch")

//Ingredients + How To Do
let picanhaRecipe = new DirectonsOfRecipe (["Picanha", "Salt", "Sauce", "Garlic", "Butter"],'light the charcoal and let the meat cook for 15 min each side','30 minutes')

//Add and remove ingredients
picanhaRecipe.addIngredients('Onion')
picanhaRecipe.removeIngredintes('Sauce')

//createNewRecipe.

console.log(brazilianFood)
console.log(brazilianBBQ)
console.log(picanhaRecipe)