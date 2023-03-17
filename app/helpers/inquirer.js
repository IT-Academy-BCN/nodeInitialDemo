const inquirer = require('inquirer');

const firstQuestion ={
    type: 'input',
    name: 'name',
    message: "What's your  name",
}
const secondQuestion = {
    type: 'list',
    name: 'menu',
    message: 'What do you want to do?',
    choices: [
      'Create a new task',
      'Update a task',
      'Delete a task',
      'Show all tasks',
      'Show specific task',
      'Exit'
    ],
}

async function initProgram(){
    let exit = false
    const firstAnswer = await inquirer.prompt([firstQuestion])
    console.log(firstAnswer)
    while(!exit){
        const secondAnswer = await inquirer.prompt([secondQuestion])
        if(secondAnswer.menu == 'Exit')
            exit = true
        console.log(secondAnswer)
    }

}

initProgram()

