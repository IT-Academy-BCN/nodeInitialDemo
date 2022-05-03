'use strict';

const inquirer = require('inquirer');

// Stages of our inquire flow
const userMenu = Symbol("userMenu");
const userSelect = Symbol("userSelect");
const userCreate = Symbol("userCreate");
const mainMenu = Symbol("mainMenu");
const createTask = Symbol("createTask");
const listTasks = Symbol("listTasks");
const seeTask = Symbol("seeTask");

// Variables
let stage;
let userList = [];
let user;

function renderUserMenu() {
    console.log('=== User Menu ===');
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userMenu',
            message: 'Choose user',
            choices: [
                {
                    value: 'select',
                    name: 'Select user',
                },
                {
                    value: 'create',
                    name: 'Create new user',
                }
            ]
        }
    ])
}

function renderUserSelect() {
    console.log('=== Select User ===');
    return inquirer.prompt([
        {
            type: 'list',
            name: 'username',
            message: 'Choose user',
            choices: userList
        }
    ])
}

function renderUserCreate() {
    console.log('=== Create User ===');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Input new user name:'
        }
    ])
}


async function logic() {
    try {
        let answer;
        while (true) {
            console.clear();

            switch(stage){
                case userMenu:
                    answer = await renderUserMenu();
                    switch (answer.userMenu) {
                        case 'select':
                            stage = userSelect;
                            break;

                        case 'create':
                            stage = userCreate;
                            break;

                        default:
                            throw new Error("Incorrect renderUserMenu");
                    }
                    break;

                case userSelect:
                    answer = await renderUserSelect();
                    let userSelected = answer.username;
                    if(userSelected != null && userSelected != undefined && userSelected != ""){
                        user = userSelected;
                        stage = mainMenu;
                    } else {
                        stage = userMenu;
                    }
                    break;

                case userCreate:
                    answer = await renderUserCreate();
                    let userCreated = answer.username;
                    if(userCreated != null && userCreated != undefined && userCreated != ""){
                        userList.push({value: answer.username, name: answer.username}); // TODO: do this the right way
                    }
                    stage = userMenu;
                    break;

                case mainMenu:
                    console.log("mainMenu");
                    answer = await renderMainMenu();
                    break;

                case createTask:
                    console.log("createTask");
                    answer = await renderCreateTask();
                    break;

                case listTasks:
                    console.log("listTasks");
                    answer = await renderListTasks();
                    break;

                case seeTask:
                    console.log("seeTask");
                    answer = await renderSeeTask();
                    break;

                default:
                    break;

            }
        }
    } catch (err) {
        console.error(`Error in try/catch: ${err.message}`);
    }
}

if (userList.length){
    stage = userMenu;
} else {
    stage = userCreate;
}

module.exports = logic;