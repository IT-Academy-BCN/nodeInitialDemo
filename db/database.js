class Database {

    constructor(){
        //throw new Error("Abstract class");
    }

    createUser (user) {}

    getUsers () {}

    createTask (todo) {}

    updateTask ( id ) {}

    deleteTask ( id ) {}

    getTask( id ) {}

    getTasks () {}  
}

module.exports = {
    Database,
}