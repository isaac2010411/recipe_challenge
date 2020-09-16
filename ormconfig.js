const path = require("path");
  

module.exports = {
    "type": process.env.LOCAL_DB_TYPE,
    "host": process.env.LOCAL_DB_HOST,
    "port": process.env.LOCAL_DB_PORT,
    "username": process.env.LOCAL_DB_USERNAME,
    "password": process.env.LOCAL_DB_PASSWORD,
    "database": process.env.LOCAL_DB_DATABASE,
      //cambiar pat para cuando se hace el build sino no reconoce entidades
    "entities":[
      path.join(__dirname , "./dist/entities/**/*.js")
      ],
    "synchronize":true
 }