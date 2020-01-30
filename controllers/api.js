var Friday = require('../models/Friday');

module.exports = {
  createDates
}

function createDates(req, res){
  let date = new Date();
  return res.send(date);
}