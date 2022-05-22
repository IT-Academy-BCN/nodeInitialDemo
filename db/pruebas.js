const { DatabaseJson } = require('./database-json');

// Código para probar la clase...

const bd = new DatabaseJson();
bd.createUser("Luis");
bd.createUser("Anna");
/*

bd.createUser("Peter");
bd.createUser("Juanillo");

bd.createTodo({
    title: "Titulo blebleble",
    user: "Juanillo"
});
bd.createTodo({
    title: "Titulo blablbalba",
    user: "Peter"
});
bd.createTodo({
    title: "Titulo bliblibli",
    user: "Luis"
});
*/

//console.log(bd.getTasks());
//bd.deleteTask(1);

//console.log(bd.getUsers());
console.log(bd.getTasks());