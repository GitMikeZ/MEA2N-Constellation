var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var User = require('../models/user');
var Comment = require('../models/comment');

router.get('/', function(req, res, next) {
	Comment.find()
		.populate('user', 'username')
		.exec(function(err, comments) {
			if( err ) {
				return res.status(500).json({
						title: 'An error occured',
						error: err
				});
			}
			res.status(200).json({
					message: 'Success',
					obj: comments
			})
		})
})

router.use('/', function(req, res, next) {
	jwt.verify(req.query.token, 'secret', function(err, decoded){
		if( err ) {
			return res.status(401).json({
				title: 'Not Authenticated',
				error: err
			});
		}
		next();
	})
});

router.post('/', function(req, res, next) {
	var decoded = jwt.decode(req.query.token);
	User.findById(decoded.user._id, function(err, user) {
		if(err) {
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		var date = new Date();
		var dat = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
		var comment = new Comment({
			content: req.body.content,
			user: user,
			date: dat
		});
		comment.save(function(err, result) {
			if( err ) {
				return res.status(500).json({
					title: 'An error occured',
					error: err
				});
			}
			user.comments.push(mongoose.Types.ObjectId(result._id));
			user.save();
			res.status(201).json({
				message: 'Saved message',
				obj: result
			});
		});
	});
});

module.exports = router;


