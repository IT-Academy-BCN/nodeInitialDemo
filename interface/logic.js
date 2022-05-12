/*
    README: This module controls the flow of the screen of the inquirer. 
            It has the logic to know which screen has to be shown into console.
*/

'use strict';

// Imports
const {renderUserMenu, renderUserSelect, renderUserCreate} = require('./user_menu');
const {renderMainMenu, renderCreateTask, renderListTasks, renderSeeTask, pause} = require('./main_menu');
const { exit } = require('process');
const TaskList = require('../clases/TaskList');
const { renderTaskMenu } = require('./task_menu');
const { Console } = require('console');


// Stages of our inquire flow
const userMenu = Symbol("userMenu");
const userSelect = Symbol("userSelect");
const userCreate = Symbol("userCreate");
const mainMenu = Symbol("mainMenu");
const createTask = Symbol("createTask");
const listTasks = Symbol("listTasks");
const taskMenu = Symbol("taskMenu");

//
const taskList = new TaskList();


// Flow control variable
let nextScreen = userMenu;

// TODO: variables to be changed when DB module implemented.
let user;

/* 
Beware! userList is an array these objects

    {value: username, name: username}

This is done this way to easy the inquirer element list.
 */
let userList = ['Victor'];


async function logic() {
    try {
        let answer = '';
        let message = '' ;
        let task = '';
        while (true) {
            
            console.clear(); // Clear console

            console.log(message); // Show message on console.
 
            message = ''; // Clear message

            switch(nextScreen) {

                case userMenu:
                    answer = await renderUserMenu();
                    switch (answer.userMenu) {
                        case 'select':
                            if (userList.length){
                                nextScreen = userSelect;
                            } else {
                                message = `There is no user yet.`;
                                nextScreen = userCreate; // As there is no user created yet, go to createUser screen
                            }
                            break;

                        case 'create':
                            nextScreen = userCreate; // Go to createUser screen
                            break;

                        case 'exit':
                            console.log('Bye :)');
                            exit(0);

                        default:
                            throw new Error("Incorrect renderUserMenu");
                    }
                    break;

                case userSelect:
                    answer = await renderUserSelect(userList);
                    user = answer.username;
                    nextScreen = mainMenu; // After user is selected we go to mainMenu screen
                    break;

                case userCreate:
                    answer = await renderUserCreate();
                    let userCreated = answer.username;
                    if(userCreated != null && userCreated != undefined && userCreated != ""){

                        if (userList.some(e => e.name === answer.username)) {
                            message = `User already created.`;
                        } else {

                            userList.push({value: answer.username, name: answer.username});
                        }
                    }

                    nextScreen = userMenu; // After user is created we go to userMenu screen
                    break;

                case mainMenu:

                    answer = await renderMainMenu();
        
                    switch (answer.mainMenu) {
                        case 'createTask':
                            // TODO
                            exit(1);
                            break;

                        case 'listTasks':
                            nextScreen = listTasks;
                            break;

                        case 'changeUser':
                            nextScreen = userMenu;
                            break;

                        case 'exit':
                            console.log('Bye :)');
                            exit(0);

                        default:
                            throw new Error("Wrong mainMenu option")
                    }
                    
                    break;

                case listTasks:
                    answer = await renderListTasks();
                    if (answer.task === 'mainMenu'){
                        nextScreen = mainMenu;
                    } else {
                        task = answer.task;
                        nextScreen = taskMenu;
                    }
                    break;

                case taskMenu:

                    answer = await renderTaskMenu(task);

                    switch (answer.taskMenu) {
                        case 'deleteTask':
                            // TODO
                            exit(1);
                            break;

                        case 'updateTask':
                            // TODO
                            exit(1);
                            break;

                        case 'mainMenu':
                            nextScreen = mainMenu;
                            break;

                        default:
                            throw new Error("Wrong taskMenu option")
                    }

                    break;

                case createTask:
                    //TODO
                    exit(1);
                    break;

                default:
                    throw new Error("Incorrect stage");

            }
        }
    } catch (err) {
        console.error(`Error catch in ${__filename}: ${err.message}`);
    }
}

module.exports = logic;
