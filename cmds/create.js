// Pasos estándar a hacer en todas las funciones
// TODO Leer archivo.json, crear si no existe.
// TODO Copiar información del archivo en un arrayTemporal
// TODO Inicia pregunta de los campos para crear la tarea, guardar en un objetoTemporal
// TODO Cuando complete los campos, hacer push del objeto temporal al arrayTemporal.
// TODO Escribir arrayTemporal en archivo.json
// TODO Mensaje de Éxito y/o Error
// TODO En todos los pasos siempre tener un mensaje de Error si algo falla, indicando el proceso que hace
// Pej: Si falla a leer el archivo, Error: File not found o si falla al escribir Error: File can not write.

const inquirer = require("inquirer");
const fs = require("fs");
const { create } = require("../src/questions");

let rawtodo = fs.readFileSync("../database/tasks.json");
const db = JSON.parse(rawtodo);
// const dbcache = db.tasks;

inquirer.prompt(create).then((answers) => {
  var data = fs.readFileSync("../database/tasks.json");
  var myObject = JSON.parse(data);

  myObject.push(answers);

  // const maxId = Math.max(...myObject.map((a) => a.id));
  // !maxId ? (answers.id = 1) : (answers.id = maxId + 1);

  answers.id = Math.floor(Math.random() * 100);

  console.log(answers);

  var answers = JSON.stringify(myObject, null, 2);

  fs.writeFile("../database/tasks.json", answers, (err) => {
    if (err) throw err;

    console.log("New data added");
  });
});
