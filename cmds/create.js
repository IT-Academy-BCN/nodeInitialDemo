const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs');
const { create } = require('../src/questions') // Importa las preguntas de creación
const { writeJson, readJson } = require('../controllers/json')


// Inicia lectura de Json <--
let dbcache = readJson()
//Fin de lectura del Json -->

// Código que te permite crear la tarea y escribir en Json
const questionRun = () => {
  inquirer
      .prompt(create)
      .then( answers => {
        dbcache.push(answers)
        let todos = JSON.stringify(dbcache, null, 2);
        writeJson(todos)
        console.log('Tarea Creada');
        console.table(dbcache);
      });
}

class Add {
  json = async () => {
    await questionRun() 
  }
  sql = async () => {
    await console.log('SQL no soportado... Estamos trabajando en ello!')
  }
  mongo = async () => {
    await console.log('Mongo no soportado... Estamos trabajando en ello!')
  }
}

module.exports = Add;