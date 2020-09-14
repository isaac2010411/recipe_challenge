const { createConnection } = require('typeorm');
const  path  = require('path');

export async function connect() {
  await createConnection({
    type: process.env.DB_TYPE || "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306 ,
    username: process.env.DB_USERNAME  || "root" ,
    password: process.env.DB_PASSWORD || "12345" ,
    database: process.env.DB_DATABASE || "recipeschallenge" ,
    entities: [ 
      path.join( __dirname , '../entity/**/**.ts')
    ],
    synchronize:true
  })
  console.log("db Conect")
}  