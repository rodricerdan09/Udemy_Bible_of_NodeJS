"use strict";
//Types
var framework = "Angular";
var isProduction = true;
var PORT = 3000;
var styles = ["./css/style.css"];
var sayHello = function (name) { return "Hello " + name; };
var value = sayHello("Rodri");
console.log(value);
//Para inicializar un proyecto TS utilizamos el comando tsc --init
//Se debe ejecutar el comando tsc para que compile y cree el archivo .js
//Debemos utilizar para nuestro programa el archivo js con el comando node
