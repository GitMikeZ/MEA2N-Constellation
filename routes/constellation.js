var express = reqire('express');

var router = express.Router();

var Constellation = require('./models/constellations')

router.get('/constellations', function(res, req, next) {
		Constellation.find().exec({}, function(err, constellations) {
			if( err ) {
				return res.status(500).json({
					title: 'Error',
					error: err
				})
			}
			res.status(200).json({
					obj: constellations
			})
		})
})