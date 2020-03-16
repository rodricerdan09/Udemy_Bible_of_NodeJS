//estas variables nos permiten inyectar un objeto como una clase, valor o funcion.
const {createContainer, asClass, asValue, asFunction} = require('awilix');

//config
const config = require('../config');
const app = require('.');

//services
const {HomeService} = require('../services');

//controllers
const {HomeController} = require('../controllers');

//routes
const {HomeRoutes} = require('../routes/index.routes');
const Routes = require('../routes')

const container = createContainer();

container
    .register({ //aqui se realiza la ocnfiguracion principal de la aplicacion.
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({ //aqui se configuran todos los servicios
        HomeService: asClass(HomeService).singleton()
    })
    .register({ //aqui se configuran todos los controladores
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({ //aqui se configuran todas las rutas
        HomeRoutes: asFunction(HomeRoutes).singleton()   
    })

module.exports = container;

 /** 
  * El metodo register() nos permite crear una nueva clase de inyeccion.
  * key_inyeccion: asClass(inyeccion).singleton()
  * singleton() nos asegura tener una sola instancia de esa clase, compartida entre las diferentes partes donde estemos usando dicha inyeccion.
  * 
  * El metodo bind() lo utilizamos porque Express a la hora de llamar un controlador el scope cambia y gracias a eso el scope se mantiene y podemos usar nuestro servicio.
  * 
  * Las rutas ya estan configuradas y listas para ser inyectadas en los constructores de las distintas funciones que lo requieran.
  */