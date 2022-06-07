import { ConnectionOptions } from 'typeorm';
require('dotenv').config();
var connectionOption: ConnectionOptions = {
   type: "mysql",
   host: process.env.DB_HOST || "localhost",
   port: Number(process.env.DB_PORT) || 3306,
   username: process.env.DB_USER || "root",
   password: process.env.DB_PASSWORD ,
   database: process.env.DB_DATABASE || "mtatitradb",
   entities: [
    "src/entities/**/*.ts"
   ],
}

export const ormconfig = connectionOption;