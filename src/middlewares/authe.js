const authe= (req, res, next) =>{
    var authheader = req.headers.authorization;
    console.log(req.headers);
  
    if (!authheader) {
        var err = new Error("No estás autentificado. // No estàs autenticat. // You are not authenticated!");
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
    }
  
    var auth = new Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
  
    if (user == 'admin' && pass == 'password') {
  
    // Si l'usuarix està autoritzat:
        next();
    } else {
        var err = new Error("No estás autorizado. // No estàs autenticat. // You are not authenticated.");
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
  }
  
  module.exports = authe;