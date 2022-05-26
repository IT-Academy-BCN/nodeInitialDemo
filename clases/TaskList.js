require('dotenv').config();

const { DatabaseJson } = require("../db/database-json");
const { DatabaseMongo } = require("../db/database-mongo");


module.exports = class TaskList {
    constructor() {

    if(typeof TaskList.instance === "object") {
        return TaskList.instance;
    }

        if (process.env.DB === 'mongo') {
            this.bd = new DatabaseMongo();
        } else {
            // Default database is json
            this.bd = new DatabaseJson();
        }

        TaskList.instance = this;
        return this;
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
