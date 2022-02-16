
const inquirer = require('inquirer');

require('dotenv').config()
const { connect, getTask, getAllTasks, saveNewTask, updateTask, deleteTask, deleteAll } = require('./model/Tasks')


connect().then(() => {

    // fer que el programa no surti a menys que agafis l'opció de sortir

    inquirer.prompt({
        type: 'rawlist',
        name: 'Aplicacio',
        message: "Benvinguda a l'aplicació TASQUES. Què vols fer? Escull una opció:",
        choices: ['Crear tasca', 'Esborrar tasca', 'Llistar totes les tasques', 'Mostrar una tasca', 'Actualitzar tasca', 'Sortir']
    
    }).then(opcio => triaOpcio(opcio))
})


function triaOpcio(opcio) {
    console.log('Opció escollida: ', opcio.Aplicacio);

    switch (opcio.Aplicacio) {
        case 'Crear tasca':
            crear_tasca();
            break;

        case 'Esborrar tasca':
            esborrar_tasca();
            break;


        case 'Llistar tasques':
            llistar_tasques();
            break;


        case 'Mostrar tasca':
            mostrar_tasca();
            break;


        case 'Actualitzar tasca':
            actualitzar_tasca();
            break;


        default:
            break;
    }
}


function crear_tasca() {
    inquirer.prompt([{
        name: 'author',
        message: "Introdueix el nom de l'autor:",

    }, {
        name: 'description',
        message: 'Nom de la tasca:',

    }])
        .then(task => {
            saveNewTask(task);
            console.log(`Tasca creada:`);
            console.log(task);
        });
}

function esborrar_tasca() {
    inquirer.prompt({
        name: 'id',
        message: 'id de la tasca:'
    })

        .then(task => {
            deleteTask(task).then(task => {
                console.log(`Tasca eliminada`);
            })
        })
}


function llistar_tasques() {
    getAllTasks.then(tasks => console.log(tasks))
}


function mostrar_tasca() {
    inquirer.prompt({
        name: 'id',
        message: 'id de la tasca:'

    })
    
        .then(task => {
            getTask(task.id).then(task => {
                console.log(task);
            })
        })
}

function actualitzar_tasca() {
    inquirer.prompt({
        name: 'id',
        message: 'id de la tasca:'
    })

        .then(task => {
            // TODO aquesta deixeu-me-la per mi que posaré un update per cada camp
        })

    }