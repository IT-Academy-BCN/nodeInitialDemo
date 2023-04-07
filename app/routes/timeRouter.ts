
import express from 'express'
import postTime from "../controllers/postTime"

const router = express.Router()



router.post("/time", postTime)

export default router
