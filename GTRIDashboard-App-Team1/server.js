if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const Users = require('./models/users')

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => Users.find(User => Users.email === email),
    id => Users.find(User => Users.id === id)
)

//database connected here
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://capstone:capstone@cluster0.nx9oh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { dbName: 'Capstone' })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });


app.set('view-engine', 'ejs')
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

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})

//Registering users here
app.post('/register', checkNotAuthenticated, async (req, res, next) => {

    const users = new Users({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10)
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

app.listen(3000)
