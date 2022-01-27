const inquirer = require('inquirer'); // Para iniicar  preguntas por consola
const fs = require('fs'); // Necesario para leer Json
const { findOne } = require('../src/questions')
const {readJson} = require('../controllers/json')

// Inicia lectura de Json <--
let dbcache = readJson()
//Fin de lectura del Json -->

// Código que te permite buscar la tarea en Json
const questionsRun = (questions) => {
    inquirer.prompt(questions).then((answers) =>{
      let index = answers.taskIndex;
      let finded = [dbcache[index]];
      console.table(finded)
  })
}

class Find {
    json = async() => {
      // Pendiente mostrar resumen de dbcache (index y name) 
      await questionsRun(findOne)
    }
    sql = async () => {
      await console.log('SQL no soportado... Estamos trabajando en ello!')
    }
    mongo = async () => {
      await console.log('Mongo no soportado... Estamos trabajando en ello!')
    }
}
module.exports = Find;