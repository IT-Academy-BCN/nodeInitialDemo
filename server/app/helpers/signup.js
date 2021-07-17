import { userModel } from '../models/users.js';
import { checkError } from '../middlewares/errorHandler.js';
import '../middlewares/crypt.js';

const signupUser = async (req, res, next) => {
    const {username, password} = req.body;

    const user = new userModel({username, password});

    user.save(err => {
        if(err) {
            console.log("SIGNUP ERROR: ", err);
            checkError(500, next);
        }else{
            req.session.user = user.username;
            req.session.pass = user.password;
            res.locals.session = req.session;
            res.send(user);
        }
    });
};

export default signupUser;