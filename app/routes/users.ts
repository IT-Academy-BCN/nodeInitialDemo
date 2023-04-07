import express from 'express'
import getUsers from '../controllers/getUsers'


const router = express.Router()

router.get("/", getUsers)

export default router
