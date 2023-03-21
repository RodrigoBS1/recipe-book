export default class RecipeBook {
    constructor(bookName, foodRegion, kindOfFood) {
        this.bookName = bookName;
        this.foodRegion = foodRegion;
        this.kindOfFood = kindOfFood;
    }

    addRecipeBook (book) {
        this.bookName.push(book)
    }
}