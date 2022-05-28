const { DatabaseMysql } = require('./database-mysql');

// Código para probar la clase...

const bd = new DatabaseMysql();
bd.createUser("Luis");
bd.createUser("Anna");


bd.createUser("Peter");
bd.createUser("Juanillo");

bd.createTask({
    title: "Titulo blebleble",
    user: "Juanillo"
});
bd.createTask({
    title: "Titulo blablbalba",
    user: "Peter"
});
bd.createTask({
    title: "Titulo bliblibli",
    user: "Luis"
});


//console.log(bd.getTasks());
//bd.deleteTask(1);

//console.log(bd.getUsers());
console.log(bd.getTasks());