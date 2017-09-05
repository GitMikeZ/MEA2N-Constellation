var express = require('express');
var router = express.Router();
var User = require('../models/user');

var User = require('../models/user');
var Constellation = require('../models/constellation');
var Comment = require('../models/comment');

var seedData = require('../controllers/seed_data');

/* GET home page. */
router.get('/', function(req, res, next) {
  Constellation.find().exec({}, function(err, doc) {
    if ( err ) {
      return res.send('Error!');
    }
    res.render('index', {name: doc});
  })
});

module.exports = router;

/*
router.post('/', function(req, res, next) {
  var email = req.body.email;
  var user = new User({
    firstName: 'John',
    lastName: 'Doe',
    password: 'password',
    email: email,
    constellations: [],
    comments: []
  });

  seedData.forEach(function(item) {
    var constellation = new Constellation({
      user: user,
      name: item.name,
      url: item.url
    });
    constellation.save();
  });

  user.save();
  res.redirect('/')
})

*/