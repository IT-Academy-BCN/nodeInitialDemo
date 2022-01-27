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

// function lanzapreguntas(){
//   return new Promise((resolve,reject)=>{
//       // Código que te permite crear la pregunta sobre el campo que quieres crear
//     setTimeout(()=>{
//           console.log("Cargando preguntas....\n");
//               inquirer
//               .prompt(state)
//               .then( answers => { // Aquí va la función que guarda el Nombre en el Objeto (Json, Sql o Mongo)
//                 console.log('\nHas elegido modificar la tarea: ' + answers.taskindex);
//                 var index = answers.taskindex;
//                 var nuevoEstado = answers.state;
//                 // var indexAcambiar = dbcache[answers.taskindex];
//                 // console.log(indexAcambiar);
//                 //dbcache[index] = answers
//                 //console.log(dbcache);
//                 //console.log(dbcache[index].state);
                     
//                 dbcache[index].state = nuevoEstado 
//                 //console.log(dbcache[index].state);

//                 //console.log(todos);
//                 let todos = JSON.stringify(dbcache, null, 2);
//                 fs.writeFile('../database/tasks.json', todos, err => {
//                   if(err) throw err; // error checking
//                 });
//                 console.log('\nTarea Modificada, aquí tienes todas las tareas.');
//                 console.table(dbcache);
//               });
//       } , 2000
//       );
//         resolve()
//       });
//   };

//     function leeJson(){
//       console.log('Listando tareas disponibles:')

//             // Inicia lectura de Json <--       
//             fs.readFile('../database/tasks.json', (err, rawdata) => {
//               if (!err) {
//               dbcache = JSON.parse(rawdata)
//               console.table(dbcache)
//               lanzapreguntas();
//               } 
//               else if(err) console.log('No existen tareas en la Base de Datos.')
//             }) 
//             // Fin de lectura del Json
//             // -->
//           }
//       leeJson();
          



