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
            t.save();
        } catch (err) {
            console.log(err.message);
        }
    }

    async updateTaskStatus(id) {
        try {
            let newStatus = "";
            const t = await this.Task.findOne({where:{id}});
            if (t.status === "TODO") newStatus = "ONGOING"
            if (t.status === "ONGOING") newStatus = "DONE"
            
            if (newStatus !== "") {
                t.status = newStatus;
                t.save();
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
            return this.Task;
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