"use strict";

const inquirer = require("inquirer");

const TaskList = require("../clases/TaskList");

const taskList = new TaskList();

function renderTaskMenu(taskId) {
  const task = taskList.getTask(taskId);

  // Print task via command line
  const { status, id, createdBy, title, createdAt, startedAt, finishedAt } = task;
  console.table({ status, id, title, createdBy, createdAt, startedAt, finishedAt });

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

function renderUpdateTaskMenu(taskId) {
  const task = taskList.getTask(taskId);

  // Print task via command line
  const { status, id, createdBy, title, createdAt, startedAt, finishedAt } = task;
  console.table({ status, id, title, createdBy, createdAt, startedAt, finishedAt });

  return inquirer.prompt([
    {
      type: "list",
      name: "UpdateOptionsMenu",
      message: "=== Task Update Options ===",
      choices: [
        {
          value: "updateStatus",
          name: "Update status (TODO)",
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

function renderUpdateTitle(taskId) {
  const task = taskList.getTask(taskId);
  // Print task via command line
  const { status, id, createdBy, title, createdAt, startedAt, finishedAt } = task;
  console.table({ status, id, title, createdBy, createdAt, startedAt, finishedAt });

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
