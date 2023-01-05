import express from "express";
import { tiradaJugador } from "../controllers/games";

const router = express.Router();

router.post( '/:id', tiradaJugador );

export default router;
