import express from "express";
import { createUser, getUsers, updateUser } from "../controllers/users.js";
import verifyToken from "../middlewares/verifytoken.js";

const router = express.Router();


router.use( verifyToken );

router.post( '/', createUser );
router.get( '/', getUsers );
router.put( '/:id', updateUser );


export default router;

