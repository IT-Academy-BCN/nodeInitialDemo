const inquirer = require('inquirer');

async function preguntaPersistencia(){
  let database;
    await inquirer.prompt([
      {
        type: 'list',
        name: 'persistencia',
        message: 'En quina persistencia vols treballar les tasques?',
        choices: ['JSON local','Mongo DB','Mysql']
      }
    ])
      .then((answers) => {
        database = answers.persistencia;
        /// Carrega databases
        if(database == 'Mongo DB'){
        const db = require('../../config/configMongodb')
      } else if(database == 'Mysql'){
        const db = require('../../config/configMysql')
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