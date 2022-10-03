const { Schema } = require('mongoose');

const tasquesSchema = new Schema({
    id : {type: Number},
    nomTasca : String,
    usuari : String,
    estat : String,
    dataInici :{type: Date, default : Date.now},
    dataFinal :{type: Date},
});

module.exports = tasquesSchema;
