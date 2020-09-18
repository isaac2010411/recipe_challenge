const path = require("path");
  

module.exports = {
    "type": process.env.DB_TYPE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
      //cambiar pat para cuando se hace el build sino no reconoce entidades
    "entities":[
      path.join(__dirname , "./dist/entities/**/*.js")
      ],
    "synchronize":true
 }