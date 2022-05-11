const { DatabaseJson } = require("../db/database-json");

module.exports = class TaskList {
    constructor() {
        // TODO: Lógica seleccionar BD json/mysql/mongo
       this.bd = new DatabaseJson();
    }

    /*
    selectUser(){
        
    }*/

    getUsers(){

    }

    createUser(){
        
    }

    createTask(){
        
    }

    updateTask(){
        
    }

    deleteTask(){

    }

    getTask(){
        
    }

    getTasks(){
        return this.bd.getTasks();
    }

}
