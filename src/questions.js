const create = [
  {
    type: "input",
    name: "name",
    message: "Ingresa el nombre de la tarea:",
  },
  {
    type: "input",
    name: "startDate",
    message: "Fecha de Inicio:",
  },
  {
    type: "input",
    name: "endDate",
    message: "Fecha de Fin:",
  },
  {
    type: "input",
    name: "description",
    message: "Descripción de la tarea:",
  },
  {
    type: "input",
    name: "user",
    message: "Usuario Asignado:",
  },
];

const remove = [
  // {
  //   type: "list",
  //   name: "dataBase",
  //   message: "Donde quieres buscar?:",
  //   choices: ["json", "sql", "mongo"],
  // },
  {
    type: "input",
    name: "taskIndex",
    message: "Ingresa el indice de la tarea que quieres eliminar?:",
  },
  {
    type: "list",
    name: "confirmation",
    message: "Deseas borrar?",
    choices: ["Yes", "No"],
  },
];

const findOne = [
  // {
  //   type: "list",
  //   name: "dataBase",
  //   message: "Donde quieres buscar?:",
  //   choices: ["json", "sql", "mongo"],
  // },
  {
    type: "input",
    name: "taskIndex",
    message: "Ingresa el indice de la tarea que quieres ver:",
  },
];

const listAll = [
  // {
  //   type: "list",
  //   name: "dataBase",
  //   message: "Donde quieres buscar?:",
  //   choices: ["json", "sql", "mongo"],
  // },
];

const update = [
  // {
  //   type: "list",
  //   name: "dataBase",
  //   message: "Donde quieres buscar?:",
  //   choices: ["json", "sql", "mongo"],
  // },
  {
    type: "input",
    name: "taskindex",
    message: "Ingresa el indice de la tarea que quieres modificar?",
  },
  {
    type: "input",
    name: "name",
    message: "Ingresa el NUEVO nombre de la tarea:",
  },
  {
    type: "input",
    name: "startDate",
    message: "NUEVA Fecha de Inicio:",
  },
  {
    type: "input",
    name: "endDate",
    message: "NUEVA Fecha de Fin:",
  },
  {
    type: "input",
    name: "description",
    message: "NUEVA Descripción de la tarea:",
  },
  {
    type: "input",
    name: "user",
    message: "NUEVO Usuario Asignado:",
  },
];

module.exports = { create, remove, findOne, listAll, update };
