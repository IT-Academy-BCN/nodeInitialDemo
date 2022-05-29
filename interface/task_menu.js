"use strict";

const inquirer = require("inquirer");

const TaskList = require("../clases/TaskList");

const taskList = new TaskList();

function printTask(task) {
  // Print task via command line
  const { status, id, createdBy, title, createdAt, startedAt, finishedAt } = task;

  console.table({
    status,
    id,
    title,
    createdBy,
    createdAt: (createdAt ? createdAt.toString(): createdAt),
    startedAt: (startedAt? startedAt.toString(): startedAt),
    finishedAt: (finishedAt ? finishedAt.toString(): finishedAt)
  });
}

async function renderTaskMenu(taskId) {
  const task = await taskList.getTask(taskId);
  printTask(task);

  return inquirer.prompt([
    {
      type: "list",
      name: "taskMenu",
      message: "=== Task Menu ===",
      choices: [
        {
          value: "updateTask",
          name: "Update task",
        },
        {
          value: "deleteTask",
          name: "Delete task",
        },
        {
          value: "mainMenu",
          name: "Go to Main Menu",
        },
      ],
    },
  ]);
}

async function renderUpdateTaskMenu(taskId) {
   const task = await taskList.getTask(taskId);

  // Print task via command line
  printTask(task);

  let updateStatus = '';
  if (task.status === 'TODO') {
    updateStatus = 'Update status (-> ONGOING)'
  } else if (task.status === 'ONGOING') {
    updateStatus = 'Update status (-> DONE)';
  } else {
    updateStatus = 'Update status (Already DONE)'
  }

  return inquirer.prompt([
    {
      type: "list",
      name: "UpdateOptionsMenu",
      message: "=== Task Update Options ===",
      choices: [
        {
          value: "updateStatus",
          name: updateStatus,
        },
        {
          value: "updateTitle",
          name: "Update title",
        },
        {
          value: "mainMenu",
          name: "Go to Main Menu",
        },
      ],
    },
  ]);
}

async function renderUpdateTitle(taskId) {

  const task = await taskList.getTask(taskId);

  // Print task via command line
  printTask(task);

  console.log("=== Update task description ===");
  return inquirer.prompt([
    {
      type: "input",
      name: "updatedTitle",
      message: "Input new title for this task:",
    },
  ]);
}

function renderDeleteTask(taskId) {
  // TODO
}

module.exports = { renderTaskMenu, renderUpdateTaskMenu, renderUpdateTitle, renderDeleteTask };
