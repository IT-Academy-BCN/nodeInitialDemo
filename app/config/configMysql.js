const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

const user = 'root';
const password = 'ITAcademy';

inicialitzar();

async function inicialitzar(){

    const connection = await mysql.createConnection({
        "host": "localhost",
        "port": 3306,
        user,
        password,
    });
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS devteams;`);
    console.log("Conectat a la base de dades de Mysql");
    // connect to db
    const sequelize = new Sequelize("devteams", user, password, {
        dialect: "mysql",
        logging: false //logging provienent de sequelize 
    });
}