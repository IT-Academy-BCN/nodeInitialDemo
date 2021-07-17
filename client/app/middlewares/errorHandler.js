
const errorHandler = (err, req, res, next) => {
        console.log('#####HANDLER', err.statusCode + ' mensaje: ' + err.message);
        res.locals.errorMessage = err.message;
        res.status(err.statusCode);
        res.render('index');
}

export default errorHandler;
  