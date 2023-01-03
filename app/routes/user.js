import express from "express";
import { createUser, getUsers, updateUser } from "../controllers/users.js";

const router = express.Router();


router.post( '/create', createUser );
router.get( '/', getUsers );
router.put( '/update/:id', updateUser );


export default router;
