const inquirer = require('inquirer');
const controlLocal = require('./controllers/controller');
const controllerInquirer = require('./controllers/controllerInquirer');
require('./config/configMongodb');
require('./config/configMysql');

/// Variables programa
let usuari;
let database;

/// Sequencia
console.log('DevTeams Sprint 3.3');

(async function principal(){

//Menu usuari
console.log('Menú usuari');
await preguntaUsuari();

console.log('Menu persistencia');
await preguntaPersistencia();

///Menu principal
console.log('Menú principal');
await preguntaMenu(usuari);

})()

function preguntaUsuari() {
  return inquirer.prompt([
   {
     type: 'input',
     name: 'usuari',
     message: 'Nom del usuari?',
   }
 ])
   .then((answers) => {
     usuari = answers.usuari;
     console.log(`T'has registrat com ${usuari}`);
   })
   .catch((error) => {
     if (error.isTtyError) {
       // Prompt couldn't be rendered in the current environment
     } else {
       // Something else went wrong
     }
   });

}

function preguntaPersistencia(){
  return inquirer.prompt([
    {
      type: 'list',
      name: 'persistencia',
      message: 'En quina persistencia vols treballar les tasques?',
      choices: ['JSON local','Mongo DB','Mysql']
    }
  ])
    .then(async(answers) => {
      database = answers.persistencia;
      /// Carrega databases
      if(database == 'Mongo DB'){
      const db = require('./config/configMongodb')
    } else if(database == 'Mysql'){
      const db = require('./config/configMysql')
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
 
function preguntaMenu(usuari) {
   return inquirer.prompt([
    {
      type: 'list',
      name: 'funcio',
      message: 'Quina funció vols realitzar?',
      choices: ['Llistar tasques', 'Llistar una tasca', 'Crear una tasca', 'Actualitzar una tasca', 'Borrar una tasca',new inquirer.Separator(),'Sortir programa'],
    }
  ])
    .then((answers) => {
      distribucioPreguntes(answers,usuari);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
 
}

async function distribucioPreguntes(primeraResposta,usuari) {

  switch (primeraResposta.funcio) {
    case 'Crear una tasca':
      // controlLocal.crearTasca("francesc",'prova1','finalitzada','avui','')
      await controllerInquirer.inquirerCrearTasca(usuari)
      break;
    case 'Actualitzar una tasca':
      controlLocal.actualitzarFitxer(1, 1);
      break;
    case 'Borrar una tasca':
      controlLocal.borrarFitxer(1);
      break;
    case 'Llistar una tasca':
      controlLocal.llistarPerEstat(1);
      break;
    case 'Llistar tasques':
      controlLocal.llistarTotesLesTasques();
      break;
    case 'Sortir programa':
      console.log('Has sortit del programa');
      process.exit()
      break;
  } 
  console.log('Menú principal')
  preguntaMenu(usuari);
}
