var constellations = require('../models/constellation');

module.exports = function(app) {
	app.get('/api/setup', function(req, res) {
		var startConstellations = [
			{
				url: '/public/images/andromeda.png',
				name: 'Andromeda',
				user: 'John'
			},
			{
				url: '/public/images/aquarius.png',
				name: 'Aquarius',
				user: 'John'
			},
			{
				url: '/public/images/cancer.png',
				name: 'Cancer',
				user: 'John'
			},
			{
				url: '/public/images/cassiopeia.png',
				name: 'Cassiopeia',
				user: 'John'
			},
			{
				url: '/public/images/centarus.png',
				name: 'Centarus',
				user: 'John'
			},
			{
				url: '/public/images/gemini.png',
				name: 'Gemini',
				user: 'John'
			},
			{
				url: '/public/images/hydra.png',
				name: 'Hydra',
				user: 'John'
			},
			{
				url: '/public/images/leo.png',
				name: 'Leo',
				user: 'John'
			},
			{
				url: '/public/images/scorpius.png',
				name: 'Scorpius',
				user: 'John'
			},
			{
				url: '/public/images/tucana.png',
				name: 'Tucana',
				user: 'John'
			},
			{
				url: '/public/images/virgo.png',
				name: 'Virgo',
				user: 'John'
			},
		];
		constellations.create(startConstellations, function(err, results) {
			res.send(results);
		})
	})
}