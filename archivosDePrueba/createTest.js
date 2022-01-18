// Pasos estándar a hacer en todas las funciones
// Leer archivo.json, crear si no existe
// Copiar información del archivo en un arrayTemporal 
// Inicia pregunta de los campos para crear la tarea, guardar en un objetoTemporal
// Cuando complete los campos, hacer push del objeto temporal al arrayTemporal.
// Escribir arrayTemporal en archivo.json 
// Mensaje de Éxito y/o Error 
// EN Todos los pasos siempre tener un mensaje de Error si algo falla, indicando el proceso que hace
// Pej: Si falla a leer el archivo, Error: File not found o si falla al escribir Error: File can not write.

const inquirer = require('inquirer');
const database = require('../database/tasks.json')

var newArray = database.tasks;

console.log(newArray);

// Código que te permite crear la pregunta sobre el campo que quieres crear
inquirer
  .prompt([
    {
      name: 'taskName',
      message: 'Cuál es tu tarea:'
    },
    {
        name: 'taskStartDate',
        message: 'Fecha de Inicio:'
      },
      {
        name: 'taskEndDate',
        message: 'Fecha de Fin:'
      },
      {
        name: 'taskDescription',
        message: 'Descripción de la tarea:'
      },
      {
        name: 'taskUser',
        message: 'Usuario Asignado:'
      }
  ])
  .then( answers => { 
    newArray.push(answers);
    console.info('Nombre de la tarea:', newArray); // En este momento no hay presistencia
  });

  

