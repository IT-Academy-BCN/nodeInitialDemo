const fs = require('fs');

//class DatabaseJson extends Database {
class Database {
    static DbTypes = {
        JSON: "JSON",
        MYSQL: "MYSQL",
        MONGO: "MONGO"
    }

    constructor(type = this.DbTypes.JSON){
        this.type = type;
        // por defecto BD Json
        this.jsonDb = this.loadData();
        if(!this.jsonDb) {
            this.jsonDb = {
                todos:[],
                users:[]
            }
        }
        this.nextTodoId = 1;
    }

    createUser (user) {
        this.jsonDb.users.push(user);
        this.saveData();
    }

    getUsers () {
        return this.jsonDb.users;
    }

    createTodo ({title, user}) { // lo suyo sería recibir por parámetro objeto todo
        const todo = {
            id: this.nextTodoId++,
            title,
            horaCreacion: new Date(),
            user
        };
        this.jsonDb.todos.push(todo);
        this.saveData();
    }

    updateTodo ( id ) {
        this.saveData();
    }

    deleteTodo ( id ) {
        this.saveData();
    }

    getTodo( id ) {

    }

    getTodos () {
        return this.jsonDb.todos;
    }




    saveData() {
        fs.writeFileSync('bd.json', JSON.stringify(this.jsonDb));
    }

    loadData() {
        return JSON.parse(fs.readFileSync('bd.json'));        
    }

    
}





const bd = new Database(Database.DbTypes.JSON);
bd.createUser("Luis");
bd.createUser("Peter");
bd.createTodo({
    title: "Titulo blebleble"
});
bd.createTodo({
    title: "Titulo blablbalba"
});
bd.createTodo({
    title: "Titulo bliblibli"
});




console.log(bd.getUsers());
console.log(bd.getUsers());






module.exports = {
    Database,
}