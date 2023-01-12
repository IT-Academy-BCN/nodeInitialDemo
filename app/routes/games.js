import express from "express";
import { tiradaJugador, getTiradas, deleteTiradas } from "../controllers/games.js";
import verifyToken from "../middlewares/verifytoken.js";

const router = express.Router();

router.use( verifyToken );

router.post( '/:id', tiradaJugador );
router.get( '/:id', getTiradas );
router.delete( '/:id', deleteTiradas );

export default router;
