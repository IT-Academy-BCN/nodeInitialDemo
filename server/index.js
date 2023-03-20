const express = require("express")
const multer = require("multer")

const userRouter = require("../app/routes/users")
const imgRouter = require("../app/routes/imgRoute")
const timeRouter = require("../app/routes/timeRouter")
const pokemonRouter = require("../app/routes/pokemonRouter")
const middle = require("../app/middlewares/nivell2exercici1")
const { uploadImg } = require("../app/middlewares/multerImg")

const app = express()
app.use(express.json())

app.use(userRouter) // nivell 1 exercici 1

app.use(uploadImg.single("imagen"), imgRouter) // nivell 1 exercici 2

app.use(middle, timeRouter) /// NIVELL 2

app.use(pokemonRouter) // NIVEL 3

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server iniciado en puerto ${port}`)
})
