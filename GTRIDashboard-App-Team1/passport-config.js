const { ModuleResolutionKind } = require('typescript')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const Users = require('./serverside/models/users')//

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            //match user
            Users.findOne({ email: email })
                .then((Users) => {
                    if (!Users) {
                        return done(null, false, { message: 'Email is not registered' });
                    }
                    //match password
                    bcrypt.compare(password, Users.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, Users);
                        } else {
                            return done(null, false, { message: 'Password incorrect' });
                        }
                    })
                })
                .catch((err) => { console.log(err) })
        })

    )
    passport.serializeUser(function (Users, done) {
        done(null, Users.id);
    });

    passport.deserializeUser(function (id, done) {
        Users.findById(id, function (err, Users) {
            done(err, Users);
        });
    });
};
