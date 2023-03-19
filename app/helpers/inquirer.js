const inquirer = require('inquirer');
const UserController = require('../users/controller')


const {
    firstQuestion,
    secondQuestion
} = require('./questions')


async function initProgram(dbType){
    const uc = new UserController(dbType)

    let exit = false

    const firstAnswer = await inquirer.prompt([firstQuestion])
    const user = await uc.create({name: firstAnswer.name })

    console.log(firstAnswer)
    while(!exit){
        const secondAnswer = await inquirer.prompt([secondQuestion])
        if(secondAnswer.menu == 'Exit')
            exit = true
        console.log(secondAnswer)
    }

}

module.exports = initProgram

