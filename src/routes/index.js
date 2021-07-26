const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req,res,next) => {
    res.render("index");
});

router.get("/signup", (req,res,next) => {
    res.render("signup");
});

router.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/xat",
    failureRedirect: "/signup",
    failureFlash: true
}));

router.get("/login", (req,res,next) => {
    res.render("login");
});

router.post("/login", passport.authenticate("local-login", {
    successRedirect: "/xat",
    failureRedirect: "/login",
    failureFlash: true
}));

router.get("/logout", (req,res,next) => {
    req.logout();
    res.redirect("/");
});

router.get("/xat", isAuthenticated, (req,res,next) => {
    res.render("xat");
});

router.post("/xat", isAuthenticated, (req,res,next) => {
    console.log(req.body.room);
    res.redirect("/room");
});

router.get("/room", isAuthenticated, (req,res,next) => {
    res.render("room");
});

function isAuthenticated(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
};

module.exports = router;