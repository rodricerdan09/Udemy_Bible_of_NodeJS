const express = require("express");

let _express = null;
let _config = null;

class Server {
  constructor({ config, router }) {
    _config = config;
    _express = express().use(router);
  }

  start() {
    //retorna una promesa encargada de inicializar nuestro server.
    return new Promise(resolve => {
      _express.listen(5000, () => {
        console.log(
          `${_config.APPLICATION_NAME} API running on port ${5000}`
        );
      });
      resolve();
    });
  }
}

module.exports = Server;
