const inquirer = require('inquirer');
const controlLocal = require('../controller');
const crearTascaInquirer = require('./controllerInquirer');

function preguntaMenu(usuari,database) {
    return inquirer.prompt([
     {
       type: 'list',
       name: 'funcio',
       message: 'Quina funció vols realitzar?',
       choices: ['Llistar tasques', 'Llistar una tasca', 'Crear una tasca', 'Actualitzar una tasca', 'Borrar una tasca',new inquirer.Separator(),'Sortir programa'],
     }
   ])
     .then((answers) => {
       distribucioPreguntes(answers, usuari, database);
     })
     .catch((error) => {
       if (error.isTtyError) {
         // Prompt couldn't be rendered in the current environment
       } else {
         // Something else went wrong
       }
     });
  
 }

 async function distribucioPreguntes(resposta,usuari,database) {

    switch (resposta.funcio) {
      case 'Crear una tasca':
        await crearTascaInquirer.inquirerCrearTasca(usuari,database);
        break;
      case 'Actualitzar una tasca':
        await actualitzarTascaInquirer.inquirerActualitzarTasca(usuari,database);
        // controlLocal.actualitzarFitxer(1, 1);
        break;
      case 'Borrar una tasca':
        await borrarTascaInquirer.inquirerBorrarTasca(usuari,database);
        //controlLocal.borrarFitxer(1);
        break;
        case 'Llistar una tasca':
        await llistarTascaInquirer.inquirerLlistarTasca(usuari,database);
        //controlLocal.llistarPerEstat(1);
        break;
      case 'Llistar tasques':
        switch (database){
            case 'JSON local':
                controlLocal.llistarTotesLesTasques();
                break;
            case 'Mongo DB':
                controlMongo.llistarTotesLesTasques();
                break;
            case 'Mysql':
                controlMysql.llistarTotesLesTasques();
                break;
        }
        break;
      case 'Sortir programa':
        console.log('Has sortit del programa');
        process.exit()
        break;
    } 
    
    console.log('Menú principal')
    preguntaMenu(usuari);
  }

 module.exports = preguntaMenu;