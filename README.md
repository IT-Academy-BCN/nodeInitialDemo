# Alocado setup bicéfalo para que Omar pueda corregir el Sprint 4.2

Este repositorio contiene dos subcarpetas: `sequelize` y `mongoose`, cada una con una versión diferente de la API REST creada con Node.js y Express.js.

Para ejecutar la versión con Sequelize, sigue estos pasos:

1. Abre una terminal y navega hasta la raíz del repositorio.
2. Ejecuta el siguiente comando:

    npm run sequelize

3. Este comando ejecutará el script `"sequelize"` definido en el archivo `package.json`que contiene ambas subcarpetas. Este script primero navegará hasta la subcarpeta `sequelize` con el comando `cd sequelize`, luego instalará las dependencias de esta versión de la API con `npm install`, y finalmente iniciará la API con `npm start`.

Para ejecutar la versión con Mongoose, sigue estos pasos:

1. Abre una terminal y navega hasta la raíz del repositorio.
2. Ejecuta el siguiente comando:

    npm run mongoose

3. Este comando ejecutará el script `"mongoose"` definido en el archivo `package.json`que, como hemos indicado antes, contiene ambas subcarpetas. Este script primero navegará hasta la subcarpeta `mongoose` con el comando `cd mongoose`, luego instalará las dependencias de esta versión de la API con `npm install`, y finalmente iniciará la API con `npm start`.
