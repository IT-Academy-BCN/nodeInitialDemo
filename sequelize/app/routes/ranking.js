import express from "express";
import { getRanking, getLoser, getWinner } from "../controllers/ranking.js";
const router = express.Router();


router.get( '/', getRanking );
router.get( '/loser', getLoser );
router.get( '/winner', getWinner );



export default router;

