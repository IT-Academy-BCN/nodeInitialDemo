require('dotenv').config();

//Configuración MySQL

const mysqlConfig = {
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
};

module.exports = { 
    mysqlConfig };