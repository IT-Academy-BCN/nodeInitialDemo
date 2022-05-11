'use strict';

const inquirer = require('inquirer');

function renderTaskMenu(task) {
    console.log(task)
    const {status, id, user, title, horaCreacion} = task;
    //console.log(`    Status: ${status}\n    Id: ${id}\n    Title: ${title}\n    User: ${user}\n    HoraCreación: ${horaCreacion}`);
    console.table({status, id, title, user, horaCreacion});

    return inquirer.prompt([
        {
            type: 'list',
            name: 'taskMenu',
            message: '=== Task Menu ===',
            choices: [
                {
                    value: 'updateTask',
                    name: 'Update task',
                },
                {
                    value: 'deleteTask',
                    name: 'Delete task',
                },
                {
                    value: 'exit',
                    name: 'Back to Main Menu',
                }
            ]
        }
    ])
}


module.exports = {renderTaskMenu};
