function auth (req, res, next){
    var authHeader = req.headers.authorization;
    if(!authHeader){
        var err = new Error('You are not authenticated')
        //res.setHeader('WWW-Authenticate','Basic'); To display the login popup on the webpage
        res.status(401).send({message: "HTTP Estatus 401 - Unauthorized"})
        next(err)
    }

    var auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
    var username = auth[0]
    var password = auth[1]

    if(username == 'root' && password =='secret'){
        next();
    }else{
        var err = new Error('You are not authenticated')
        //res.setHeader('WWW-Authenticate','Basic'); //To display the login popup on the webpage
        res.status(401).send({message: "HTTP Estatus 401 - Unauthorized"})
        next(err)
    }

}

module.exports = auth;