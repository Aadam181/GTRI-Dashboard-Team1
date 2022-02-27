const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Users = require('./models/users');
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('../passport-config')
initializePassport(
    passport,
    email => Users.find(User => Users.email === email),
    id => Users.find(User => Users.id === id)
)

mongoose.connect('mongodb+srv://capstone:capstone@cluster0.nx9oh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { dbName: 'Capstone' })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });

//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

app.get('', checkAuthenticated, (req, res) => {
    res.send('/ticket-statistics', { name: req.user.name })
})

app.get('', checkNotAuthenticated, (req, res) => {
  res.send('/login')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
   res.send('/register')
})

//Registering users here
app.post('/register', checkNotAuthenticated, async (req, res, next) => {

    const users = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword
    });
    users.save()
        .then(() => { console.log('Success'); })
        .catch(err => { console.log('error: ' + err); })
    res.redirect('/login')
});

//logout here
app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

module.exports = app;