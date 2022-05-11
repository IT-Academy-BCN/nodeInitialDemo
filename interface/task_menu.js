'use strict';

const inquirer = require('inquirer');

const TaskList = require('../clases/TaskList');

const taskList = new TaskList();

function renderTaskMenu(taskId) {

    const task = taskList.getTask(taskId);

    // Print task via command line
    const {status, id, user, title, horaCreacion} = task;
    console.table({status, id, title, user, horaCreacion});

    return inquirer.prompt([
        {
            type: 'list',
            name: 'taskMenu',
            message: '=== Task Menu ===',
            choices: [
                {
                    value: 'updateTask',
                    name: 'Update task (TODO)',
                },
                {
                    value: 'deleteTask',
                    name: 'Delete task (TODO)',
                },
                {
                    value: 'mainMenu',
                    name: 'Go to Main Menu',
                }
            ]
        }
    ])
}

function renderUpdateTask(taskId) {
    // TODO
}

function renderDeleteTask(taskId) {
    // TODO
}

module.exports = {renderTaskMenu, renderUpdateTask, renderDeleteTask};
