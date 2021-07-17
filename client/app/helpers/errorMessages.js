const errorMessage = {
    204: 'No hay contenido. ', //Dejo mensaje aunque no se mostrará, así mantengo coherencia con la emisión de errores.
    400: 'Los datos no existen o no son correctos. ',
    401: 'No se ha podido acceder, datos incorrectos. ',
    403: 'No tienes permisos para acceder. ',
    500: 'Petición no completada. ',
    404: 'Ruta no existe'
}

const checkError = (errorCode, next, addMessage = "") => {
    console.log(`==>> Error code: ${errorCode} and Message: ${addMessage}`)
    const err = new Error(errorMessage[errorCode || 500] + addMessage);
    err.statusCode = errorCode || 500;
    return next(err);
}

export default checkError;