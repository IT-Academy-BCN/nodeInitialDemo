const mongoose = require('mongoose');
const express = require('express');
const app = express();
const server = require('http').Server(app); //trabajando con sockets dentro de la conexion HTTP que nosotros generemos
const io = require('socket.io')(server); 
const port = process.env.PORT || 6677; 
const userDbModel = require('./UserModel');
const config = require('./config');
//Conectamos con la base de datos
mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true, useUnifiedTopology: true});

//Middleware
app.use(express.static('client'));

app.get('/hola', (req, res) => {
    res.status(200).send('Hola Mundo');
});

let messages = {
    id: 1,
    text: 'Welcome to the private chat',
    nickname: 'Asya'
};
//el metodo on permite lanzar eventos en este caso evento connection
//recibe las conexiones de los clientes va detectar cada vez que un cliente se conecte
io.on('connection', (socket) => {
    console.log("Customer is connected with IP " + socket.handshake.address);
    socket.emit('messages', messages);
    
    //recoger el evento
    socket.on('add-message', (data) => {
        const token = data.token;
        try {
            const tokenData = jwt.verify(token, config.secret);
            
            console.log('recibo mensake', data);
            io.sockets.emit('messages', {
                text: data.text,
                room: data.room,
                nickname: tokenData.name
            });
        } catch (e) {
            //ignorar mensaje, o devolver error, whatever
        }
        //messages.push(data);

        //emitir a todos los del chat conectados
    });

    //recoger el evento
    socket.on('login', async (data) => {
        console.log('recivo en el servidor', data);
        const { name, password } = data;
        const dbUser = await userDbModel.findOne({name, password});
        console.log('usuario encontrado es: ', dbUser);
        if(dbUser !== null) {
            //GENERAR JWT
            const token = jwt.sign({name}, config.secret);
            io.sockets.emit('loginResult', {result: "ok", token});
            //const user = users.findOne({user, password})
            //si login ok (if user)
            io.sockets.emit('loginResult', {result: "ok", name});
        } else {
            io.sockets.emit('loginResult', {result: "fail"});
            //si logi not ok
        }
    });
});

server.listen(port, () => {
    console.log("Server working");
});
