var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Constellation = require('../models/constellation');
var Comment = require('../models/comment');

var seedData = require('../controllers/seed_data');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render("index");
  next();
});

module.exports = router;

