//Archivo encargado de inicializar nuestra aplicacion

const container = require("./src/startup/container");
const server = container.resolve("app");
const {MONGO_URI} = container.resolve("config");

const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

mongoose
  .connect("mongodb+srv://db_MongodbUdemy:pass.mongodb0@cluster0-igszn.azure.mongodb.net/shareyouridea?retryWrites=true&w=majority", { useNewUrlParser: true, useFindAndModify: false })
  .then(() => server.start())
  .catch(console.log);
