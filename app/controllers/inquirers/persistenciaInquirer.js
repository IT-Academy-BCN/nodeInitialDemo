const inquirer = require('inquirer');

async function preguntaPersistencia(){
  let database;
    await inquirer.prompt([
      {
        type: 'list',
        name: 'persistencia',
        message: 'En quina persistencia vols treballar les tasques?',
        choices: ['JSON local','Mongo DB -- ENCARA NO DISPONIBLE','Mysql -- ENCARA NO DISPONIBLE']
      }
    ])
      .then((answers) => {
        database = answers.persistencia;
        /// Carrega databases
        if(database == 'Mongo DB -- ENCARA NO DISPONIBLE'){
        const db = require('../../config/configMongodb');
        console.log('Has sortit del programa');
        process.exit()
      } else if(database == 'Mysql -- ENCARA NO DISPONIBLE'){
        const db = require('../../config/configMysql');
        console.log('Has sortit del programa');
        process.exit()
        } else if(database == 'JSON local'){
          console.log('JSON ja disponible');
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });

      return database;
  }

  module.exports = preguntaPersistencia;