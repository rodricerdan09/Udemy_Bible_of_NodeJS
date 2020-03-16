const {Router} = require('express');

module.exports = ({HomeController}) => {
    const router = Router();

    router.get('/', HomeController.index);

    return router;
}
/**
 * router.http_method('/endpoint', Controller quien resolvera la logica solicitada por el endpoint).a
 * 
 * Con HomeController.index lo que logramos es mantener el scope de express y gracias al metodo bind() 
 * se va a mantener el scope de HomeController y por lo tanto vamos a poder acceder a nuestros servicios
 */