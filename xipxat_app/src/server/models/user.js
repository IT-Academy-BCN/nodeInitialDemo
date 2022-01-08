const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var saltRounds = 10;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, 
    password: { type: String, required: true } 
});

userSchema.pre("save", function(next) {

    const document = this;

    if (this.isNew || this.isModified('password')) {
     
        bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
            if (err) {
                next(err);
            } else {
                document.password = hashedPassword;
                next();
            }
        });
    } else {
        next();
    }

});

// userSchema.methods.comparePassword = function(password, cb) {
//     console.log('3',password)
//     console.log('4', this.password)
//     bcrypt.compare( password, this.password, (err, isMatch) => {
//         if (err) {
//             cb(err)
//         } else {
//             cb(err, isMatch)
//         }
//     });
// };


module.exports = mongoose.model('User', userSchema);