const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const {TaskInterface, Task} = require('../models/TaskModel');

const TaskModel = mongoose.model('Task', new Schema(TaskInterface));

mongoose.connect('mongodb://localhost/tasks').then(() => console.log('Connected to MongoDB localhost'));

const getElementById = async (id) => {

    const task = await TaskModel.findById(id);

    return modelToClass(Task, task);
    
}

const getElements = async () => {

    const tasks = await TaskModel.find({});

    return tasks.map(task => modelToClass(Task, task));
}

const createElement = async (data) => {

    // const dataModeled = classToModel(TaskInterface, data);

    const taskDoc = await TaskModel.create(dataModeled);
    
    return modelToClass(Task, taskDoc);
}

const deleteElementById = async (id) => {

    await TaskModel.findByIdAndDelete(id);
    
}

const updateElementById = async (id, data) => {

    
    const taskDoc = await TaskModel.findByIdAndUpdate(id, data);
    
    return modelToClass(Task, taskDoc); 
    
}



// const classToModel = (modelInterface, classTarget) => {
//     let modelToFill = {};
//     for (let key in modelInterface) {
//         if (key === 'id') {continue;}

//         modelToFill[key] = classTarget[key];
//     }

//     return modelToFill;
// }

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