const fs = require('fs');
const { Task } = require('../models/TaskModel');

const archive = './data.json';

/* This file goal's is recreate an ORM like reading a JSON file placed in project db folder.
    The JSON file is used to store the tasks that the user has created. 
    When task is created, updated or deleted the file is updated.
    Reading methods returns Task model objects.
*/

const saveJsonDB = (data) => {
    fs.writeFileSync(archive, JSON.stringify(data));
};

// The readJsonDB() function is used for persistence, with it we can read a .json file that we have from a previous session.
const readJsonDB = () => {

    // This conditional is used to check if the file exists. If it doesn't exist, we create an empty file to work with.
    if (!fs.existsSync(archive)){
        saveJsonDB([]);
    }

    const info = fs.readFileSync(archive, {encoding: 'utf-8'});

    // I use JSON.parse() so that when reading it it returns an array and not a string.
    const data = JSON.parse(info);

    // Filling the array with Task model objects.
    const tasks = data.map(task => new Task(task));

    return tasks;
}


// These methods can be expanded with another type of interaction with the JSON file.
// For example we can create another reading method that get entire task as param (w/o ID)
// and search a task that match with all fields. 
const getElementById = async (id) => {
    const tasks = readJsonDB();

    return tasks.find(task => task.id === id);
}

const getElements = async () => {
    return readJsonDB();
}

const createElement = async (data) => {
    const tasks = readJsonDB();

    const task = new Task(data);

    tasks.push(task);

    saveJsonDB(tasks);

    return task;
}

const deleteElementById = async (id) => {
    const tasks = readJsonDB();

    const index = tasks.findIndex(task => task.id === id);

    tasks.splice(index, 1);

    saveJsonDB(tasks);

    return tasks;
}

const updateElementById = async (id, data) => {
    const tasks = readJsonDB();

    const index = tasks.findIndex(task => task.id === id);

    for (let key in data) {
        tasks[index][key] = data[key];
    }

    saveJsonDB(tasks);

    return tasks[index];
}


module.exports = {
    getElementById,
    getElements,
    createElement,
    deleteElementById,
    updateElementById,
};