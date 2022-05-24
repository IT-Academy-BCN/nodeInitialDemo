const fs = require('fs');
const { exit } = require('process');
const { Database } = require('./database');
const Task = require('../clases/Task');

class DatabaseJson extends Database {

    constructor(){
        
        super();

        this.jsonDbFile = __dirname + '/bd.json';
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
        if (!this.jsonDb.users.includes(user)) {
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

    createTask (title, createdBy) {
        /*
        const todo = {
            id: this.jsonDb.nextTodoId++,
            title,
            createdAt: new Date(),
            createdBy: user
        };*/
        const todo = new Task(title, createdBy);
        todo.id = this.jsonDb.nextTodoId++;
        this.jsonDb.todos.push(todo);
        this.saveData();
    }

    updateTaskTitle(id, newtitle) {
        const task = this.getTask(id);
        task.title = newtitle;
        this.saveData();
  }

    deleteTask ( id ) {
        const index = this.jsonDb.todos.map(todo => todo.id).indexOf(id);
        this.jsonDb.todos.splice(index,1);
        this.saveData();
    }

    getTask( id ) {
        return this.jsonDb.todos.find(t => t.id === id);
    }

    getTasks () {
        return this.jsonDb.todos;
    }

    saveData() {
        try {
            fs.writeFileSync(this.jsonDbFile, JSON.stringify(this.jsonDb));
        } catch (error) {
            console.log(error);
            exit(1);
        }
        
    }

    loadData() {
        try {
            if(fs.existsSync(this.jsonDbFile)) {
                return JSON.parse(fs.readFileSync(this.jsonDbFile));;
            } else {
                return;
            }
            
        } catch (error) {
            console.log( error );
            exit(1);
        }      
    }    
}

module.exports = {
    DatabaseJson,
}
