const inquirer = require("inquirer"); // inicar  preguntas por consola
const fs = require("fs"); // leer Json
const { create } = require("../src/questions"); // Importa las preguntas de creación
let dbcache = [];

fs.readFile("../database/tasks.json", (err, rawdata) => {
  if (!err) {
    dbcache = JSON.parse(rawdata);
  } else {
    let emptyFile = JSON.stringify([{}], null, 2);
    fs.writeFile("../database/tasks.json", emptyFile, (err) => {
      if (err) throw err;
    });
  }
});

inquirer.prompt(create).then((newTodo) => {
  dbcache.push(newTodo);
  let todos = JSON.stringify(dbcache, null, 2);

  fs.writeFile("../database/tasks.json", todos, (err) => {
    if (err) throw err;
  });

  console.log("Tarea Creada");
  console.table(dbcache);
});
