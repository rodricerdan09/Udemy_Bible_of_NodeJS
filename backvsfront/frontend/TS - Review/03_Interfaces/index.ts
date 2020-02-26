//Interfaces
//Dentro de la interface defino las propiedades y los metodos
//Una interface es como un objeto donde cada propiedad lleva su tipo de dato sin inicializar.

interface IAnimal {
    name:string;
    color:string;
}

const dog: IAnimal = {
    name: "Snoopy",
    color: "White"
}

interface OnInit{
    ngOnInit(): void //esta propiedad es pura de Angular
}

class MyComponent implements OnInit {
    ngOnInit(): void {
        console.log("Interface ngOnInit implemented.");
    }

}