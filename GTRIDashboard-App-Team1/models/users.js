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

/*
usersSchema.methods.comparePasswords = async function(password) {
    if(!password) throw new Error('Password incorrect');

    try{
        const result = await bcrypt.compare(password, this.password)
        return result;
    } catch(error){
        console.log('Incorrect password', error.message)
    }
}

usersSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
      if (error) {
        return callback(error)
      } else {
        callback(null, isMatch)
      }
    })
  }

*/
module.exports = mongoose.model('Users', usersSchema, 'Users');