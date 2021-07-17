import bcrypt from 'bcrypt';
import { userSchema } from '../models/users.js';

userSchema.pre('save', function(next) {

    if(this.isNew || this.isModified('password')){
        const user = this;

        user.password = bcrypt.hashSync(user.password,10);
    }
    next();
});




