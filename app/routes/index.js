import express from "express";
import cors from "cors";

import { secret, getUser, uploadImage } from "../controllers/_controllers"; // Controllers
import { uploaderSingleImage, noCacheHeader, authHeader, isAuthenticated } from "../middlewares/_middlewares"; // Middlewares

const router = express.Router();


router.get('/user', getUser);

router.post('/upload', uploaderSingleImage, uploadImage);

router.post('/getdate', cors(), noCacheHeader, secret);

router.post('/auth', cors(), noCacheHeader, authHeader, isAuthenticated, secret);



export  { router as indexRouter }