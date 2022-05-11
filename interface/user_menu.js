'use strict';

const inquirer = require('inquirer');

function renderUserMenu() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userMenu',
            message: '=== User Menu ===',
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

function renderUserSelect(userList) {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'username',
            message: '=== Select User ===',
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

module.exports = {renderUserMenu, renderUserSelect, renderUserCreate};
