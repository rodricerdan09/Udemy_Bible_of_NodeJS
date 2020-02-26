//Decorators: Un decorador es una funcion que ejecuta una logica en una clase 
//o en una propiedad o en otra funcion

function SelfDriving(constructorFunctions: Function){
    constructorFunctions.prototype.selfDriving = true;
}

function Wheels(numberOfWheels: number){
    return function(constructor: Function){
        constructor.prototype.wheels = numberOfWheels;
    }
}

@SelfDriving
@Wheels(4)
class Car {
    private brand: string;
    constructor(brand: string){
        this.brand = brand;
    }
}

const nissan: Car = new Car("Nissan");
console.log(nissan.selfDriving);
console.log(nissan.wheels);