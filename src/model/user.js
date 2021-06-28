const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')
require("mongoose-type-email");

const User = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

User.methods.genHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null) // encrypt  password
}

module.exports = mongoose.model('User', User)
