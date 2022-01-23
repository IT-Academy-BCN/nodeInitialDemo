const inquirer = require("inquirer");
const fs = require("fs");
const { listAll } = require("../src/questions");
let dbcache = [];

inquirer.prompt(listAll).then((todos) => {
  fs.readFile("../database/tasks.json", (err, rawdata) => {
    if (!err) {
      dbcache = JSON.parse(rawdata);
      console.table(dbcache);
    } else {
      console.log("No existen tareas en la Base de Datos.");
      let emptyFile = JSON.stringify([{}], null, 2);
      fs.writeFile("../database/tasks.json", emptyFile, (err) => {
        if (err) throw err;
      });
    }
  });
  console.log(todos);
});
