import { userModel } from '../models/users.js';
import { checkError } from '../middlewares/errorHandler.js';
import '../middlewares/crypt.js';

const signupUser = async (req, res, next) => {
    const {username, password} = req.body;

    const user = new userModel({username, password});

    console.log("SIGNUP", user.username + ' ' + user.password)
    user.save(err => {
        if(err) {
            checkError(500, next);
            next();
        }else{
            res.redirect('/chat.html')
        }
    });
};

export default signupUser;  