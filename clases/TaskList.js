const { DatabaseJson } = require("../db/database-json");

module.exports = class TaskList {
    constructor() {

       if(typeof TaskList.instance === "object") {
        return TaskList.instance;
        }

        // TODO: Lógica seleccionar BD json/mysql/mongo
        this.bd = new DatabaseJson();

        TaskList.instance = this;
        return this;
    }

    /*
    selectUser(){
        
    }*/

    getUsers() {
        return this.bd.getUsers();
    }

    createUser(user) {
        this.bd.createUser(user);
    }

    createTask(title, createdBy){
        this.bd.createTask(title, createdBy);
    }

    updateTaskTitle(id, newTitle){
        this.bd.updateTaskTitle(id, newTitle);
    }

    updateTaskStatus(id) {
        this.bd.updateTaskStatus(id);
    }

    deleteTask( id ){
        this.bd.deleteTask(id);
    }

    getTask(id){
        return this.bd.getTask(id);
    }

    getTasks(){
        return this.bd.getTasks();
    }

}
