const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const assetSchema = new Schema({
    software: String,
    version: String

})

assetSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        }
        )
    }
})

assetSchema.pre('save', function (next) {
    if (this.isModified('cpassword')) {
        bcrypt.hash(this.cpassword, 10, (err, hash) => {
            if (err) return next(err);
            this.cpassword = hash;
            next();
        }
        )
    }
})

module.exports = mongoose.model('asset', userSchema, 'assets')