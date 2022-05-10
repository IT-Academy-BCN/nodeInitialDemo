class Database {

    constructor(){
        //throw new Error("Abstract class");
    }

    createUser (user) {}

    getUsers () {}

    createTodo (todo) {}

    updateTodo ( id ) {}

    deleteTodo ( id ) {}

    getTodo( id ) {}

    getTodos () {}  
}

module.exports = {
    Database,
}