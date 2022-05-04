/*
    README: This module controls the flow of the screen of the inquirer. 
            It has the logic to know which screen has to be shown into console.
*/

'use strict';

// Imports
const {renderUserMenu, renderUserSelect, renderUserCreate} = require('./user_menu');
const {renderMainMenu, renderCreateTask, renderListTasks, renderSeeTask} = require('./main_menu');


// Stages of our inquire flow
const userMenu = Symbol("userMenu");
const userSelect = Symbol("userSelect");
const userCreate = Symbol("userCreate");
const mainMenu = Symbol("mainMenu");
const createTask = Symbol("createTask");
const listTasks = Symbol("listTasks");
const seeTask = Symbol("seeTask");

// Flow control variable
let stage = userMenu;

// TODO: variables to be changed when DB module implemented.
let user;

/* 
Beware! userList is an array these objects

    {value: username, name: username}

This is done this way to easy the inquirer element list.
 */
let userList = [];


async function logic() {
    try {
        let answer = '';
        let message = '' ;
        while (true) {
            
            console.clear(); // Clear console

            console.log(message); // Show message on console.
 
            message = ''; // Clear message

            switch(stage) {

                case userMenu:
                    answer = await renderUserMenu();
                    switch (answer.userMenu) {
                        case 'select':
                            if (userList.length){
                                stage = userSelect;
                            } else {
                                message = `There is no user yet.`;
                                stage = userCreate; // As there is no user created yet, go to createUser screen
                            }
                            break;

                        case 'create':
                            stage = userCreate; // Go to createUser screen
                            break;

                        default:
                            throw new Error("Incorrect renderUserMenu");
                    }
                    break;

                case userSelect:
                    answer = await renderUserSelect(userList);
                    user = answer.username;
                    stage = mainMenu; // After user is selected we go to mainMenu screen
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

                    stage = userMenu; // After user is created we go to userMenu screen
                    break;

                case mainMenu:
                    //TODO
                    {
                        console.log('TODO: renderMainMenu');
                        exit(1);
                    }
                    break;
                    
                case createTask:
                    //TODO
                    {
                        console.log('TODO: createTask');
                        exit(1);
                    }
                    break;
                    
                case listTasks:
                    //TODO
                    {
                        console.log('TODO: listTasks');
                        exit(1);
                    }
                    break;
                    
                case seeTask:
                    //TODO
                    {
                        console.log('TODO: seeTask');
                        exit(1);
                    }
                    break;

                default:
                    throw new Error("Incorrect stage");
                    break;

            }
        }
    } catch (err) {
        console.error(`Error catch in ${__filename}: ${err.message}`);
    }
}

module.exports = logic;