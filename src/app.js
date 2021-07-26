const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();
require("./database");
require("./passport/local-auth");
const server = require("http").Server(app);
var io = require('socket.io')(server);

//settings
app.set('port', process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

//middlemwares
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: "mysecretsession",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
    app.locals.signupMessage = req.flash("signupMessage");
    app.locals.loginMessage = req.flash("loginMessage");
    app.locals.user = req.user;
    next();
});

//rutes
app.use('/', require('./routes/index'));

var messages = [{
    text: "room open!",
    author: "Server"
}];

io.on('connection', socket => {
    console.log("Someone has connected");
    socket.emit("messages", messages);
    socket.on('new-message', function(data) {
        messages.push(data);
        io.sockets.emit("messages", messages);
    });
});

server.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});