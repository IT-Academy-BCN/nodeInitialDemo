const inquirer = require('inquirer');

async function preguntaUsuari() {
  let usuari;
  
  await inquirer.prompt([
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

  return usuari;
  }

  module.exports = preguntaUsuari;