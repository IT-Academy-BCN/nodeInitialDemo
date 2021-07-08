
const errorMessage = {
    204: 'No hay contenido', //Dejo mensaje aunque no se mostrará, así mantengo coherencia con la emisión de errores.
    400: 'Los datos no existen o no son correctos.',
    500: 'Petición no completada.'
}

const checkError = (errorCode, next, addMessage = "") => {
    const err = new Error(errorMessage[errorCode] + addMessage);
    err.statusCode = errorCode;
    console.log('CHECK ERR', err.statusCode + ' ' + err.message)
    return next(err);
}

const errorHandler = (err, req, res, next) => {
    console.log('HANDLER', err.statusCode + ' ' + err.message)
    res.status(err.statusCode).json({
        error: err.statusCode,
        message: err.message
    });
    next();
}

export { 
    errorHandler,
    checkError
}