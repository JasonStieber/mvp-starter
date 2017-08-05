var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  salt: String
});

var dataSchema = mongoose.Schema({
  owner: String,
  data: String

});

var Users = mongoose.model('Users', userSchema);
var Data = mongoose.model('Data', dataSchema);

var selectAll = function(callback) {
  Users.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;