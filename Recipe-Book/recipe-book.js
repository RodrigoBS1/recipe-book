export default class RecipeBook {
    constructor(bookName = [], foodRegion, kindOfFood) {
        this.bookName = bookName;
        this.foodRegion = foodRegion;
        this.kindOfFood = kindOfFood;
    }

    addRecipeBook (nameOfBook) {
        this.bookName.push(nameOfBook);
        console.log(`The recipe book ${nameOfBook} was succesfully added`);
    }
}