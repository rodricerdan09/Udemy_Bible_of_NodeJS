let _homeService = null;

class HomeController {

    constructor({HomeService}){
        _homeService = HomeService;
    }

    index(req,res){
        return res.send(_homeService.index());
    }
}

module.exports = HomeController;

/**
 * La clase HomeController no va a necesitar nada ya que awilix le va a inyectar lo que ella necesite.
 * En esta clase declaramos un constructor el cual destructuramos y recibe un HomeService.
 * Al momento de servirnos un objeto del tipo HomeController, Awilix va a ver que tiene la dependencia HomeService y automaticamente se la va a inyectar.
 * Inicializamos la variable _homeService con la dependencia inyectada y no se utiliza this porque eso significaria que _homeService
 * seria una propiedad de la clase y eso esta mal porque el servicio no deberia ser compartido. De esta manera nos aseguramos que la variable sea privada
 * y solamente sea utilizada dentro de la clase HomeController.
 */