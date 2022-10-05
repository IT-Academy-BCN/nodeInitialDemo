const inquirer = require('inquirer');
const controlLocal = require('../controller');
const controllerInquirer = require('./controllerInquirer');

function preguntaMenu(usuari,database) {
    return inquirer.prompt([
     {
       type: 'list',
       name: 'funcio',
       message: 'Quina funció vols realitzar?',
       choices: ['Llistar tasques', 'Crear una tasca', 'Actualitzar una tasca', 'Borrar una tasca',new inquirer.Separator(),'Sortir programa'],
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
        await controllerInquirer.inquirerCrearTasca(usuari,database);
        break;
      case 'Actualitzar una tasca':
        await controllerInquirer.inquirerActualitzarTasca(usuari,database);
        // controlLocal.actualitzarFitxer(1, 1);
        break;
      case 'Borrar una tasca':
        await controllerInquirer.inquirerBorrarTasca(usuari,database);
        //controlLocal.borrarFitxer(1);
        break;
      case 'Llistar tasques':
        switch (database){
            case 'JSON local':
                await controlLocal.llistarTotesLesTasques();
                break;
            case 'Mongo DB':
              await controlMongo.llistarTotesLesTasques();
                break;
            case 'Mysql':
              await controlMysql.llistarTotesLesTasques();
                break;
        }
        await controllerInquirer.inquirerVeureTasca(database);
        break;
      case 'Sortir programa':
        console.log('Has sortit del programa');
        process.exit()
        break;
    } 
    
     console.log(' /////////////////// Menú principal ///////////////////');
     setTimeout(() => {
       preguntaMenu(usuari,database);
     }, 1000);
  }

 module.exports = preguntaMenu;