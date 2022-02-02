const DB_PROVIDER = process.env.DATABASE_PROVIDER;
let provider;

switch (DB_PROVIDER.toUpperCase()) {
    case "JSON":
        provider = require("../repositories/JSONRepository");
        break;
    case "MONGO":
         try {
             provider = require("../repositories/MongoRepository");
         } catch (error) {
                console.log("MongoDB is not installed. Please install it to use MongoDB as a database provider.");
            }
        break;
    case "MYSQL":
        provider = require("../repositories/MySqlRepository");
        break;
    default:
        provider = require("../repositories/JSONRepository");
}

function getTask(taskId) {
    return provider.getElementById(taskId);
}

function getTasks() {
    return provider.getElements();
}

function createTask(task) {
    return provider.createElement(task);
}

function updateTask(task) {
    return provider.updateElementById(task);
}

function deleteTask(taskId) {
    return provider.deleteElementById(taskId);
}

module.exports = {  getTask, getTasks, createTask, updateTask, deleteTask };

