'use strict';

const inquirer = require('inquirer');
const { exit } = require('process');


function renderMainMenu () {
// TODO
return inquirer.prompt([
    {
        type: 'list',
        name: 'mainMenu',
        message: 'Choose Task',
        choices: [
            {
                value: 'crearTarea',
                name: 'Crear Tarea',
            },
            {
                value: 'actualizarTarea',
                name: 'Actualizar tarea',
            },
            {
                value: 'borrarTarea',
                name: 'Borrar tarea',
            },
            {
                value: 'verTarea',
                name: 'Ver tarea',
            },
            {
                value: 'listarTareas',
                name: 'Listar tareas',
            }
        ]
    }
])
}

function renderCreateTask () {
// TODO
}

function renderListTasks () {
// TODO
}

function renderSeeTask (user) {
// TODO: acceder a lista de tareas a través de clases o bd
    let listaTareas = [
        {
            id: 1,
            title: 'Revisar documentación Inquirer',
            horaCreacion: '2022-05-04T21:34:03.357Z',
            user: 'Victor',
            status: 'TODO'
        },
        {
            id: 2,
            title: 'Unit testing',
            horaCreacion: '2022-05-04T21:34:11.240Z',
            user: 'Luis',
            status: 'ONGOING'
        },
        {
            id: 3,
            title: 'HolaMundo',
            horaCreacion: '2022-05-04T21:34:11.240Z',
            user: 'Victor',
            status: 'DONE'
        },
        {
            id: 4,
            title: 'Refactorizar',
            horaCreacion: '2022-05-04T21:34:03.357Z',
            user: 'Clare',
            status: 'TODO'
        },
        {
            id: 5,
            title: 'Persistencia con squelize',
            horaCreacion: '2022-05-04T21:34:11.240Z',
            user: 'Clare',
            status: 'ONGOING'
        },
        {
            id: 6,
            title: 'Marketing',
            horaCreacion: '2022-05-04T21:34:11.240Z',
            user: 'Luis',
            status: 'DONE'
        },
    ]
    // ordenamos lista
    listaTareas.sort((a,b) => {
        if ( a.status.toLowerCase() < b.status.toLowerCase()) {
            return -1;
        }
        if ( a.status.toLowerCase() > b.status.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
        
    });

    // Generamos choices a imprimir
    const choices = [];

    for (let tarea of listaTareas) {
        choices.push({
            value: tarea,
            name: tarea.status + ' - ' + tarea.title + ' - ' + tarea.user
        });
    }
    
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'listTask',
            message: 'Choose Task',
            choices
        }
    ]);

}

function pause(message) {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'ok',
            message       
        }
    ])
}


module.exports = {renderMainMenu, renderCreateTask, renderListTasks, renderSeeTask, pause};
