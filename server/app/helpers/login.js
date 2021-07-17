import { userModel } from '../models/users.js';
import { checkError } from '../middlewares/errorHandler.js';
import verifyPassword from './verifyLogin.js';

const loginUser = async (req, res, next) => {
    const {username, password} = req.body;

    const user = await userModel.findOne({username});

    if(user === null) return checkError(400, next, ' Usuario y/o contraseña incorrectos.');

    if(!await verifyPassword(password, user.password)) return checkError(400, next, ' Usuario y/o contraseña incorrectos.');

    req.session.user = user.username;
    req.session.pass = user.password;
    res.locals.session = req.session;

    res.json({
	    code: 200,
	    message: 'success'
    });
}

export default loginUser;
