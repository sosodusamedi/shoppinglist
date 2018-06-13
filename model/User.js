const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tel: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
