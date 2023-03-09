const express = require("express");
const axios = require("axios");

const multer = require("multer");

const mymetypes = ["image/jpg", "image/png", "image/gif"];

const uploadImg = multer({
  // definimos algunos campos y opciones de multer en forma de objeto
  // mymetype es una extension de files, confirmamos que coincide con las que queremos filtrar
  dest: "server/upload/",
  fileFilter: (req, file, cb) => {
    // cb = callback
    if (mymetypes.includes(file.mimetype)) cb(null, true);
    else cb(new Error("Solo se acepta png, jpg o gif"), false);
  },
  limits: {
    fileSize: 1000000,
  },
});

const handleUserTime = multer({ dest: "server/time/" });

const users = require("./users/user.json");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send([users, `Request url: ${req.url}`]);
});

app.post("/img", uploadImg.single("imagen"), function (req, res, next) {
  const body = req.body;
  const imagen = req.file;
  console.log(body);
  console.log(imagen);
  res.send("PETICION POST");
});
/// NIVELL 2
// Inclogui un middleware que afegeixi la capçalera Cache-control: no-cache. Habiliti CORS (Cross-Origin Resource Sharing) en les respostes, sigui mitjançant Express o mitjançant un altre middleware.
app.use((req, res, next) => {
  res.set("Cache-Control", "no-cache");
  res.header("Access-Control-Allow-Origin", "*");
  req.body = { name: "David", age: 37, password: "asd" };
  // console.log(req.body);
  if (!req.body.password) {
    res.status = 401;
    // res.send(res.status);
  }
  next();
});

app.post("/time", function (req, res) {
  const day = new Date();
  res.send(day);
});
// NIVEL 3
// Crea una petició GET a l'endpoint /pokemon/{id} que rebi un número de Pokémon, faci una cerca al Pokémon API i retorni el nom del Pokémon, la seva alçada i el seu pes.

app.get("/pokemon/:id", async function (req, res) {
  const id = req.params.id;
  const buscarPokemon = async (id) => {
    let x = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (res) =>
        (res = {
          nom: res.data.species.name,
          pes: res.data.weight,
        })
    );
    return x;
  };
  res.send(await buscarPokemon(id));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server iniciado en puerto ${port}`);
});
