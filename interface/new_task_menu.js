"use strict";

const inquirer = require("inquirer");

function renderNewTitle(taskId) {
    console.log("=== New Task Title ===");
    return inquirer.prompt([
        {
        type: "input",
        name: "newTitle",
        message: "Input title for this task:",
        },
    ]);
}

module.exports = {
    renderNewTitle
}

