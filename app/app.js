
const inquirer = require('inquirer');

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
            message: "Benvinguda a l'aplicació TASQUES. Què vols fer? Escull una opció:",
            choices: ['Crear tasca', 'Esborrar tasca', 'Llistar totes les tasques', 'Mostrar una tasca', 'Actualitzar tasca', 'Sortir']
        
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


        case 'Llistar totes les tasques':
            await llistar_tasques();
            break;


        case 'Mostrar una tasca':
            await mostrar_tasca();
            break;


        case 'Actualitzar tasca':
            await actualitzar_tasca();
            break;

        case 'Sortir':
            process.exit(0)


        default:
            break;
    }
}


async function crear_tasca() {
    task = await inquirer.prompt([{
        name: 'author',
        message: "Introdueix el nom de l'autor:",
    }, {
        name: 'description',
        message: 'Nom de la tasca:',

    }])
    await saveNewTask(task);
    console.log(`Tasca creada:`);
    console.log(task);
        
}

async function esborrar_tasca() {
    task = await inquirer.prompt({
        name: 'id',
        message: 'id de la tasca:'
    })
    task = await getTask(task.id);
    console.log("Tasca esborrada: ");
    console.log(task);
    await deleteTask(task.id);
}


async function llistar_tasques() {
    tasks = await getAllTasks()
    console.log(tasks);
}


async function mostrar_tasca() {
    task = await inquirer.prompt([{
        name: 'id',
        message: 'id de la tasca:'

    }])
    task = await getTask(task.id)
    console.log(task);
}


async function actualitzar_tasca() {
    inquirer.prompt({
        name: 'id',
        message: 'id de la tasca:'
    })

        .then(task => {
            // TODO aquesta deixeu-me-la per mi que posaré un update per cada camp
        })

    }