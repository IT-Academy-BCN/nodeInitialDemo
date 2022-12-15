import express from "express";
import getPokemon from "../controllers/pokemon.js";

const router = express.Router();

router.get("/:id", getPokemon);


export default router;