

// CONFIGURACION PARA ACCESO A SESION DESDE HANDLEBARS
const setSession = (req, res, next) => {
    if(req.session){
        res.locals.session = req.session;
        res.locals.session.is = true;
    }else{
        res.locals.session.is = false;
    }
    next();
};

export default setSession;