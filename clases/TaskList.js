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

    getUsers(){

    }

    createUser(){
        
    }

    createTask(){
        
    }

    updateTask(){
        
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
