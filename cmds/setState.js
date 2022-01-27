const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs');
const { state } = require('../src/questions') // Importa las preguntas de creación
const { writeJson, readJson } = require('../controllers/json')

// Inicia lectura de Json <--
let dbcache = readJson()
//Fin de lectura del Json -->


// Código que te permite crear la tarea y escribir en Json
const questionRun = () => {
  inquirer
      .prompt(state)
      .then( answers => {
        console.log('\nHas elegido modificar la tarea: ' + answers.taskindex);
        let index = answers.taskIndex;
        let newState = answers.state;
        dbcache[index].state = newState
        //console.log(dbcache[index].state);
        //console.log(todos);
        let todos = JSON.stringify(dbcache, null, 2);
        writeJson(todos)
        console.log('\nTarea Modificada, aquí tienes todas las tareas.');
        console.table(dbcache);
      });
}
class setState {
  json = async () => {
    console.table(dbcache);
    await questionRun();
  }
  sql = async () => {
    await console.log('SQL no soportado... Estamos trabajando en ello!')
  }
  mongo = async () => {
    await console.log('Mongo no soportado... Estamos trabajando en ello!')
  }
}

module.exports = setState;   