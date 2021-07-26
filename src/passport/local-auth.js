const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/userModel.js");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use("local-signup", new LocalStrategy({
    usernameField: "name",
    passwordField: "password",
    passReqToCallback: true
}, async (req, name, password, done) => {
    const user = await User.findOne({"name": name})
    if(user){
        return done(null, false, req.flash("signupMessage", "The name already exists"));
    }else{
        const newUser = new User();
        newUser.name = name;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }
}));

passport.use("local-login", new LocalStrategy({
    usernameField: "name",
    passwordField: "password",
    passReqToCallback: true
}, async (req,name,password,done) => {
    const user = await User.findOne({name: name});
    if(!user){
        return done(null, false, req.flash("loginMessage", "No user found"));
    }
    if(!user.comparePassword(password)){
        return done(null, false, req.flash("loginMessage", "Incorrect password"));
    }
    return done(null, user);
}));