function auth (req, res, next){
    var authHeader = req.headers.authorization;
    
    if(!authHeader){
        res.setHeader('WWW-Authenticate','Basic');
        console.log('Basic Auth: failure')
        res.statusCode = 401
        res.json({ error: 'You are not authenticated' })
    } else {
        var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':')
        var username = auth[0]
        var password = auth[1]
        if (username == 'secret' && password =='secret'){
            next();
        } else {
            res.setHeader('WWW-Authenticate','Basic');
            console.log('Basic Auth: failure')
            res.statusCode = 401
            res.json({ error: 'You are not authenticated' })
        }
    }
}

module.exports = auth;