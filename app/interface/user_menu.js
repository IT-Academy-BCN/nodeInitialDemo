'use strict';

const inquirer = require('inquirer');

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

function renderUserSelect(userList) {
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

module.exports = {renderUserMenu, renderUserSelect, renderUserCreate};
