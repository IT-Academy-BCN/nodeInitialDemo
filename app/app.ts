const express = require("express")
const app = express()
const fileUpload = require("express-fileupload")

import userRouter from "./routes/users"
import imgRouter from "./routes/imgRouter"
import timeRouter from "./routes/timeRouter"
import pokemonRouter from "./routes/pokemonRouter"
import middle from "./middlewares/nivell2exercici1"

app.use(fileUpload())
app.use(express.json())
app.use(userRouter) // nivell 1 exercici 1
app.use(imgRouter) // nivell 1 exercici 2
app.use(middle, timeRouter) /// NIVELL 2
app.use(pokemonRouter) // NIVEL 3

const port: string | number = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server iniciado en puerto ${port}`)
})
