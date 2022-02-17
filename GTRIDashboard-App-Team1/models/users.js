const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

//define a schema
const usersSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },

});

usersSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        })
    }
})

module.exports = mongoose.model('Users', usersSchema, 'Users');