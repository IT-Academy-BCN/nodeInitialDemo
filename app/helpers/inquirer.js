const inquirer = require('inquirer');
const UserController = require('../users/controller')
const TaskController = require('../tasks/controller')


const {
    dbSelection,
    firstQuestion,
    secondQuestion
} = require('./questions')


async function initProgram(){

    const db = await inquirer.prompt([dbSelection])
    const dbType = db.dbType.toLowerCase();

    const uc = new UserController(dbType)
    const tc = new TaskController(dbType)


    let exit = false

    const firstAnswer = await inquirer.prompt([firstQuestion])
    const user = await uc.create({name: firstAnswer.name })

    while(!exit){
        const secondAnswer = await inquirer.prompt([secondQuestion])
        if(secondAnswer.menu == 'Exit')
            exit = true
    }

}

module.exports = initProgram

