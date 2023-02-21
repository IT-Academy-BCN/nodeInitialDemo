import express from "express";
import { getRanking, getLoser, getWinner } from "../controllers/ranking.js";
import verifyToken from "../middlewares/verifytoken.js";

const router = express.Router();

router.use( verifyToken );

router.get( '/', getRanking );
router.get( '/loser', getLoser );
router.get( '/winner', getWinner );



export default router;

