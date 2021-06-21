const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/chat', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('conexion establecida con MongoDB'))
    .catch((error) =>
        console.error('No se ha podido conectar con MongoDB:', error.message)
  );
const db = mongoose.createConnection();
  
module.exports = db