require('dotenv').config();
const { Sequelize } = require("sequelize");

const { Database } = require('./Database');

class DatabaseMysql extends Database {

    async initDb() {
        const { MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_PORT } = process.env;
        const db = new Sequelize(MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASS, {
        host: MYSQL_HOST,
        port: MYSQL_PORT, // por defecto 3306 
        dialect: 'mysql', 
        logging: false    // comentar esta linea si necesitas detalle de las consultas
    });

    db.sync();
    }
    
    constructor() {
        super();
        this.initDb();

        //TODO: MODELOS¿?
    }

    async createUser(user){}
    async getUsers(){}
    async createTask(){}
    async updateTaskTitle(){}
    async updateTaskStatus(){}
    async deleteTask(){}
    async getTask(){}
    async getTasks(){}
    
}

module.exports = { DatabaseMongo }