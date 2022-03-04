const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cpassword: String

})

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        }
        )
    }
})

userSchema.pre('save', function (next) {
    if (this.isModified('cpassword')) {
        bcrypt.hash(this.cpassword, 10, (err, hash) => {
            if (err) return next(err);
            this.cpassword = hash;
            next();
        }
        )
    }
})

module.exports = mongoose.model('user', userSchema, 'users')