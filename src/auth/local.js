const LocalStrategy = require('passport-http')

module.exports = (passport) => {
    passport.serializeUser((user, cb) => {
        return cb(null, user._id)
    })

    passport.deserializeUser
}