import express from 'express';
import loginUser from '../controllers/login.js';
import registerUser from '../controllers/signup.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', registerUser);

export default router;