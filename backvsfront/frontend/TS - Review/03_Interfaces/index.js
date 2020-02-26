"use strict";
//Interfaces
//Dentro de la interface defino las propiedades y los metodos
//Una interface es como un objeto donde cada propiedad lleva su tipo de dato sin inicializar.
var dog = {
    name: "Snoopy",
    color: "White"
};
var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.ngOnInit = function () {
        console.log("Interface ngOnInit implemented.");
    };
    return MyComponent;
}());
