// Pasos estándar a hacer en todas las funciones
// Leer archivo.json, crear si no existe (quizás sólo en create.js)
// Copiar información del archivo en un arrayTemporal 
// Inicia pregunta de los campos para crear la tarea, guardar en un objetoTemporal
// Cuando complete los campos, hacer push del objeto temporal al arrayTemporal.
// Escribir arrayTemporal en archivo.json 
// Mensaje de Éxito y/o Error 
// En todos los pasos siempre tener un mensaje de Error si algo falla, indicando el proceso que hace
// Pej: Si falla a leer el archivo, Error: File not found o si falla al escribir Error: File can not write.

const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs'); // Necesario para leer Json
const {remove} = require('../src/questions') // Importa preguntas para borrar
let dbcache = []
// Inicia lectura de Json <--
fs.readFile('../database/tasks.json', (err, rawdata) => {
  if (!err) {
   dbcache = JSON.parse(rawdata)
   //console.log(dbcache)
  } 
  else {
    //console.log('No se ha podido leer el archivo')
    let emptyFile = JSON.stringify([{}],null,2);
    fs.writeFile('../database/tasks.json', emptyFile, err => {
        if(err) throw err; // error checking 
    });
    //console.error(err)
  }
}) 
// Fin de lectura del Json
// -->

// Código que te permite crear la pregunta sobre el campo que quieres crear
inquirer
    .prompt(remove)
    .then( answers => { // Aquí va la función que guarda el Nombre en el Objeto (Json, Sql o Mongo)
      console.info('Nombre de la tarea:', answers); // En este momento no hay presistencia
    });


