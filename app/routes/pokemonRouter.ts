import express from 'express'
import getPokemon from "../controllers/getPokemon"

const router = express.Router()

router.get("/pokemon/:id", getPokemon)

export default router
