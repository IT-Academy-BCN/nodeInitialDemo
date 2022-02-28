/*
FONTS:
 - https://attacomsian.com/blog/check-if-javascript-object-is-empty
 - json file to object: https://stackoverflow.com/a/34789405
 - object to json file: https://stackoverflow.com/a/63856947
 - https://contactmentor.com/find-object-in-array-of-objects/
 - check if file exists: https://stackoverflow.com/a/17699926
 - find max value in object array - https://stackoverflow.com/a/52916675  - No faig servir pq Factory en async no funciona bé
 */

const fs = require('fs');

function Factory() {
    const filepath = `./appdata.json`;
    let tasks = [];
    let max_id = -1;

    async function connect() {
        if (fs.existsSync(filepath)) {
            loadFile();
        }

        if (tasks.length > 0) {
            for (const task of tasks) {
                max_id = Math.max(task.id, max_id);
            }
        }
    }

    function loadFile() {
        try {
            let data = JSON.parse(fs.readFileSync(filepath).toString());
            tasks = data.tasks;
        } catch(e){
            // Error en parsing, desa nou file buit
            saveFile()
        }
    }

    /*
    async function loadFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filepath,  (error, content) => {
                if(error)
                    reject();
                const data = JSON.parse(content.toString());
                if(Object.entries(data).length > 0 && 'tasks' in data)
                    this.tasks = data.tasks;
                resolve();
            });
        })
    }
    */

    function saveFile() {
        return new Promise((resolve, reject) => {
            const data = {tasks};
            const json = JSON.stringify(data, null, 4);
            fs.writeFile(filepath, json, 'utf8', (err) => {
                if (err) reject();
                else resolve();
            })
        })
    }


    function getTaskIndex(id) {
        taskIndex = tasks.findIndex(task => task.id === parseInt(id));
        return taskIndex
    }

    async function getTask(id) {
        return tasks[getTaskIndex(id)];
    }

    async function getAllTasks() {
        return tasks;
    }

    async function saveNewTask(task) {
        // Assigna id amb autoincrement
        max_id += 1;
        task.id = max_id;
        // Assigna default values per camps obligatoris si nulls
        if (task.start_time == null)
            task.start_time = new Date();
        if (task.state == null)
            task.state = 'pending';

        tasks.push(task);
        await saveFile();
    }

    async function updateTask(id, task) {
        id = parseInt(id)
        originalTask = await getTask(id)
        task = {...originalTask, ...task, ...{id: id}}
        tasks[getTaskIndex(id)] = task;
        await saveFile();
    }

    async function deleteTask(id) {
        tasks.splice(getTaskIndex(id), 1);
        await saveFile();
    }

    async function deleteAll() {
        tasks = [];
        max_id = -1;
        await saveFile();
    }

    return {connect, getTask, getAllTasks, saveNewTask, updateTask, deleteTask, deleteAll};
}

module.exports = Factory();
