require('dotenv').config();

const { DatabaseJson } = require("../db/database-json");
const { DatabaseMongo } = require("../db/database-mongo");
const { DatabaseMysql } = require("../db/database-mysql");


module.exports = class TaskList {
    constructor() {

        if(typeof TaskList.instance === "object") {
            return TaskList.instance;
        }

        if (process.env.DB === 'mongo') {
            this.bd = new DatabaseMongo();
        } else if (process.env.DB === 'sql'){
            this.bd = new DatabaseMysql();
        } else {
            this.bd = new DatabaseJson(); // Default database is json
        }

        TaskList.instance = this;
        return this;
    }

    async initTaskListDb() {
        if (process.env.DB === 'sql') {
            await this.bd.initDb();
        }
    }

    async getUsers() {
        return await this.bd.getUsers();
    }

    async createUser(user) {
        await this.bd.createUser(user);
    }

    async createTask(title, createdBy){
        await this.bd.createTask(title, createdBy);
    }

    async updateTaskTitle(id, newTitle){
        await this.bd.updateTaskTitle(id, newTitle);
    }

    async updateTaskStatus(id) {
        console.log('here')
        await this.bd.updateTaskStatus(id);
    }

    async deleteTask( id ){
        await this.bd.deleteTask(id);
    }

    async getTask(id){
        return await this.bd.getTask(id);
    }

    async getTasks() {
        return await this.bd.getTasks();
    }
}
