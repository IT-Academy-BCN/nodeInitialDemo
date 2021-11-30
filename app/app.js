const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(fileUpload());
app.use(morgan('tiny'));


//Routes
app.use(require('./routes/user'))
app.use(require('./routes/upload'))
app.use(require('./routes/time'))


//server start
app.listen(app.get('port'), () => {
    console.log(`Server on port OK ${app.get('port')}`);
});

