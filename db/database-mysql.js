require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");

const mysql = require('mysql2/promise');

const { Database } = require('./Database');

class DatabaseMysql extends Database {

    constructor() {
        super();
    }

    async initDb() {

        const connection = await mysql.createConnection({ 
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS });
        
        await connection.connect();
        // We do not drop the database every init. The DB_NAME is unique to avoid colision
        // with other colleagues.
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
        console.log(`Database ${process.env.DB_NAME} (re)created`);
        await connection.end();

        // Conexión
        const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env;
        const db =  new Sequelize(DB_NAME, DB_USER, DB_PASS, {
            host: DB_HOST,
            port: DB_PORT, // por defecto 3306 
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
            /*createdAt: {  Sequelize lo crea por defecto
                type: DataTypes.DATE,
            },*/
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

    async createUser(user) {
        
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
        console.log(result);

        return result;
    }

    async getUsers() {
        let users = await this.User.findAll();
        let names = users.map(e => e.name);
        return names;
    }
    
    async createTask(title, createdBy) {
        try {
            let t = new this.Task({
                title, 
                status: 'TODO',
                createdBy,
                createdAt: new Date() //to ISOSTRING?
            });
            await t.save();
        } catch (err) {
            console.log(err.message);
        }
    }

    async updateTaskTitle(id, newTitle) {
        try {
            const t = await this.Task.findOne({where:{id}});
            t.title = newTitle;
            await t.save();
        } catch (err) {
            console.log(err.message);
        }
    }

    async updateTaskStatus(id) {
        try {
            const t = await this.Task.findOne({where:{id}});
            if (t.status === "TODO") {
                t.startedAt = new Date();
                t.status = "ONGOING"
                await t.save();
            } else if (t.status === "ONGOING") {
                t.finishedAt = new Date();
                t.status = "DONE";
                await t.save();
            } else {
                // NOTHING TO DO
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    
    async deleteTask(id) {
        try {
            await this.Task.destroy({where: {id}});
        } catch (err) {
            console.log(err.message);
        }
    }

    async getTask(id) {
        try {
            const t = await this.Task.findOne({where:{id}});
            return t;
        } catch (err) {
            console.log(err.message);
        }        
    }
    async getTasks() {
        try {
            const tasks = await this.Task.findAll();
            return tasks;
        } catch (err) {
            console.log(err.message);
        }
    }
    
}

module.exports = { DatabaseMysql }