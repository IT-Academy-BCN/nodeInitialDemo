import express from "express";
import { createUser, getUsers, updateUser } from "../controllers/users.js";

const router = express.Router();


router.post( '/', createUser );
router.get( '/', getUsers );
router.put( '/:id', updateUser );


export default router;
