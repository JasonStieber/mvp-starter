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

var sessionSchema = mongoose.Schema({
  username: String,
  cookie: String
});

var User = mongoose.model('User', userSchema);
var Data = mongoose.model('Data', dataSchema);
var Session = mongoose.model('Session', sessionSchema);

var selectAll = function(callback) {
  User.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var addUser = function(username, hxPass, salt){
  User.findOne({username: username}, 'password', function(err, user){
    if(user){
      console.log('that user name is taken please take another');
    }else{
    var user = new User ({username: username, password: hxPass, salt: salt})
    console.log(`${username}, ${hxPass}, ${salt}`);
    user.save();
    }
  });
}
module.exports.selectAll = selectAll;
module.exports.addUser = addUser;
