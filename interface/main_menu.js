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
                },
                {
                    value: 'changeUser',
                    name: 'Change user',
                },
                {
                    value: 'exit',
                    name: 'Exit',
                }
            ]
        }
    ])
}

async function renderListTasks () {

    let list = await taskList.getTasks();
    
    // Sort the list of tasks
    list.sort((a,b) => {
        if ( a.status < b.status) return 1;
        if ( a.status > b.status) return -1;
        return 0;
    });
    
    // Generate choices to prompt
    const choices = [];

    for (let task of list) {

        choices.push({
            value: task.id,
            name: task.status.padEnd(9) + task.id.toString().padEnd(5) + 
            task.createdBy.substring(0, 14).padEnd(15) + task.title
        });
    }
    
    choices.push({
        value: 'mainMenu',
        name: "Go back to Main Menu"

    })
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: '=== Task list ===\n\n  Status   ID   User           Title',
            choices
        }
    ]);
}

function renderCreateTasks () {
    // TODO
}

module.exports = {renderMainMenu, renderListTasks, renderCreateTasks};
