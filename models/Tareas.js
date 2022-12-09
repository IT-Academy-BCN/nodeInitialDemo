const Task = require('./Task');

class Tasks {
  list = {};
  constructor() {
    this.list = {};
  }

  get getList() {
    const listAsArray = [];
    Object.keys(this.list).forEach((k) => {
      const task = this.list[k];
      listAsArray.push(task);
    });
    return listAsArray;
  }

  newList(username) {
    const array = [];
    Object.keys(this.list).forEach((k) => {
      const task = this.list[k];
      const { createdBy } = task;
      if (username === createdBy) {
        array.push(task);
      }
    });
    return array;
  }

  createTask(description, username) {
    const task = new Task(description, username);
    this.list[task.id] = task;
  }

  loadTasks(tasks) {
    tasks.forEach((task) => {
      this.list[task.id] = task;
    });
  }

  completeList(username) {
    console.log();
    let count = 0;
    this.getList.forEach((task) => {
      const { desc, completedOn, createdBy } = task;
      if (username === createdBy) {
        count += 1;
        const state = completedOn ? 'Completed'.green : 'Pending'.red;

        console.log(`${count}. ${desc} :: ${state}`);
      }
    });
  }

  listCompletedTasks(completed = true, username) {
    let count = 0;
    this.getList.forEach((task) => {
      const { desc, completedOn, createdBy } = task;
      const state = completedOn ? 'Completed'.green : 'Pending'.red;

      if (completed) {
        if (completedOn && createdBy === username) {
          count += 1;
          console.log(`${count.toString().green}: ${desc} :: ${completedOn.green}`);
        }
      } else {
        if (!completedOn && createdBy === username) {
          count += 1;

          console.log(`${count.toString().green}. ${desc} :: ${state}`);
        }
      }
    });
  }

  deleteTask = (id) => {
    if (this.list[id]) {
      delete this.list[id];
    }
  };

  toggleCompleted = (ids) => {
    ids.forEach((id) => {
      const task = this.list[id];
      if (!task.completedOn) {
        task.completedOn = new Date().toISOString();
      }
    });

    this.getList.forEach((task) => {
      if (!ids.includes(task.id)) {
        this.list[task.id].completedOn = null;
      }
    });
  };
}

module.exports = Tasks;