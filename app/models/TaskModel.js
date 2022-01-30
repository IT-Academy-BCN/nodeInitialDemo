const crypto = require('crypto');

class Task {

    // Initialize task and checking for some fields to be filled if value not provided
    constructor(id, title, desc, isCompleted, createdAt, completedAt){
        if (!title) {
            throw new Error('Title is required');
        }

        this.id = id ? id : crypto.randomUUID();
        this.title = title;
        this.desc = desc;
        this.isCompleted = isCompleted ? isCompleted : false;
        this.createdAt = createdAt ? createdAt : new Date();
        this.completedAt = completedAt ? completedAt : null;
    }
};

module.exports = Task;

