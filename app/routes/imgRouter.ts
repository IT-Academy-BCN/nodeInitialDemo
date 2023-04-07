import express from "express"
import postImg from "../controllers/postImg"

const router = express.Router()

router.post("/img", postImg)

export default router
