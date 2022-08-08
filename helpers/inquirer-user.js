const inquirer = require( 'inquirer' );
const { controllersENV } = require('../config');
const { createUser } = require( controllersENV );

function inquirerUser(){
const questions = [
    {
      type: 'input',
      name: 'username',
      message: `Welcome to the TO-DO List \nPlease, enter your username`,
    }
]

inquirer.prompt(questions).then((answers) => {
  createUser( answers );
});
}

module.exports = { inquirerUser }