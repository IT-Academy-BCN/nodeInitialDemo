const msgSchema  = require('./models/message')
const userSchema = require('./models/user')
const bcrypt = require('bcrypt');

module.exports = function(io) {

    let users = {};

    io.on('connection', async socket => {

        console.log(' 💬  new user connected');

        let messages = await msgSchema.find({}).limit(8);
        socket.emit('load old msgs', messages);

        socket.on('send message', async (data, cb) => {
    
                var msg = data.trim();
                
                if (msg.substr(0, 3) === '/s ') {
                    msg = msg.substring(3);
                    var index = msg.indexOf(' ');
                    if (index !== -1) {
                        var name = msg.substring(0, index);
                        var msg = msg.substring(index + 1);
                        if (name in users) {
                            users[name].emit('secret', {
                                msg: msg,
                                nick: socket.nickname,
                                name: name
                            });
                            users[socket.nickname].emit('secret', {
                                msg: msg,
                                nick: socket.nickname,
                                name: name
                            });
                        } else {
                            cb('Ups! user disconnected!')
                        }
                    } else {
                        cb('Hey! where is your message!')
                    }
                } else {

                    var newMsg = msgSchema ({
                        nick: socket.nickname,
                        msg: msg
                    });

                    await newMsg.save();

                    io.sockets.emit('new message', {
                        msg: data,
                        nick: socket.nickname
                    });              
                   
                } 
        });

        socket.on('new register', (data, cb) => {
            if (data) {
                console.log("ok")
            }
        });

        socket.on('new user', (data, cb) => {
            if (data in users) {
                cb(false);
            } else {
                cb(true);
                socket.nickname = data;
                users[socket.nickname] = socket;
                updateNicknames();
            }
        });  
        
        socket.on('disconnect', data => {
            delete users[socket.nickname];
            updateNicknames();
            console.log(`❗️   user disconected`)
        });

        function updateNicknames() {
            io.sockets.emit('usernames', Object.keys(users));
        }; 

    });

}


