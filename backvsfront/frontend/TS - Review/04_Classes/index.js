"use strict";
//Classes
//Patron Builder: Patron de diseño que nos permite inicializar objetos de una forma sencilla
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.tomate = false;
        this.cheese = "";
        this.eggs = false;
        this.otherIngredients = [""]; //Esto es igual a otherIngredients: string[]
    }
    Pizza.prototype.setCheese = function (cheese) {
        this.cheese = cheese;
        return this;
    };
    Pizza.prototype.setEggs = function () {
        this.eggs = true;
        return this;
    };
    Pizza.prototype.setOtherIngredients = function (ingredients) {
        this.otherIngredients = ingredients;
        return this;
    };
    Pizza.prototype.build = function () {
        return this;
    };
    return Pizza;
}());
var anchoasPizza = new Pizza();
anchoasPizza
    .setEggs()
    .setCheese("Mozzarella")
    .setOtherIngredients(["Anchoas"])
    .build();
console.log(anchoasPizza);
