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

const inquirer = require('inquirer');
// Código que te permite crear la pregunta sobre el campo que quieres crear
inquirer
  .prompt([
    {
      type: 'input',
      name: 'taskName',
      message: 'Donde quieres buscar?:'
    },
    {
        type: 'input',
        name: 'taskStartDate',
        message: 'Fecha de Inicio:'
      },
      {
        type: 'input',
        name: 'taskEndDate',
        message: 'Fecha de Fin:'
      },
      {
        type: 'input',
        name: 'taskDescription',
        message: 'Descripción de la tarea:'
      },
      {
        type: 'input',
        name: 'taskUser',
        message: 'Usuario Asignado:'
      }
  ])
  .then( answers => { // Aquí va la función que guarda el Nombre en el Objeto (Json, Sql o Mongo)
    console.info('Nombre de la tarea:', answers); // En este momento no hay presistencia
  });