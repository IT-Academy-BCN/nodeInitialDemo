const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs'); // Necesario para leer Json
const { readJson, writeJson } = require('../controllers/json')
const {remove} = require('../src/questions'); // Importa preguntas para borrar

// Inicia lectura de Json <--
let dbcache = readJson()
//Fin de lectura del Json -->

// Invoca preguntas <---
const questionRun = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    if (answers.confirmation === 'Yes') {
      dbcache.splice(answers.taskIndex, 1);
      let todos = JSON.stringify(dbcache, null, 2);
      writeJson(todos)
      console.log('Tarea eliminada')
      } else {
        console.log('No se ha eliminado la tarea')
      }
    })
} // -->

class Del {
      json = async () => { //
        console.table(dbcache)  
        await questionRun(remove)
      }
      sql = async () => {
        await console.log('SQL no soportado... Estamos trabajando en ello!')
      }
      mongo = async () => {
        await console.log('Mongo no soportado... Estamos trabajando en ello!')
      }
}
module.exports = Del;