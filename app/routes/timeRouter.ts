import express from 'express'
import postTime from "../controllers/postTime"
import middle from '../middlewares/nivell2exercici1'
import { setCache } from '../middlewares/setCache'
import { setAllowOrigin } from '../middlewares/setAllowOrigin'

const router = express.Router()

router.use(setAllowOrigin)
router.use(setCache)
router.use(middle)
router.post("/time", postTime)

export default router
