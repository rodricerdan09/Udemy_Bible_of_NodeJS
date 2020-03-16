//archivo principal de routes encargado de inyectar los middlewares y hacer las configuraciones de todas las rutas.

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors"); //esto nos ayuda a capturar en un middeleware las excepciones asincronas que producen las Promise.
const {ErrorMiddleware, NotFoundMiddleware} = require('../middlewares');

module.exports = ({ HomeRoutes }) => {
  const router = express.Router();
  const apiRoutes = express.Router();
  
  //default middlewares
  apiRoutes
    .use(express.json()) //esto nos permite convertir las peticiones de tipo post en un body que va a contener lo que sea que le enviemos en un json.
    .use(cors())
    .use(helmet())
    .use(compression());

    apiRoutes.use("/home", HomeRoutes);

    router.use("/v1/api", apiRoutes);//nos permite crear los prefijos para nuestros endpoints.

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    
    return router;
};
