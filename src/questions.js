const create = [
  {
    name: "name",
    message: "Ingresa el nombre de la tarea:",
  },
  {
    name: "startDate",
    message: "Fecha de Inicio:",
  },
  {
    name: "endDate",
    message: "Fecha de Fin:",
  },
  {
    name: "description",
    message: "Descripción de la tarea:",
  },
  {
    name: "user",
    message: "Usuario Asignado:",
  },
];

const remove = [
  {
    name: "nameTask",
    message: "Qué tarea vas a eliminar?:", //Decidir como identificar la tarea a eliminar
  },
  {
    type: "list",
    name: "confirmation",
    message: "Deseas borrar?",
    choices: ["Yes", "No"],
  },
];

const find = [
  {
    name: "name",
    message: "Donde quieres buscar?:",
  },
  {
    name: "startDate",
    message: "Fecha de Inicio:",
  },
  {
    name: "endDate",
    message: "Fecha de Fin:",
  },
  {
    name: "description",
    message: "Descripción de la tarea:",
  },
  {
    name: "user",
    message: "Usuario Asignado:",
  },
];

const update = [
  {
    name: "name",
    message: "Qué tarea quieres modificar?",
  },
  {
    name: "startDate",
    message: "Fecha de Inicio:",
  },
  {
    name: "endDate",
    message: "Fecha de Fin:",
  },
  {
    name: "description",
    message: "Descripción de la tarea:",
  },
  {
    name: "user",
    message: "Usuario Asignado:",
  },
];

module.exports = { create, remove, find, update };
