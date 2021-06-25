const BasicStrategy = require('passport-http').BasicStrategy

module.exports = new BasicStrategy(
    function(user, password, cb){
        if(user === 'admin' && password === 'admin'){
            return cb(null, true)
        }else{
            return cb(null, false)
        }
    }
)