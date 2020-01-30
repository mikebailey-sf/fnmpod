const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const FridaySchema = new mongoose.Schema({
  date: Date,
  players: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Friday', FridaySchema);