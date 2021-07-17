import express from 'express';
import logout from '../controllers/logout.js';
import showChat from '../controllers/chat.js';
import showLogin from '../controllers/showLogin.js';
import loginUser from '../helpers/login.js';
import showSignup from '../controllers/signup.js';
import signupUser from '../helpers/signup.js';
import authenticate from '../middlewares/authenticate.js';
import setSession from '../helpers/varViews.js';
import loginGoogleUser from '../controllers/logingoogle.js';
import rutaNoExistente from '../helpers/rutas404.js';

const router = express.Router();

// LOGIN

router.get('/', showLogin);
router.post('/login', loginUser);

// GOOGLE LOGIN

router.post('/glogin', loginGoogleUser);

// SIGN UP

router.get('/signup', showSignup);
router.post('/signup', signupUser);

// CHAT 

router.get('/chat', authenticate, setSession, showChat);

// LOGOUT

router.get('/logout', logout);

// CONTROL DE RUTAS NO EXISTENTES

router.get('*', rutaNoExistente);


export default router;