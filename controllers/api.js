var Friday = require('../models/Friday');

module.exports = {
  createDates,
  listDates,
  deleteDates
}

function createDates(req, res){
  let date = new Date('2020-1-31');
  for (i = 1; i < 52; i++){
    date.setDate(date.getDate() + 7);  
    //console.log(date);
    let friday = new Friday({
      date: date
    });
    console.log(friday);
    //friday.save();
  }
  return res.send('Dates Created');
}

function listDates(req, res){
  Friday.find({}, function(err, fridays) {
    return res.send(fridays)
  });
}

function deleteDates(req, res){
  Friday.deleteMany({}, function(err){
    if (err) return handleError(err);
  });
}