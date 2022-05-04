const fs = require('fs');
const { Database } = require('./database');

class DatabaseJson extends Database {

    constructor(){
        
        super();

        this.jsonDbFile = 'bd.json';
        this.jsonDb = this.loadData();        

        if(!this.jsonDb) {
            this.jsonDb = {
                nextTodoId: 1,
                todos:[],
                users:[]
            }
        }
    }

    createUser (user) {
        // user exists?
        if (this.jsonDb.users.findIndex((u) => u === user) === -1) {
            this.jsonDb.users.push(user);
            this.saveData();
            return true;
        } else {
            return false;
        }
        
    }

    getUsers () {
        return this.jsonDb.users;
    }

    createTodo ({title, user}) { // lo suyo sería recibir por parámetro objeto TODO
        const todo = {
            id: this.jsonDb.nextTodoId++,
            title,
            horaCreacion: new Date(),
            user
        };
        this.jsonDb.todos.push(todo);
        this.saveData();
    }

    updateTodo ( id ) {
        // TODO: updateTodo
        this.saveData();
    }

    deleteTodo ( id ) {
        // TODO: deleteTodo
        this.saveData();
    }

    getTodo( id ) {
        // TODO: getTodo
    }

    getTodos () {
        return this.jsonDb.todos;
    }




    saveData() {
        try {
            fs.writeFileSync(this.jsonDbFile, JSON.stringify(this.jsonDb));
        } catch (error) {
            console.log(error); // Al ser app de consola no se si se llegará a ver...
        }
        
    }

    loadData() {
        let result;
        try {
            if(fs.existsSync(this.jsonDbFile)) {
                result = JSON.parse(fs.readFileSync(this.jsonDbFile));  
                return result;
            } else {
                return;
            }
            
        } catch (error) {
            console.log( error );
            return;
        }      
    }    
}

module.exports = {
    DatabaseJson,
}