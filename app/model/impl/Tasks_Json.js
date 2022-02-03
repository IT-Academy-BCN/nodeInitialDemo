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
    if (fs.existsSync(filepath)) {
        loadFile();
    }
    let max_id = -1;
    if(tasks.length > 0) {
        /*
        // Versió async
        max_id = await (tasks.reduce((previous, current) => Math.max(previous.value, current.value)));
         */
        for (const task of tasks) {
            max_id = Math.max(task.id, max_id);
        }
    }

    function loadFile() {
        let data = JSON.parse(fs.readFileSync(filepath).toString());
        if('tasks' in data)
            tasks = data.tasks;
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
            const data = { tasks };
            const json = JSON.stringify(data, null, 4);
            fs.writeFile(filepath, json, 'utf8', (err)=>{
                if(err)     reject();
                else        resolve();
            })
        })
    }


    function getTaskIndex(id) {
        return tasks.findIndex(task => task.id === id);
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
        tasks.push(task);
        await saveFile();
    }

    async function updateTask(id, task) {
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

    return {getTask, getAllTasks, saveNewTask, updateTask, deleteTask, deleteAll};
}

async function demo(){
    console.log("Demo JSON App Running...");

    const {getTask, getAllTasks, saveNewTask, updateTask, deleteTask, deleteAll} = await Factory();


    // Restart de database a cada rerun de demo
    await deleteAll();


    // Crea task
    let task1 = {
        text: 'Crear TO-DO app',
        author: 'Guillem Parrado'
        // No cal state: és required però s'inicialitza sol a 'pending'
        // No cal start_date: és required però s'inicialitza sol a current time
    }

    // Guarda task
    await saveNewTask(task1);


    // Crea second task
    let task2 = {
        text: '2nd Task',
        author: 'Laura O'
    };

    // Save task
    await saveNewTask(task2);

    // Crea third task
    let task3 = {
        text: '3rd Task',
        author: 'Anon.'
    };

    // Save task
    await saveNewTask(task3);

    // Recupera tots els tasks
    const tasks = await getAllTasks();
    console.log(tasks);

    // Recupera un task a partir d'una id
    const recovered_1st_task = await getTask(task1.id);      // recupera 1r task
    console.log(recovered_1st_task);



    // Modifica un task
    const recovered_2nd_task = await getTask(task2.id);             // recupera 2n task
    recovered_2nd_task.author = "Patricia Gonzalez";                // treballem sobre task i el modifiquem
    await updateTask(recovered_2nd_task.id, recovered_2nd_task);   // Guardem canvis de tornada a DB


    // Elimina tasks
    await deleteTask(task1.id);    // A partir d'una id
    await deleteTask(task3);       // A partir d'un task

    // Finalment, torno a fer un getAll per comprovar que s'han aplicat els canvis. Hi hauria d'haver només la 2a tasca i amb l'autor modificat.
    console.log(await getAllTasks());

    // Acabo Demo
    process.exit(0);

}

module.exports = {...Factory(), demo}
