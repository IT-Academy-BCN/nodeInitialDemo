/*
    README: This module controls the flow of the screen of the inquirer. 
            It has the logic to know which screen has to be shown into console.
*/

"use strict";

// Imports
const {
  renderUserMenu,
  renderUserSelect,
  renderUserCreate,
} = require("./user_menu");
const {
  renderMainMenu,
  renderCreateTask,
  renderListTasks,
  renderSeeTask,
  pause,
} = require("./main_menu");
const { exit } = require("process");
const TaskList = require("../clases/TaskList");
const {
  renderTaskMenu,
  renderUpdateTaskMenu,
  renderUpdateTitle,
} = require("./task_menu");
const { Console } = require("console");
const { renderNewTitle } = require("../interface/new_task_menu");

// Stages of our inquire flow
const userMenu = Symbol("userMenu");
const userSelect = Symbol("userSelect");
const userCreate = Symbol("userCreate");
const mainMenu = Symbol("mainMenu");
const createTask = Symbol("createTask");
const listTasks = Symbol("listTasks");
const taskMenu = Symbol("taskMenu");
const updateTaskMenu = Symbol("updateTaskMenu");
const updateTaskTitle = Symbol("updateTaskTitle");

// our class controller
const taskList = new TaskList();

// Flow control variable
let nextScreen = userMenu;

async function logic() {
  try {
    let answer = "";
    let message = "";
    let task = "";
    let user = "";
    let userList = "";

    while (true) {
      console.clear(); // Clear console

      console.log(message); // Show message on console.

      message = ""; // Clear message

      switch (nextScreen) {
        case userMenu:
          answer = await renderUserMenu();
          switch (answer.userMenu) {
            case "select":
              userList = await taskList.getUsers();
              if (userList.length) {
                nextScreen = userSelect;
              } else {
                message = `There is no user yet.`;
                nextScreen = userCreate; // As there is no user created yet, go to createUser screen
              }
              break;

            case "create":
              nextScreen = userCreate; // Go to createUser screen
              break;

            case "exit":
              console.log("Bye :)");
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
          await taskList.createUser(answer.username);
          nextScreen = userMenu; // After user is created we go to userMenu screen
          break;

        case mainMenu:
          answer = await renderMainMenu();

          switch (answer.mainMenu) {
            case "createTask":
              nextScreen = createTask;              
              break;

            case "listTasks":
              nextScreen = listTasks;
              break;

            case "changeUser":
              nextScreen = userMenu;
              break;

            case "exit":
              console.log("Bye :)");
              exit(0);

            default:
              throw new Error("Wrong mainMenu option");
          }

          break;

        case listTasks:
          answer = await renderListTasks();
          if (answer.task === "mainMenu") {
            nextScreen = mainMenu;
          } else {
            task = answer.task;
            nextScreen = taskMenu;
          }
          break;

        case taskMenu:
          answer = await renderTaskMenu(task);

          switch (answer.taskMenu) {
            case "deleteTask":
              // TODO
              await taskList.deleteTask(task);
              nextScreen = listTasks;
              break;

            case "updateTask":
              nextScreen = updateTaskMenu;
              break;

            case "mainMenu":
              nextScreen = mainMenu;
              break;

            default:
              throw new Error("Wrong taskMenu option");
          }

          break;

        case updateTaskMenu:
          answer = await renderUpdateTaskMenu(task);
          switch (answer.UpdateOptionsMenu) {
            case "updateStatus":
              await taskList.updateTaskStatus(task);
              nextScreen = updateTaskMenu
              break;

            case "updateTitle":
              nextScreen = updateTaskTitle;
              break;

            case "mainMenu":
              nextScreen = mainMenu;
              break;

            default:
              throw new Error("Wrong UPDATE taskMenu option");
          }
          break;

        case updateTaskTitle:
          answer = await renderUpdateTitle(task);
          let updatedTaskTitle = answer.updatedTitle;
          await taskList.updateTaskTitle(task, updatedTaskTitle);
          nextScreen = updateTaskMenu;
          break;

        case createTask:
          answer = await renderNewTitle();
          let newTitle = answer.newTitle;
          await taskList.createTask(newTitle, user);
          nextScreen = mainMenu;
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
