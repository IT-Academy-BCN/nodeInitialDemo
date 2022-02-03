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

async function getTask(taskId) {
    return provider.getElementById(taskId);
}

async function getTasks() {
    return provider.getElements();
}

async function getCompletedTasks() {
    const rawTasks = await provider.getElements();
    return rawTasks.find(task => task.isCompleted);
}

async function getPendingTasks() {
    const rawTasks = await provider.getElements();
    return rawTasks.find(task => !task.isCompleted);
}


async function createTask(task) {
    return provider.createElement(task);
}

async function updateTask(id, dataToUpdate) {
    return provider.updateElementById(id, dataToUpdate);
}

async function deleteTask(taskId) {
    return provider.deleteElementById(taskId);
}

module.exports = {  
    getTask, 
    getTasks, 
    getCompletedTasks, 
    getPendingTasks,
    createTask, 
    updateTask, 
    deleteTask
  };

