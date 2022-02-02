const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const {TaskInterface, Task} = require('../models/TaskModel');

const TaskModel = mongoose.model('Task', new Schema(TaskInterface));

const getElementById = (id) => {
    TaskModel.findById(id, (err, task) => {
        if (err) {
            console.log(err);
        }
        return task;
    });
}

const getElements = () => {
    TaskModel.find({}, (err, tasks) => {
        if (err) {
            console.log(err);
        }
        return tasks;
    });
}

const createElement = async (data) => {

    await mongoose.connect('mongodb://localhost/tasks');

    const dataModeled = classToModel(TaskInterface, data);

    const taskDoc = await TaskModel.create(dataModeled);
    
    return modelToClass(Task, taskDoc);
}

const deleteElementById = (id) => {


    // return tasks;
}

const updateElementById = (id, data) => {


    // return tasks[index];
}



const classToModel = (modelInterface, classTarget) => {
    let modelToFill = {};
    for (let key in modelInterface) {
        if (key === 'id') {continue;}

        modelToFill[key] = classTarget[key];
    }

    return modelToFill;
}

const modelToClass = (classToFill, modelTarget) => {
    let rawObjectFromModel = modelTarget.toObject();
    rawObjectFromModel.id = modelTarget._id.toString();
    delete rawObjectFromModel._id;
    delete rawObjectFromModel.__v;
 
    return new classToFill(rawObjectFromModel);
}


module.exports = {
    getElementById,
    getElements,
    createElement,
    deleteElementById,
    updateElementById,
};