const crypto = require('crypto');

class Task {

    // Initialize task and checking for some fields to be filled if value not provided
    constructor({
        id=crypto.randomUUID(), 
        title, 
        desc, 
        comment, 
        isCompleted=false, 
        createdAt=Date(), 
        completedAt}){
        
        if (!title) {
            throw new Error('Title is required');
        }

        this.id = id;
        this.title = title;
        this.desc = desc;
        this.comment = comment;
        this.isCompleted = isCompleted;
        this.createdAt = createdAt;
        this.completedAt = completedAt;
    }
};

const TaskInterface = {
    id: String,
    title: String,
    desc: String,
    comment: String,
    isCompleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    completedAt: Date
};

module.exports = {Task, TaskInterface};

