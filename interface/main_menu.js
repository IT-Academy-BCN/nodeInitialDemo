'use strict';

const inquirer = require('inquirer');
const { exit } = require('process');

const TaskList = require('../clases/TaskList');

const taskList = new TaskList();

function renderMainMenu () {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: '=== Main Menu ===',
            choices: [
                {
                    value: 'listTasks',
                    name: 'List Tasks',
                },
                {
                    value: 'createTask',
                    name: 'Create Task',
                }
            ]
        }
    ])
}

function renderListTasks () {

    let list = taskList.getTasks();
    
    // Sort the list of tasks
    list.sort((a,b) => {
        if ( a.status.toLowerCase() < b.status.toLowerCase()) return 1;
        if ( a.status.toLowerCase() > b.status.toLowerCase()) return -1;
        return 0;
    });

    // Generate choices to prompt
    const choices = [];

    for (let task of list) {

        choices.push({
            value: task,
            name: task.status.padEnd(9) + task.id.toString().padEnd(4) + task.user.padEnd(10).substring(0, 10) + task.title
        });
    }
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'listTask',
            message: '=== Task list ===\n\n  Status   ID  User      Title',
            choices
        }
    ]);
}



module.exports = {renderMainMenu, renderListTasks};
