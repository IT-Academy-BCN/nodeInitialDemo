const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const { Schema } = mongoose;

const userSchema = new Schema ({
    name: String,
    password: String
});

userSchema.methods.encryptPassword = (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (pass) {
    return bcrypt.compareSync(pass, this.password);
};

module.exports = mongoose.model("users", userSchema);