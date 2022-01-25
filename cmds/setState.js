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
const {state} = require('../src/questions') // Importa preguntas para borrar
let dbcache = []


function lanzapreguntas(){
  return new Promise((resolve,reject)=>{
      // Código que te permite crear la pregunta sobre el campo que quieres crear
    setTimeout(()=>{
          console.log("Cargando preguntas....\n");
              inquirer
              .prompt(state)
              .then( answers => { // Aquí va la función que guarda el Nombre en el Objeto (Json, Sql o Mongo)
                console.log('\nHas elegido modificar la tarea: ' + answers.taskindex);
                var index = answers.taskindex;
                var nuevoEstado = answers.state;
                // var indexAcambiar = dbcache[answers.taskindex];
                // console.log(indexAcambiar);
                //dbcache[index] = answers
                //console.log(dbcache);
                //console.log(dbcache[index].state);
                     
                dbcache[index].state = nuevoEstado 
                //console.log(dbcache[index].state);

                //console.log(todos);
                let todos = JSON.stringify(dbcache, null, 2);
                fs.writeFile('../database/tasks.json', todos, err => {
                  if(err) throw err; // error checking
                });
                console.log('\nTarea Modificada, aquí tienes todas las tareas.');
                console.table(dbcache);
              });
      } , 2000
      );
        resolve()
      });
  };

    function leeJson(){
      console.log('Listando tareas disponibles:')

            // Inicia lectura de Json <--       
            fs.readFile('../database/tasks.json', (err, rawdata) => {
              if (!err) {
              dbcache = JSON.parse(rawdata)
              console.table(dbcache)
              lanzapreguntas();
              } 
              else if(err) console.log('No existen tareas en la Base de Datos.')
            }) 
            // Fin de lectura del Json
            // -->
          }
      leeJson();
          



