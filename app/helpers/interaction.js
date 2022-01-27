const inquirer = require('inquirer');
const colorette = require('colorette');


// Offer a CRUD to the user through the console.
const questions = [
    {
        type: 'list',
        name: 'option',
        message: `${colorette.redBright(colorette.underline('What would you like to do?\n'))}`,
        choices: [
            {
                value: '1',
                name: `${colorette.greenBright('1.')} Create task`
            },
            {
                value: '2',
                name: `${colorette.greenBright('2.')} Read all tasks`
            },
            {
                value: '3',
                name: `${colorette.greenBright('3.')} Read completed tasks`
            },
            {
                value: '4',
                name: `${colorette.greenBright('4.')} Read uncompleted tasks`
            },
            {
                value: '5',
                name: `${colorette.greenBright('5.')} Update task`
            },
            {
                value: '6',
                name: `${colorette.greenBright('6.')} Delete task`
            },
            {
                value: '0',
                name: `${colorette.greenBright('0.')} Exit`
            }
        ]
    }
];

const interactiveMenu = async ()=>{
    console.clear();
    console.log(`${colorette.greenBright('\n----------------------------')}`);
    console.log(`     ${colorette.bgMagentaBright(' Select an option ')}`);
    console.log(`${colorette.greenBright('----------------------------\n')}`);

    const { option } = await inquirer.prompt(questions);

    return option
};

const pause = async ()=>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${colorette.greenBright('ENTER')} to continue`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question);
}

module.exports = {
    interactiveMenu,
    pause
}