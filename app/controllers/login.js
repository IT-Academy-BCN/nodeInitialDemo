import { userModel } from '../models/users.js';
import { checkError } from '../middlewares/errorHandler.js';
import verifyPassword from '../helpers/verifyLogin.js';

const loginUser = async (req, res, next) => {
    const {username, password} = req.body;

    const user = await userModel.findOne({username});

    console.log("To Login", user);

    if(user === null) return checkError(400, next, ' Usuario y/o contraseña incorrectos.');

    if(!await verifyPassword(password, user.password)) return checkError(400, next, ' Usuario y/o contraseña incorrectos.')

    res.redirect('chat.html');
}

export default loginUser;