/*
FONTS:
 - https://attacomsian.com/blog/check-if-javascript-object-is-empty
 - json file to object: https://stackoverflow.com/a/34789405
 - object to json file: https://stackoverflow.com/a/63856947
 - https://contactmentor.com/find-object-in-array-of-objects/
 */

const fs = require('fs');

class Data {
    filepath = `./appdata.json`;
    tasks = [];

    loadFile() {
        let data = JSON.parse(fs.readFileSync(this.filepath).toString());
        if(Object.entries(data).length > 0 && 'tasks' in data)
            this.tasks = data.tasks;
    }

    saveFile() {
        const data = { tasks: this.tasks };
        const json = JSON.stringify(data, null, 4);
        fs.writeFileSync(this.filepath, json);
    }

    constructor() {
        this.loadFile();
    }

    getTaskIndex(id) {
        return this.tasks.findIndex(task => task.id === id);
    }

    getTask(id) {
        return this.tasks[this.getTaskIndex(id)];
    }

    getAllTasks() {
        return this.tasks;
    }

    saveNewTask(task) {
        this.tasks.push(task);
        this.saveFile();
    }

    updateTask(id, task) {
        this.tasks[this.getTaskIndex(id)] = task;
        this.saveFile();
    }

    deleteTask(id) {
        this.tasks.splice(this.getTaskIndex(id), 1);
    }
}

function demo() {

}

const data = new Data();

module.exports = {
    getTask: data.getTask,
    getAllTasks: data.getAllTasks,
    saveNewTask: data.saveNewTask,
    updateTask: data.updateTask,
    deleteTask: data.deleteTask,
    demo}
