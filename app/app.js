const express = require("express");
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


El servidor tiene que devolver un json en el body de la request (en algunos devuelves un string)
// RES.JSON()
*/
