import RecipeBook from "./recipe-book.js";
import RecipeName from "./recipe-list.js";
import DirectonsOfRecipe from "./directions.js";
 
//Recipe Book
let brazilianFood = new RecipeBook("Brazilian Food", "Brazil", "Meats");
let italianFood = new RecipeBook("Tastes of Italy", "Italy", "Pastas");

//Recipe List 
let brazilianBBQ = new RecipeName("Picanha", "Meat", "Lunch");
let italianlasagna = new RecipeName("Lasagna", "Pasta", ["Lunch", "Dinner"])

//Ingredients + How To Do
let picanhaRecipe = new DirectonsOfRecipe (["Picanha", "Salt", "Sauce", "Garlic", "Butter"],'light the charcoal and let the meat cook for 15 min each side','30 minutes')
let lasagnaRecipe = new DirectonsOfRecipe(["Pasta", "Red Sauce", "Onion", "Ground Beaf"], "Put all ingredients inside in glass baking dish", "45 minutes")

//Add or remove ingredients from DirectionsOfRecipe
picanhaRecipe.addIngredients('Onion')
picanhaRecipe.removeIngredintes('Sauce')

//Add or remove book

italianFood.addRecipeBook(italianFood)

//createNewRecipe.

//console.log(brazilianFood)
//console.log(brazilianBBQ)
//console.log(picanhaRecipe)
console.log(italianFood)