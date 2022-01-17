// Pasos estándar a hacer en todas las funciones
// TODO Leer archivo.json, crear si no existe.
// TODO Copiar información del archivo en un arrayTemporal 
// TODO Inicia pregunta de los campos para crear la tarea, guardar en un objetoTemporal
// TODO Cuando complete los campos, hacer push del objeto temporal al arrayTemporal.
// TODO Escribir arrayTemporal en archivo.json 
// TODO Mensaje de Éxito y/o Error 
// TODO En todos los pasos siempre tener un mensaje de Error si algo falla, indicando el proceso que hace
// Pej: Si falla a leer el archivo, Error: File not found o si falla al escribir Error: File can not write.

const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs'); // Necesario para leer Json
const { create } = require('../src/questions') // Importa las preguntas de creación

// Inicia lectura de Json <--
let rawtodo = fs.readFileSync('./database/tasks.json'); 
const db = JSON.parse(rawtodo);
const dbcache = db.tasks 
//console.table(db.tasks) // Opcional para comprobar
//console.table(dbcache) //  Opcional para comprobar 
//db es un "objeto" con objetos
//db.tasks permite acceder al contenido del array dentro de db.
//dbcache es el objeto que utilizaremos y manejaremos

// Fin de lectura del Json
// -->

// Código que te permite crear las pregunta sobre el campo que quieres crear/modificar
inquirer
  .prompt(create)
  .then( answers => { 
  // Aquí va la función que guarda el Nombre en el Objeto (Json, Sql o Mongo)
    console.info('Tarea creada:', answers); // En este momento no hay presistencia
  });
