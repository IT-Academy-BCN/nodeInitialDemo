const crypto = require('crypto');

class Task {

    id = '';
    desc = '';
    completedIn = null;

    constructor(){
        this.id = crypto.randomUUID();
        this.desc = desc;
        this.completedIn = null
    }
};

module.exports = Task;

