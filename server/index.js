var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');
var sha256 = require('sha256')
var crypto = require('crypto');



var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.get('/db', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/login', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log(req.body);
      res.sendStatus(201);
    }
  });
});

app.post('/signup', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {  
      
        // redirect to login page
      var salt = crypto.randomBytes(32).toString('hex');
      db.addUser(req.body.user.toUpperCase(), sha256(salt+req.body.pass), salt);
      res.sendStatus(201);
    }
  });
});



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

