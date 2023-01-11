import express from "express";
import { tiradaJugador, getTiradas, deleteTiradas } from "../controllers/games.js";

const router = express.Router();

router.post( '/:id', tiradaJugador );
router.get( '/:id', getTiradas );
router.delete( '/:id', deleteTiradas );

export default router;
