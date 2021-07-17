import checkError from '../helpers/errorMessages.js';

const authenticate = (req, res, next) => {
    if(req.session && req.session.user){
        return next();
    }

    return checkError(403, next);
}

export default authenticate;