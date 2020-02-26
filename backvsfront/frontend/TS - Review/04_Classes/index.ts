//Classes
//Patron Builder: Patron de diseño que nos permite inicializar objetos de una forma sencilla

class Pizza {
  public tomate: boolean = false;
  public cheese: string = "";
  public eggs: boolean = false;
  public otherIngredients: Array<string> = [""]; //Esto es igual a otherIngredients: string[]

  setCheese(cheese: string): Pizza {
    this.cheese = cheese;
    return this;
  }
  setEggs(): Pizza {
    this.eggs = true;
    return this;
  }
  setOtherIngredients(ingredients: string[]): Pizza {
    this.otherIngredients = ingredients;
    return this;
  }

  build() {
    return this;
  }
}

const anchoasPizza: Pizza = new Pizza();
anchoasPizza
  .setEggs()
  .setCheese("Mozzarella")
  .setOtherIngredients(["Anchoas"])
  .build();

console.log(anchoasPizza);
