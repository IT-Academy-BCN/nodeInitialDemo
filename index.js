const program = require("commander");
const { prompt } = require("inquirer");
const message = require("./src/bienvenida");
const colors = require("colors");

const { addTask, findTask, getTasks } = require("./mongodb/server");
const { create, remove, findOne, update, listAll } = require("./src/questions");

program.version("1.0.0").description("Todo Program");
program
  .command("list")
  .alias("l")
  .description("Mostrar tareas")
  .action(() => {
    prompt(listAll).then((answers) => getTasks(answers));
  });

program
  .command("add")
  .alias("a")
  .description("Create a task")
  .action(() => {
    prompt(create).then((answers) => addTask(answers));
  });

program
  .command("remove")
  .alias("r")
  .description("Remove a task")
  .action(() => {
    prompt(remove).then((answers) => console.info(answers));
  });

program
  .command("update")
  .alias("u")
  .description("Update a task")
  .action(() => {
    prompt(update).then((answers) => console.info(answers));
  });

program
  .command("find")
  .alias("f")
  .description("Find a task")
  .action(() => {
    prompt({
      type: "input",
      name: "_id",
      message: "Ingresa el indice de la tarea que quieres ver:",
    }).then((answers) => findTask(answers));
  });

program.parse(process.argv);
