
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
        name: 'nom_usuari',
        message: "Introdueix el nom de l'usuari",

    }, {
        name: 'nom_tasca',
        message: 'Nom de la tasca',

    }, {
        name: 'inici',
        message: "Introdueix data i hora d'inici:",
    }, {
        name: 'final',
        message: "Introdueix data i hora finals:",
    }, {
        name: 'estat',
        message: "Introdueix estat de la tasca:"

    }])
        .then(opcio => {
            console.log('Opció escollida: ', opcio);

            let tasca0 = new tasca((opcio.nom_usuari, opcio.nom_tasca, opcio.inici));
            tasca0.crear_tasca(opcio.nom_usuari, opcio.nom_tasca, opcio.inici, opcio.final, opcio.estat)

            data.saveNewTask(tasca0).then();
            console.log(`Tasca ${opcio.nom_tasca} creada.`);

        });
}

function esborrar_tasca() {
    inquirer.prompt({
        name: 'nom_tasca',
        message: 'Nom de la tasca'
    })

        .then(opcio => {
            console.log('Opció escollida: ', opcio);

            let tasca1 = new tasca((opcio.nom_usuari, opcio.nom_tasca, opcio.inici));
            tasca1.esborrar_tasca(opcio.nom_usuari, opcio.nom_tasca, opcio.inici, opcio.final, opcio.estat);

            data.deleteTask(tasca1).then(); // al json.js la funció com a paràmetre te l'id, jo aqui li passo l'objecte tasca1
            
            console.log(`Tasca ${opcio.nom_tasca} eliminada.`);
        })
}


function llistar_tasques() {
    inquirer.prompt({
        name: 'nom_usuari',
        message: "Introdueix el nom de l'usuari",
      
    })

        .then(opcio => {
            console.log('Opció escollida: ', opcio);
           
        })
}


function mostrar_tasca() {
    inquirer.prompt({
        name: 'nom_tasca',
        message: 'Nom de la tasca'

    })
    
        .then(opcio => {
            console.log('Opció escollida: ', opcio);
            let tasca2 = new tasca((opcio.nom_usuari, opcio.nom_tasca, opcio.inici));
            tasca2.mostrar_tasca(opcio.nom_usuari, opcio.nom_tasca, opcio.inici, opcio.final, opcio.estat);

            data.getTask(tasca2).then(); // al json.js la funció com a paràmetre te l'id, jo aqui li passo l'objecte tasca2
             // funcio no funciona       
        })
}

function actualitzar_tasca() {
    inquirer.prompt({
        name: 'nom_tasca',
        message: 'Nom de la tasca'
    })

        .then(opcio => {
            console.log('Opció escollida: ', opcio);
            let tasca3 = new tasca((opcio.nom_usuari, opcio.nom_tasca, opcio.inici));
            tasca3.mostrar_tasca(opcio.nom_usuari, opcio.nom_tasca, opcio.inici, opcio.final, opcio.estat);

            data.updateTask(tasca3).then(); // al json.js la funció com a paràmetre te l'id, jo aqui li passo l'objecte tasca3
        //
        
            
            console.log(`Tasca ${opcio.nom_tasca} actualitzada.`);
        })

    }