#!/usr/bin/env node
const program = require("commander");
const message = require("../src/bienvenida");

program
  .description(message)
  .version("1.0.0", "-v, --version", "Para consultar la versión del programa")
  .command("list", "Mostrar tareas")
  .command("add", "Crear una nueva tarea")
  .command("remove", "Eliminar una tarea")
  .command("update", "Modificar una tarea")
  .command("find", "Buscar una tarea");

program.parse(process.argv);
