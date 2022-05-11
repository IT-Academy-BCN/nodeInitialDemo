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
                value: 'createTask',
                name: 'Create Task',
            },
            {
                value: 'updateTask',
                name: 'Update Task',
            },
            {
                value: 'deleteTask',
                name: 'Delete Task',
            },
            {
                value: 'seeTask',
                name: 'See task',
            },
            {
                value: 'listTasks',
                name: 'List Tasks',
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

function renderSeeTask () {
// TODO: acceder a lista de tareas a través de clases o bd
    let taskList = [
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
    taskList.sort((a,b) => {
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

    for (let task of taskList) {
        choices.push({
            value: task,
            name: task.status + ' - ' + task.title + ' - ' + task.user
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
