const inquirer = require("inquirer"); // Para iniicar  preguntas por consola
const fs = require("fs"); // Necesario para leer Json
const { findOne } = require("../src/questions");
let dbcache = [];

function lanzapreguntas() {
  return new Promise((resolve, reject) => {
    // Código que te permite crear la pregunta sobre el campo que quieres crear
    setTimeout(() => {
      console.log("Cargando preguntas....\n");
      inquirer.prompt(findOne).then((todos) => {
        // Aquí va la función que guarda el Nombre en el Objeto (Json, Sql o Mongo)
        var index = todos.taskindex;

        dbcache[index] = todos;

        if (!todos) {
          console.log("\nNo existe ninguna tarea con el índice indicado.");
        }
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
