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

const interactiveMenu = async () => {
    console.clear();
    console.log(`${colorette.greenBright('\n----------------------------------------------------------------------------')}`);
    console.log(`     ${colorette.magentaBright(`
'########::'########:'##::::'##:::'########:'########::::'###::::'##::::'##:
 ##.... ##: ##.....:: ##:::: ##:::... ##..:: ##.....::::'## ##::: ###::'###:
 ##:::: ##: ##::::::: ##:::: ##:::::: ##:::: ##::::::::'##:. ##:: ####'####:
 ##:::: ##: ######::: ##:::: ##:::::: ##:::: ######:::'##:::. ##: ## ### ##:
 ##:::: ##: ##...::::. ##:: ##::::::: ##:::: ##...:::: #########: ##. #: ##:
 ##:::: ##: ##::::::::. ## ##:::::::: ##:::: ##::::::: ##.... ##: ##:.:: ##:
 ########:: ########:::. ###::::::::: ##:::: ########: ##:::: ##: ##:::: ##:
........:::........:::::...::::::::::..:::::........::..:::::..::..:::::..::
    `)}`);
    console.log(`${colorette.greenBright('----------------------------------------------------------------------------\n')}`);

    const { option } = await inquirer.prompt(questions);

    return option
};

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${colorette.greenBright('ENTER')} to continue`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question);
};

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,

            validate(value) {
                if (value.length === 0) {
                    return 'Please enter a value'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

const showTasks = async (tasks = []) => {
    const choices = tasks.map((task, i) => {

        const idx = `${colorette.greenBright(i + 1 + '.')}`;

        return {
            value: task.id,
            name: `${idx} ${task.title} - ${task.desc}`,
        };
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Show',
            choices
        }
    ]
    const { id } = await inquirer.prompt(questions);
    return id;
};

const taskListDelete = async (tasks = []) => {
    const choices = tasks.map((task, i) => {

        const idx = `${colorette.greenBright(i + 1)}.`;

        return {
            value: task.id,
            name: `${idx} ${task.title}`
        };
    });

    choices.unshift({
        value: '0',
        name: colorette.greenBright('0.') + ' Cancel'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete',
            choices
        }
    ]
    const { id } = await inquirer.prompt(questions);
    return id;
};

const confirm = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(question);
    return ok;
};

const showChecklist = async (tasks = []) => {

    const choices = tasks.map((task, i) => {

        const idx = `${i + 1}.`;

        return {
            value: task.id,
            name: `${idx} ${task.tile}`,
            checked: (task.completedAt) ? true : false
        };
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'selections',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(question);
    return ids;
};





module.exports = {
    interactiveMenu,
    pause,
    readInput,
    showTasks,
    taskListDelete,
    confirm,
    showChecklist
};