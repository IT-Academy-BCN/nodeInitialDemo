import checkError from '../helpers/errorMessages.js';

const rutaNoExistente = (req, res, next) => {
    if(!req.session.is) return checkError(404, next);
    next();
}

export default rutaNoExistente;