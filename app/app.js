
const inquirer = require('inquirer');
const { red, green } = require("colorette");

require('dotenv').config()
const { connect, getTask, getAllTasks, saveNewTask, updateTask, deleteTask, deleteAll } = require('./model/Tasks')

// Run app
start()

async function start(){
    
    await connect();

    while(true){
        // fer que el programa no surti a menys que agafis l'opció de sortir
        
        choices = [green('Crear tasca'), green('Esborrar tasca'), green('Llistar totes les tasques'),green('Mostrar una tasca'), green('Actualitzar tasca'), green('esborrar totes les tasques'), green('Sortir')]
        opcio = await inquirer.prompt({
            type: 'rawlist',
            name: 'Aplicacio',
            message: red("Benvinguda a l'aplicació TASQUES. Què vols fer? Escull una opció:"),
            choices: choices
        
        })

        await triaOpcio(opcio)
    }

}


async function triaOpcio(opcio) {
    // Silencio perquè inquirer ja fa print del missatge d'opció triat
    // console.log('Opció escollida: ', opcio.Aplicacio);

    switch (opcio.Aplicacio) {
        case choices[0]:
            await crear_tasca();
            break;

        case choices[1]:
            await esborrar_tasca();
            break;


        case choices[2]:
            await llistar_tasques();
            break;


        case choices[3]:
            await mostrar_tasca();
            break;


        case choices[4]:
            await actualitzar_tasca();
            break;

        
        case choices[5]:
            await esborrar_tot();
            break;

        case choices[6]:
            process.exit(0);
            break;


        default:
            break;
    }
}


async function crear_tasca() {
    task = await inquirer.prompt([{
        name: 'author',
        message: green( "Introdueix el nom de l'autor:"),
    }, {
        name: 'description',
        message: green('Nom de la tasca:'),
    }, {
        name: 'start_time',
        message: green("Data d'inici de la tasca:") ,

    }, {
        name: 'end_time',
        message: green("Data final de la tasca:")


    }])
    await saveNewTask(task);
    console.log(red(`Tasca creada:`));
    console.log(task);
        
}

async function esborrar_tasca() {
    task = await inquirer.prompt({
        name: 'id',
        message: green('id de la tasca:')
    })
    task = await getTask(task.id);
    console.log(red("Tasca esborrada: "));
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
        message: green('id de la tasca:')

    }])
    task = await getTask(task.id)
    console.log(task);
}


async function actualitzar_tasca() {
    task = await inquirer.prompt({
        name: 'id',
        message: green('id de la tasca:')
    })
    
    console.log('Actualitzar Tasca:');
    console.log(await getTask(task.id));
    opcio = await inquirer.prompt({
        type: 'rawlist',
        name: 'update',
        message: green("Quin camp vols modificar?"),
        choices: ['Autor', 'Descripció', 'Estat', 'Data d\'inici', 'Data de finalització', 'Torna enrera']
    })

    async function updateAndLog(task){
        await updateTask(task.id, task);
        console.log(red("Modificat tasca:"))
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
                message: green('Nova descripció:')
            }])

            task.description = task2.description;
            await updateAndLog(task);
            break;

        case 'Estat':
            task2 = await inquirer.prompt([{
                name: 'state',
                message: green('Nou estat (opcions vàlides: pending, open, finalized):')
            }])

            task.state = task2.state;
            await updateAndLog(task);
            break;

        case 'Data d\'inici':
            task2 = await inquirer.prompt([{
                name: 'start_time',
                message: green('Nova data d\'inici (Exemple format d\'entrada: 2020-04-10T17:14:00):')
            }])

            task.start_time = new Date(task2.start_time);
            await updateAndLog(task);
            break;


        case 'Data de finalització':
            task2 = await inquirer.prompt([{
                name: 'end_time',
                message: green('Nova data de finalització (Exemple format d\'entrada: 2020-04-10T17:14:00):')
            }])

            task.end_time = new Date(task2.end_time);
            await updateAndLog(task);
            break;

        case 'Torna Enrera':
            break;

        default:
            console.log(red('Error: opció no vàlida'));
        
        }


    }
    
async function esborrar_tot(){
        tasks = await getAllTasks()
        console.log(tasks);
        await deleteAll(tasks);
        console.log(red("Totes les tasques esborrades "))
}