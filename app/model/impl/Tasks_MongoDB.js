const mongoose = require("mongoose");
const {Schema} = mongoose;

/*
FONTS
 - Tutorial general express + mongoose: https://rahmanfadhil.com/express-rest-api/
 - Schema Types: https://mongoosejs.com/docs/schematypes.html
 - Unique, not null: https://stackoverflow.com/q/7955040
 - enum validation: https://stackoverflow.com/a/56336797
 - Storing time: Date == Date + Time: https://stackoverflow.com/a/33792310
 - Get current time: https://usefulangle.com/post/187/nodejs-get-date-time
 - Mongoose await connect: https://masteringjs.io/tutorials/mongoose/mongoose-connect-async
 - Mongoose connection options are no longer necessary: https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
 - Mongoose drop collection: https://kb.objectrocket.com/mongo-db/drop-collection-mongoose-607
 - A terminal cal fer servir exec després de find perquè mostri l'objecte sense el model: https://stackoverflow.com/a/30058711
 - Object.assign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

// DISCUSSIÓ: he intentat extendre la classe 'TaskModel' a 'Task' però no me'n surto en crear una sola interfície per fer servir a la resta d'implementacions com a Mongo. Penso que l'abstracció més general per les tres seria la del repositori amb tots els mètodes estàtics: Tasks.get(), Tasks.get(id), Tasks.update(object), Tasks.delete(object). Els objectes retornats els desacoblo de la lògica de database i que aquesta quedi tota a la classe Tasks.

// UPDATE: per fer tots els mètodes estàtics no cal crear classe >> refactor aproximació funcional.

const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: ['pending', 'open', 'finalized'],
        default: 'pending',
        required: true
    },
    start_time: {
        type: String,
        required: true,
        default: new Date()
    },
    end_time: Date,
    author: {
        type: String,
        required: true
    }
})

const TaskModel = mongoose.model("Task", schema);

async function getTask(id) {
    if(id){
        return await TaskModel.findById(id).exec();
    }
}

async function getAllTasks() {
    return await TaskModel.find().exec();
}

async function saveNewTask(object){
    return await new Promise(async resolve => {
        let task;
        task = await new TaskModel(object);
        await task.save(error => {
            if(error)
                console.log(`Error guardant task: ${error}`)
        });
        console.log(`Task Saved: ${task}`)
        object._id = task._id;
        resolve(task._id);
    })
}

async function updateTask(_id, object){
    await TaskModel.findByIdAndUpdate(object._id, object).exec();

}

async function deleteTask(object){
    // Se li pot passar l'objecte a eliminar o directament la _id
    let _id;

    // Cas: se li passa un objecte a eliminar
    if('_id' in object) {
        _id = object._id;
    }
    // Cas: se li passa directament una _id
    if(typeof object === 'string'){
        _id = object;
    }

    // Si input vàlid, elimina
    if(_id){
        try {
            // Si no troba l'_id llença una excepció que cal recuperar perquè no trenqui l'app
            await TaskModel.deleteOne({_id});
        } catch (e) {
            console.log(`Error eliminant task: ${_id}`);
        }
    }
}

async function dropTasksCollection() {
    await new Promise(resolve => {
        try {
            mongoose.connection.db.dropCollection("tasks", () => {
                resolve();
            });
        } catch (e) {
            console.log(`Error eliminant tasks collection: ${e}`);
            resolve(); // No faig reject pq no vull llençar l'excepció de nou
        }
    })

}

async function demo(){
    console.log("Demo MongoDB App Running...");

    // Restart de database a cada rerun de demo
    await dropTasksCollection();

    // Crea task
    let task1 = {
        text: 'Crear TO-DO app',
        author: 'Guillem Parrado'
        // No cal state: és required però s'inicialitza sol a 'pending'
        // No cal start_date: és required però s'inicialitza sol a current time
    }

    // Guarda task
    const task1_id = await saveNewTask(task1);


    // Crea second task
    let task2 = {
        text: '2nd Task',
        author: 'Laura O'
    };

    // Save task
    const task2_id = await saveNewTask(task2);

    // Crea third task
    let task3 = {
        text: '3rd Task',
        author: 'Anon.'
    };

    // Save task
    const task3_id = await saveNewTask(task3);

    // Espero 100ms a que estiguin disponibles a la base de dades, si es fa immediatament no ho estan
    setTimeout(async ()=> {

        // Recupera tots els tasks
        const tasks = await getAllTasks();
        console.log(tasks);

        // Recupera un task a partir d'una id
        const recovered_1st_task = await getTask(task1_id);      // recupera 1r task
        console.log(recovered_1st_task);

        // Modifica un task
        const recovered_2nd_task = await getTask(task2_id);             // recupera 2n task
        recovered_2nd_task.author = "Patricia Gonzalez";                // treballem sobre task i el modifiquem
        await updateTask(recovered_2nd_task._id, recovered_2nd_task);   // Guardem canvis de tornada a DB

        // Elimina tasks
        await deleteTask(task1_id);    // A partir d'una id
        await deleteTask(task3);       // A partir d'un task

        // Finalment, torno a fer un getAll per comprovar que s'han aplicat els canvis. Hi hauria d'haver només la 2a tasca i amb l'autor modificat.
        console.log(await getAllTasks());

        // Acabo Demo
        process.exit(0);

    }, 100)

    // COMENTARIS FINALS: si ja es té l'objecte en memòria no cal anar-lo recuperant cada cop. Per exemple en aquesta demo task1 i task2 ja estaven en memòria (en aquest cas no calia recuperar-los altre cop per treballar-hi). A UI segurament caldrà recuperar-ho tot per mostrar a usuari i quan aquest seleccioni, es pot passar l'objecte sencer sobre el que treballar en comptes de passar només la id per evitar haver de tornar a recuperar quan es treballi a business logic.
}

module.exports = { getTask, getAllTasks, saveNewTask, updateTask, deleteTask, demo }
