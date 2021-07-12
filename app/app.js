const express = require("express");
const cors = require("cors");
const { cacheControl } = require("./middlewares/middlewares");
const router = require("./routes/index");

const app = express();

app.use("/users", router.users);
app.use("/upload", router.upload);
app.use("/secret", router.secret);
app.use("/register", router.register);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

/*

Hay un problema con el ejercicio 2 del nivel 1: se comprueba la extensión del archivo
pero el archivo no se sube al server en ningún momento!
// Revisar


en la carpeta middlewares tienes cosas como la función que devuelve el tiempo, 
eso debería estar en helpers (si no tiene un next() no es un middleware)

// Middleware don't give the answer, it's just a validation-filter
// If the controller receives the request he doesn't ask if it's good or not. The middleware has decided already.
// Helpers son funciones tontas para hacer el código más modular


El servidor tiene que devolver un json en el body de la request (en algunos devuelves un string)
// RES.JSON()
*/
