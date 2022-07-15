//https://mongoosejs.com/docs/api/document.html#document_Document-validate
let mongoose = require('mongoose');
require('mongoose-type-email');

const user = new mongoose.Schema({
      
    username:{
          type:String,
          required:[true, 'Please enter a name'],
          unique: true,
          
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

      room:{
         roomId: String,
         roomName: {type:String,
         default:"chatterbox",}
        }  
    },
});



module.exports = mongoose.model('User', user);