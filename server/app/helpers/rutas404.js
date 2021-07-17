import { checkError } from "../middlewares/errorHandler.js"

const rutaNoExistente = (req, res, next) => {
    checkError(404, next);
}

export default rutaNoExistente;