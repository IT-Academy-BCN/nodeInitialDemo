
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
            choices: ['Crear tasca', 'Esborrar tasca', 'Llistar totes les tasques', 'Mostrar una tasca', 'Actualitzar tasca', 'esborrar totes les tasques', 'Sortir']
        
        })

        await triaOpcio(opcio)
    }

}


async function triaOpcio(opcio) {
    // Silencio perquè inquirer ja fa print del missatge d'opció triat
    // console.log('Opció escollida: ', opcio.Aplicacio);

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
            process.exit(0);
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
    task = await inquirer.prompt({
        name: 'id',
        message: 'id de la tasca:'
    })
    
    console.log('Actualitzar Tasca:');
    console.log(await getTask(task.id));
    opcio = await inquirer.prompt({
        type: 'rawlist',
        name: 'update',
        message: "Quin camp vols modificar?",
        choices: ['Autor', 'Descripció', 'Estat', 'Data d\'inici', 'Data de finalització', 'Torna enrera']
    })

    async function updateAndLog(task){
        await updateTask(task.id, task);
        console.log("Modificat tasca:")
        console.log(await getTask(task.id));
    }

    switch(opcio.update){
        case 'Autor':
            task2 = await inquirer.prompt([{
                name: 'author',
                message: 'nom de l\'autor:'
            }])

            task.author = task2.author;
            await updateAndLog(task);
            break;

        case 'Descripció':
            task2 = await inquirer.prompt([{
                name: 'description',
                message: 'Nova descripció:'
            }])

            task.description = task2.description;
            await updateAndLog(task);
            break;

        case 'Estat':
            task2 = await inquirer.prompt([{
                name: 'state',
                message: 'Nou estat (opcions vàlides: pending, open, finalized):'
            }])

            task.state = task2.state;
            await updateAndLog(task);
            break;

        case 'Data d\'inici':
            task2 = await inquirer.prompt([{
                name: 'start_time',
                message: 'Nova data d\'inici (Exemple format d\'entrada: 2020-04-10T17:14:00):'
            }])

            task.start_time = new Date(task2.start_time);
            await updateAndLog(task);
            break;


        case 'Data de finalització':
            task2 = await inquirer.prompt([{
                name: 'end_time',
                message: 'Nova data de finalització (Exemple format d\'entrada: 2020-04-10T17:14:00):'
            }])

            task.end_time = new Date(task2.end_time);
            await updateAndLog(task);
            break;

        case 'Torna Enrera':
            break;

        default:
            console.log('Error: opció no vàlida');
        
        }


    }
    
async function esborrar_tot();
        tasks = await getAllTasks()
        console.log(tasks);
        await deleteAll(tasks);
        console.log(red("Totes les tasques esborrades "));
