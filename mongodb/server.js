const mongoose = require("mongoose");

//Connect to database
const user = "test";
const password = "test1234";
const dbName = "todoList";
const uri = `mongodb+srv://${user}:${password}@cluster0.7hafx.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));

const Task = require("./models/tasks.js");

//Add Task
const addTask = async (task) => {
  try {
    await Task.create(task);
    console.info("Nueva tarea añadida");
    mongoose.disconnect();
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
  }
};

//Find Task
const findTask = async (id) => {
  try {
    const findTask = await Task.findById(id).exec();
    console.info(findTask);
    mongoose.disconnect();
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
  }
};

module.exports = {
  addTask,
  findTask,
};
