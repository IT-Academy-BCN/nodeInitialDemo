const inquirer = require("inquirer");
const fs = require("fs");
const { remove } = require("../src/questions");
let dbcache = [];

function lanzapreguntas() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Cargando preguntas....\n");
      inquirer.prompt(remove).then((todo) => {
        var index = todo.taskindex;
        dbcache[index] = todo;

        if (todo) {
          dbcache.splice(todo, 1);
        }

        let todos = JSON.stringify(dbcache, null, 2);
        fs.writeFile("../database/tasks.json", todos, (err) => {
          if (err) throw err;
        });
        console.log("\nTarea eliminada");
      });
    }, 2000);
    resolve();
  });
}

async function leeJson() {
  fs.readFile("../database/tasks.json", (err, rawdata) => {
    if (!err) {
      dbcache = JSON.parse(rawdata);
      console.log("\n Listando tareas disponibles:");
      console.table(dbcache);
    } else {
      console.log("No existen tareas en la Base de Datos.");
      let emptyFile = JSON.stringify([{}], null, 2);
      fs.writeFile("../database/tasks.json", emptyFile, (err) => {
        if (err) throw err;
      });
    }
  });

  await lanzapreguntas();
}
leeJson();
