
const inquirer = require('inquirer');
const { red, blue, bold, green } = require("colorette");


require('dotenv').config()
const { connect, getTask, getAllTasks, saveNewTask, updateTask, deleteTask, deleteAll } = require('./model/Tasks')

// Run app
start()

async function start(){
    
    await connect();

    while(true){
        // fer que el programa no surti a menys que agafis l'opció de sortir

        opcio = await inquirer.prompt({
            type: 'rawlist',
            name: 'Aplicacio',
            message: (red("Benvinguda a l'aplicació TASQUES. Què vols fer? Escull una opció:")),
            choices: [(green('Crear tasca', 'Esborrar tasca', 'Llistar totes les tasques', 'Mostrar una tasca', 'Actualitzar tasca', 'esborrar totes les tasques', 'Sortir'))]
        
        })

        await triaOpcio(opcio)
    }

}


async function triaOpcio(opcio) {
    console.log('Opció escollida: ', opcio.Aplicacio);

    switch (opcio.Aplicacio) {
        case 'Crear tasca':
            await crear_tasca();
            break;

        case 'Esborrar tasca':
            await esborrar_tasca();
            break;


        case 'Llistar tasques':
            await llistar_tasques();
            break;


        case 'Mostrar tasca':
            await mostrar_tasca();
            break;


        case 'Actualitzar tasca':
            await actualitzar_tasca();
            break;

        case 'Esborrar totes les tasques':
            await esborrar_tot();
            break;


        default:
            break;
    }
}


async function crear_tasca() {
    task = await inquirer.prompt([{
        name: 'author',
        message: (green("Introdueix el nom de l'autor:")),

    }, {
        name: 'description',
        message: (green('Nom de la tasca:')),

    }])
    await saveNewTask(task);
    console.log((red(`Tasca creada:`)));
    console.log(task);
        
}

async function esborrar_tasca() {
    task = await inquirer.prompt({
        name: 'id',
        message: (green('id de la tasca:')),
    })
    task = await getTask(task.id);
    console.log(red("Tasca esborrada: "));
    console.log(task);
    await deleteTask(task);
}


async function llistar_tasques() {
    tasks = await getAllTasks()
    console.log(tasks);
}


async function mostrar_tasca() {
    await inquirer.prompt({
        name: 'id',
        message: (green('id de la tasca:'))

    })
    task = await getTask(task.id)
    console.log(task);
}


async function actualitzar_tasca() {
    inquirer.prompt({
        name: 'id',
        message: (green('id de la tasca:'))
    })

        .then(task => {
            // TODO aquesta deixeu-me-la per mi que posaré un update per cada camp
        })

    }

async function esborrar_tot();
    tasks = await getAllTasks()
    console.log(tasks);
    await deleteAll(tasks);