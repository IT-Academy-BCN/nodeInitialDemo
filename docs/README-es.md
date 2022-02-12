# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻

_Proyecto realizado como trabajo del Sprint 3.3 del curso node.js en IT Academy Barcelona por [David](https://github.com/dmoralesl), [Eloi](https://github.com/Eloielbonnoi) y [Daniel](https://github.com/DanielEspanadero)._

## Empezando 🚀

_Estas instrucciones le permitirán obtener una copia de trabajo del proyecto en su máquina local para fines de desarrollo y prueba._

### Traducciones 💬

_Este archivo README también está disponible en otros idiomas:_
- [Catalán](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README-cat.md)
- [Inglés](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README.md)

### Requisitos previos 📋

_Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:_
- [Visual Studio Code] (https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQL Server](https://dev.mysql.com/downloads/)

### Instalación 🔧

_Recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:_
```
npm install
```

## Comandos para ejecutar ⌨️

⚠️ ANTES DE COMENZAR, RECUERDA TENER INICIADO EL SERVIDOR DE MONGODB Y MYSQL ⚠️

_Una vez que todos los programas y dependencias necesarios estén instalados, simplemente ejecute el siguiente comando:_
```
npm start
```

## Ejecución del proyecto ⚙️

_Si has realizado correctamente los pasos anteriores, verás un menú interactivo, para moverte por él puedes utilizar las teclas de flecha arriba ▲ y flecha abajo ▼ o si lo prefieres puedes utilizar los números del teclado._

### Menú de base de datos 📀

_El primer menú que verás es el que te permitirá seleccionar la base de datos que deseas utilizar, puedes elegir JSON, MONGODB o MYSQL, recuerda que para utilizar MONGODB o MYSQL tienes que tener activado el servidor respectivo._

### Menú principal 🗂

_Una vez que hayas elegido la base de datos que quieres utilizar, podrás visualizar el menú principal, donde podrás moverte por las diferentes opciones, como crear tareas, leer tareas, borrar tareas..._

#### Crear tarea 📝
#### Leer todas las tareas 📖
#### Leer tareas completadas ✔️
#### Leer tareas pendientes ❌
#### Actualización de tarea 📖✍️
#### Cambio pendiente/completado 🚥
#### Eliminar tarea 🗑🔥🧨

## Construido con 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [MongoDB](https://docs.mongodb.com/) - Base de datos no relacional utilizada para el proyecto.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - ODM de MongoDB.
* [MySQL](https://dev.mysql.com/) - Base de datos relacional utilizada para el proyecto.
* [Sequelize](https://sequelize.org/) - ORM de MySQL.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Biblioteca para crear una consola interactiva.
* [Colorette](https://github.com/jorgebucaran/colorette) - Biblioteca para agregar colores a la consola.

## Versionado 📌
_Hemos utilizado versiones semánticas [SemVer](http://semver.org/) para esta aplicación. Para todas las versiones disponibles, consulte las [etiquetas en este repositorio](https://github.com/DanielEspanadero/nodeInitialDemo/tree/dev-teams) (Tenga en cuenta que hay otras ramas con diferentes tareas en este mismo repositorio)._

## Autores ✒️
* [David Morales](https://github.com/dmoralesl) - *Estructura del proyecto, servicio de tareas, repositorio mongoDB y corrección de errores.*
* [Eloi el Bon Noi](https://github.com/Eloielbonnoi) - *Esquema de la BD, y repositorio completo de MySQL.*
* [Daniel Españadero](https://github.com/DanielEspanadero) - *Modelo de tareas, repositorio JSON, interacción con el usuario y documentación del proyecto.*

## Licencia 📄
_Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENCIA](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/LICENSE) para más detalles._


## ¿Cómo hicimos este proyecto? 📝

_Para llevar a cabo este proyecto nos hemos organizado con la [github project tool](https://github.com/DanielEspanadero/nodeInitialDemo/projects/1), hemos estado haciendo reuniones semanales de seguimiento, asignando tareas y manteniendo contacto prácticamente cada dia a través de discord._
_En la primera reunión acordamos seguir todos el mismo camino a la hora de llevar a cabo el proyecto, también repartimos las tareas que iba a realizar cada uno de los miembros del equipo y empezamos a definir la estructura._
_Para aplicar la [metodología de gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) usamos dev-teams como rama de producción y dev-teams-develop como rama de desarrollo. Desde la rama de desarrollo hemos ido creando las ramas para llevar a cabo las diferentes tareas asignadas (Para nombrar las ramas de 'features' usamos 'feature/#n' siendo 'n' el número de tarea asignado por github project tool) y una vez que la tarea fue completada y revisada, hicimos una solicitud de pull request desde la rama 'feature/#n' a la rama 'dev-teams-develop'._
_Para realizar la estructura del proyecto teníamos en mente varias opciones, pero nos decantamos por esta ya que era la que mejor se adaptaba al tipo de proyecto que teníamos que realizar. En app > helpers > interaction.js está toda la lógica de la interacción con el usuario realizada con inquirer. En app > models > taskModel.js está el modelo de tareas que hemos usado para luego hacer los esquemas y modelos de las bases de datos, que están en la carpeta de repositories. En app > services > taskServices.js es donde se encuentran las funciones que se encargan de realizar un CRUD a través de los providers de las bases de datos. Y app > app.js es el archivo inicial, donde unimos el Task Service con la interacción con el usuario ejecutándolo a través de la función main()._
_Por último mencionar que hemos estado supervisando en todo momento que todo funcione correctamente y en las diferentes reuniones que hemos tenido hemos expresado nuestras dudas, inquietudes e ideas para mejorar el proyecto._