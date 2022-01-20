// Pasos estándar a hacer en todas las funciones
// TODO Leer archivo.json, crear si no existe.
// TODO Mensaje de Éxito y/o Error 
// TODO En todos los pasos siempre tener un mensaje de Error si algo falla, indicando el proceso que hace
// Pej: Si falla a leer el archivo, Error: File not found o si falla al escribir Error: File can not write.

const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs'); // Necesario para leer Json
const { create } = require('../src/questions') // Importa las preguntas de creación
let dbcache = []

// Inicia lectura de Json <--
fs.readFile('./database/tasks.json', (err, rawdata) => {
    if (!err) {
     dbcache = JSON.parse(rawdata)
     //console.log(dbcache)
    } 
    else {
      //console.log('No se ha podido leer el archivo')
      let emptyFile = JSON.stringify([{}],null,2);
      fs.writeFile('./database/tasks.json', emptyFile, err => {
          if(err) throw err; // error checking 
      });
      //console.error(err)
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
        fs.writeFile('./database/tasks.json', todos, err => {
          if(err) throw err; // error checking
        });
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
