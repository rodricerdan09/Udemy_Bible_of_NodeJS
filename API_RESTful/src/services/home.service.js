class HomeService {
    index(){
        return  {
            message: "Hello World!"
        }
    }
}

module.exports = HomeService // si no tuvieramos awilix deberiamos exportar como: new HomeService()
