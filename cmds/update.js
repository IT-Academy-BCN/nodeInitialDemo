const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs'); // Necesario para leer Json
const { update } = require('../src/questions')
const {writeJson} = require('../controllers/json')
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

// Código que te permite crear la pregunta sobre el campo que quieres crear
class Update {
    json = async () => { //  
      await inquirer// Código que te permite crear las pregunta sobre el campo que quieres crear/modificar
        .prompt(update)
        .then( answers => {
          //<!---- Poner función que elimina aquí 
          
          let resultado = [answers]
          console.table(resultado)
          
          // Poner función que elimina aquí ---->
        });
    }
    sql = async () => {
      await console.log('SQL no soportado... Estamos trabajando en ello!')
    }
    mongo = async () => {
      await console.log('Mongo no soportado... Estamos trabajando en ello!')
    }
}
module.exports = Update;