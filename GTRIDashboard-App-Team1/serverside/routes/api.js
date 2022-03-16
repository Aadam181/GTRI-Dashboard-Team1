const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const mongoose = require('mongoose')

const db = "mongodb+srv://capstone:capstone@cluster0.nx9oh.mongodb.net/capstoneproject"


mongoose.connect(db, err => {
    if (err) {
        console.error("error" + err)
    } else {
        console.log('connected')
    }
})

function verifyToken(req, res, next){
    if (!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    } 
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    } 
    req.userId = payload.subject
    next()
}

router.get('/', (req, res) => {
    res.send('from API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token })
        }
    })
})


router.post('/login', async (req, res) => {
    const userData = req.body;
    const user = await User.findOne({ email: userData.email });
    if (user) {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(userData.password, user.password);
        if (validPassword) {
            let payload = { subject: user._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).json({ message: "Valid password", token });
        } else {
            res.status(400).json({ error: "Invalid Password" });
        }
    } else {
        res.status(401).json({ error: "User does not exist" });
    }
});

router.get('/asset-statistics', verifyToken, (req, res) => {
    
})

module.exports = router