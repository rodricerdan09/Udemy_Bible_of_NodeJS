const express = require("express");
const server = express();

const fs = require("fs");
const home = fs.readFileSync("./home.html");
const about = fs.readFileSync("./about.html");

server.get("/", (req, res) => {
  res.write(home);
});
server.get("/about", (req, res) => {
  res.write(about);
});

server.listen(8000, () => {
  console.log("Server is running on port " + 8000);
});

//  HTTPS Methods

//GET -> Lectura
//POST -> Crear un nuevo recurso
//PUT -> Reemplazar un recurso existente de forma completa
//PATCH -> Actualizar una propiedad especifica de un recurso existente
//DELETE -> Remover un recurso
