//https://mongoosejs.com/docs/api/document.html#document_Document-validate
const mongoose = require('mongoose');
require('mongoose-type-email');


const user = new mongoose.Schema({
      
    username:{
          type:String,
          required:[true, 'Please enter a name'],
        },

       email:{
          type: mongoose.SchemaTypes.Email,
          required: [true, 'Please enter an email'],
          unique: true,
         
      },
      
      password:{
          type:String,
          required:[true, 'Please enter a password'],
          minlength: [6, 'The password should be at least 6 characters long'],

      },

      is_active: { type: Boolean, default: false },

})

module.exports = mongoose.model('User', user);