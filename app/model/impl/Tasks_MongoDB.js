const mongoose = require("mongoose");
//const AutoIncrement = require('mongoose-sequence')(mongoose);
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
 - Autoincrement: https://github.com/ramiel/mongoose-sequence
 */

// DISCUSSIÓ: he intentat extendre la classe 'TaskModel' a 'Task' però no me'n surto en crear una sola interfície per fer servir a la resta d'implementacions com a Mongo. Penso que l'abstracció més general per les tres seria la del repositori amb tots els mètodes estàtics: Tasks.get(), Tasks.get(id), Tasks.update(object), Tasks.delete(object). Els objectes retornats els desacoblo de la lògica de database i que aquesta quedi tota a la classe Tasks.

// UPDATE: per fer tots els mètodes estàtics no cal crear classe >> refactor aproximació funcional.

const schema = new Schema({
    description: {
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

//schema.plugin(AutoIncrement, {inc_field: 'id'});

const TaskModel = mongoose.model("Task", schema);

async function connect() {
    await mongoose.connect(process.env.MONGO_URI);
}

async function getTask(id) {
    if(id){
        const result = await TaskModel.findById(id).exec();
        result._doc.id = id;
        return result._doc;
    }
}

async function getAllTasks() {
    const results =  await TaskModel.find().exec();
    let docs = [];
    for (const result of results) {
        result._doc.id = result._doc._id;
        docs.push(result._doc);
    }
    return docs;
}

async function saveNewTask(object) {
    return await new Promise(async resolve => {
        let task;
        task = await new TaskModel(object);
        await task.save(error => {
            if (error)
                console.log(`Error guardant task: ${error}`)
        });
        object.id = task._id;
        object.start_time = task.start_time;
        object.state = task.state;
        console.log(`Task Saved: ${JSON.stringify(object, null, 4)}`)
        resolve();
    })
}

async function updateTask(id, object){
    await TaskModel.findOneAndUpdate({_id: id}, object).exec();
}

async function deleteTask(object){
    // Se li pot passar l'objecte a eliminar o directament la _id
    let _id;
    // Cas: se li passa directament una _id
    if(object.constructor.name === "ObjectId"){
        _id = object;
    }
    // Cas: se li passa un objecte a eliminar
    else if('id' in object) {
        _id = object.id;
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

async function deleteAll() {
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


module.exports = { connect, getTask, getAllTasks, saveNewTask, updateTask, deleteTask, deleteAll }
