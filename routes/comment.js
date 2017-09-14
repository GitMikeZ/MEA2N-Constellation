var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

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
	jwt.verify(req.verify.token, 'secret', function(err, decoded){
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
	var decoded = jwt.decoded(req.query.token);
	User.findById(decoded.user._id, function(err, user) {
		if(err) {
			return res.status(500).json({
				title: 'An error occured',
				error: err
			});
		}
		var comment = new Comment({
			content: req.body.content,
			user: user
		});
		comment.save(function(err, result) {
			if( err ) {
				return res.status(500).json({
					title: 'An error occured',
					error: err
				});
			}
			user.comments.push(result);
			user.save();
			res.status(201).json({
				message: 'Saved message',
				obj: result
			});
		});
	});
});

module.exports = router;


