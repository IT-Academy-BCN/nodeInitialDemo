require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");

const { Database } = require('./Database');

class DatabaseMysql extends Database {

    async initDb() {
        // Conexión
        const { MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_PORT } = process.env;
        const db =  new Sequelize(MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASS, {
            host: MYSQL_HOST,
            port: MYSQL_PORT, // por defecto 3306 
            dialect: 'mysql', 
            logging: false    // comentar esta linea si necesitas detalle de las consultas
        });
        // Modelo Task
        this.Task = db.define('Task', {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            status:{
                type: DataTypes.STRING,
                defaultValue: 'TODO'
            },
            title:{
                type: DataTypes.STRING
            },
            createAt: {
                type: DataTypes.DATE,
            },
            startedAt: {
                type: DataTypes.DATE,
                defaultValue: null
            },
            finishedAt: {
                type: DataTypes.DATE,
                defaultValue: null
            },
            createdBy: {
                type: DataTypes.STRING
            }            
        });
        // Modelo User
        this.User = db.define('User', {
            name: {
                type: DataTypes.STRING
            }
        });        
        
        await db.sync();

    }
    
    constructor() {
        super();
        this.initDb();
    }

    async createUser(user){

        let result = false;

        try {
            const userExist = await this.User.findOne({where:{name:user}});
            if(!userExist) {
                let u = new this.User({name:user});
                await u.save();
                result = true;
            }
        } catch (err) {
            console.log(err.message);
        }

        return result;
    }

    async getUsers(){}
    async createTask(){}
    async updateTaskTitle(){}
    async updateTaskStatus(){}
    async deleteTask(){}
    async getTask(){}
    async getTasks(){}
    
}

module.exports = { DatabaseMongo }