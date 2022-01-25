const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs');
const { create } = require('../src/questions') // Importa las preguntas de creación
const { writeJson} = require('../controllers/json')


// Inicia lectura de Json <--
  fs.readFile('./database/tasks.json', (err, rawdata) => {
    if (!err) {
     dbcache = JSON.parse(rawdata)
     //console.table(dbcache)
    } 
    else {
      //console.log('No se ha podido leer el archivo')
      let emptyFile = JSON.stringify([{}],null,2);
      writeJson(emptyFile);
      //console.error(err) - test
    }
  })
// Fin de lectura del Json
// -->

class Add {
  json = async () => {
    await inquirer// Código que te permite crear las pregunta sobre el campo que quieres crear/modificar
      .prompt(create)
      .then( answers => {
        dbcache.push(answers)
        let todos = JSON.stringify(dbcache, null, 2);
        writeJson(todos)
        console.log('Tarea Creada');
        console.table(dbcache);
      });
  }
  sql = async () => {
    await console.log('SQL no soportado... Estamos trabajando en ello!')
  }
  mongo = async () => {
    await console.log('Mongo no soportado... Estamos trabajando en ello!')
  }
}

module.exports = Add;