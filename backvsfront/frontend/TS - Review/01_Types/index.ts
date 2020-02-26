//Types
let framework: string = "Angular";
let isProduction: boolean = true;
const PORT: number = 3000;
const styles: Array<string> = ["./css/style.css"];

const sayHello: Function = (name: string): string => `Hello ${name}`
const value: string = sayHello("Rodri");
console.log(value);

//Para inicializar un proyecto TS utilizamos el comando tsc --init
//Se debe ejecutar el comando tsc para que compile y cree el archivo .js
//Debemos utilizar para nuestro programa el archivo js con el comando node