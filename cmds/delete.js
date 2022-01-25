const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs'); // Necesario para leer Json
const { writeJson } = require('../controllers/json')
const {remove} = require('../src/questions') // Importa preguntas para borrar
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
    writeJson(emptyFile);
    //console.error(err)
  }
}) 
// Fin de lectura del Json
// -->

class Del {
      json = async () => { //  
        await inquirer// Código que te permite crear las pregunta sobre el campo que quieres crear/modificar
          .prompt(remove)
          .then( answers => {
            let resultado = [answers]
            console.table(resultado)
            //<!---- Poner función que elimina aquí ---->
          });
      }
      sql = async () => {
        await console.log('SQL no soportado... Estamos trabajando en ello!')
      }
      mongo = async () => {
        await console.log('Mongo no soportado... Estamos trabajando en ello!')
      }
}
module.exports = Del;