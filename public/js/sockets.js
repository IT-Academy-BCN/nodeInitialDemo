
const jwt = require('jsonwebtoken');


module.exports = async(io) => {

    io.use(function(socket, next){
        if (socket.handshake.query && socket.handshake.query.token) {
            jwt.verify(socket.handshake.query.token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded) {
            if (err) return next(new Error('Authentication error'));
            socket.decoded = decoded;
            next();
        });
        }
        else {
        next(new Error('Authentication error'));
        }
    })
    
    //connecting
    io.on('connection', socket => {
   

        //new room

        //join room

        //get rooms
        
        //new message

        //disconnect

   }

}

    
 




