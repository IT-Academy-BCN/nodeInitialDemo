const { v4: uuidv4 } = require('uuid');

class Task {
  id;
  desc;
  completedOn = null;
  createdBy;

  constructor(desc, createdBy) {
    this.id = uuidv4();
    this.desc = desc;
    this.createdBy = createdBy;
  }
}

module.exports = Task;