var express = require('express');
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var router = express.Router();

router.post('/', function(req, res, next) {
	var user = new User({
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password, 10),
			email: req.body.email,
	});
	User.save(function(err, result) {
			if (err) {
				return res.status(500).json({
					title: 'Error: user was not saved',
					error: err
				})
			}
			res.status(201).json({
					message: 'User was saved',
					obj: result
			})
	})
});

router.post('/signin', function(req, res, next) {
	User.findOne({email: req.body.email}, function(err, user) {
		if(err) {
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		if(!user) {
			return res.status(401).json({
				title: 'Login failed',
				error: {message: 'Invalid login credentials'}
			});
		}
		if(bcrypt.compareSync(req.body.password, user.password)) {
			return res.status(401).json({
				title: 'Login failed',
				error: {message: 'Invalid login credentials'}
			});
		}
		var token = jwt.sign({user: user}, 'secret', {expiresIn: 3600});
		res.status(200).json({
			message: 'Login Successful',
			token: token,
			userId: user._id
		});
	});
});

module.exports = router;
