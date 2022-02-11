const inquirer = require('inquirer');
const colorette = require('colorette');

// Offer the database
const db = [
    {
        type: 'list',
        name: 'option',
        message: `${colorette.redBright(colorette.underline('What database do you want to use?\n'))}`,
        choices: [
            {
                value: 'JSON',
                name: `${colorette.greenBright('1.')} JSON`
            },
            {
                value: 'MONGO',
                name: `${colorette.greenBright('2.')} MONGO`
            },
            {
                value: 'MYSQL',
                name: `${colorette.greenBright('3.')} MYSQL`
            },
        ]
    }
];

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
                name: `${colorette.greenBright('4.')} Read pending tasks`
            },
            {
                value: '5',
                name: `${colorette.greenBright('5.')} Update task`
            },
            {
                value: '6',
                name: `${colorette.greenBright('6.')} Change Pending/Completed`
            },
            {
                value: '7',
                name: `${colorette.greenBright('7.')} Delete task`
            },
            {
                value: '0',
                name: `${colorette.greenBright('0.')} Exit`
            }
        ]
    }
];

// Banner
const banner = async () => {
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
}

// menuDB
const menuDB = async () => {
    await banner();
    await banner();
    const { option } = await inquirer.prompt(db);
    return option;
};

// Initial menu
const mainMenu = async () => {
    await banner();
    const { option } = await inquirer.prompt(questions);
    return option;
};

// This function is used so that when we select an option, lock the screen and issue a message.
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

// This function is used to add an element to the database, it must be passed through each of the values that we want to add.
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

// This function returns a list of all tasks, the parameter (tasks = [ ]) is what it uses by default if no argument is passed.
const showTasks = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const isCompleted = () => { 
            if(task.isCompleted === true) {
                return colorette.greenBright('Completed');
            } else{
                return colorette.redBright('Pending');
            }
        };

const idx = `${colorette.greenBright(i + 1)}.`;

return {
    value: task.id,
    name: `${idx} 
            ${colorette.magentaBright('Title:')} ${task.title} 
            ${colorette.magentaBright('Description:')} ${task.desc}
            ${colorette.magentaBright('Comment:')} ${task.comment}
            ${colorette.magentaBright('Pending/Completed:')} ${isCompleted()}`
};
    });

choices.push({
    value: '0',
    name: colorette.greenBright('0.') + ' Cancel'
});

const questions = [
    {
        type: 'list',
        name: 'id',
        message: 'Task',
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
            name: `${idx} ${task.title} - ${task.desc}`,
            checked: (task.isCompleted) ? true : false
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
    menuDB,
    mainMenu,
    pause,
    readInput,
    showTasks,
    confirm,
    showChecklist
};