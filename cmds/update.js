const inquirer = require("inquirer");
const fs = require("fs");
const { update } = require("../src/questions");
let dbcache = [];

function lanzapreguntas() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Cargando preguntas....\n");
      inquirer.prompt(update).then((todos) => {
        console.log("\nHas elegido modificar la tarea: " + todos.taskindex);
        var index = todos.taskindex;

        dbcache[index] = todos;
        console.log(todos);

        let newTodos = JSON.stringify(dbcache, null, 2);
        fs.writeFile("../database/tasks.json", newTodos, (err) => {
          if (err) throw err;
        });
        console.log("\nTarea Modificada, aquí tienes todas las tareas.");
        console.table(dbcache);
      });
    }, 2000);
    resolve();
  });
}

async function leeJson() {
  // Inicia lectura de Json <--
  fs.readFile("../database/tasks.json", (err, rawdata) => {
    if (!err) {
      dbcache = JSON.parse(rawdata);
      console.log("\n Listando tareas disponibles:");
      console.table(dbcache);
    } else {
      console.log("No existen tareas en la Base de Datos.");
      let emptyFile = JSON.stringify([{}], null, 2);
      fs.writeFile("../database/tasks.json", emptyFile, (err) => {
        if (err) throw err; // error checking
      });
      //console.error(err)
    }
  });
  // Fin de lectura del Json
  // -->
  await lanzapreguntas();
}
leeJson();
