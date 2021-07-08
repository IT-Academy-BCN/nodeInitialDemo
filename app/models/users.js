import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;
const modelName = 'User';

const userSchema = new Schema ({
    username: { 
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', function(next) {

    if(this.isNew || this.isModified('password')){
        const user = this;

        user.password = bcrypt.hashSync(user.password,10);
    }
    next();
});

const userModel = mongoose.model(modelName, userSchema);

export {
    userModel,
    userSchema
}