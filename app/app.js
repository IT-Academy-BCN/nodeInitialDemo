const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const router = require("./routes/index");
const getCurrentTime = require("./helpers/get-current-time");
const {
  checkMimeType,
  mediaError,
  isUpload,
  cacheControl,
  basicAuth,
  authErrorHandler,
} = require("./middlewares/middlewares");

const app = express();

// Accept CORS
app.use(cors());
// Parse the body
app.use(express.json());

app.use(
  fileUpload({
    createParentPath: true,
  })
);
// Set Cache Control
app.use(cacheControl);

// Middlewares to check correct uploading and handle upload errors
app.use("/upload", isUpload);
app.use("/upload", checkMimeType);
app.use("/upload", mediaError);

app.use("/secret", basicAuth);
app.use("/secret", authErrorHandler);

app.use("/users", router.users);

app.post("/upload", async (req, res) => {
  res.status(201).send({
    status: 201,
    message: "File is uploaded",
    mimetype: req.files.filesample.mimetype,
  });
});

app.post("/register", async (req, res) => {
  const currentTime = await getCurrentTime();
  res.send(JSON.stringify(currentTime));
});

app.get("/secret", async (req, res) => {
  try {
    res.status(200).send("You have found many, many secrets");
  } catch (err) {
    console.log(err.message);
  }
});

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

El fichero app.js es muy largo! Aunque los puristas dicen que tiene que tener como 10 o 15 líneas,
estaría bien que como mínimo separes las rutas a una carpeta routes
// Rever routes y como exportar routes. 


El servidor tiene que devolver un json en el body de la request (en algunos devuelves un string)
// RES.JSON()
*/
