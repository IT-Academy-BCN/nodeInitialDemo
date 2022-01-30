const DB_PROVIDER = process.env.DATABASE_PROVIDER;
let provider;

switch (DB_PROVIDER.toUpperCase()) {
    case "JSON":
        provider = require("../repositories/JSONRepository");
        break;
    case "MONGO":
        provider = require("../repositories/MongoRepository");
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
    return provider.createTask(task);
}

function updateTask(task) {
    return provider.updateTask(task);
}

function deleteTask(taskId) {
    return provider.deleteTask(taskId);
}

module.exports = {  getTask, getTasks, createTask, updateTask, deleteTask };

