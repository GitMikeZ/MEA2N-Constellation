var constellations = require('../models/constellation');

module.exports = function(app) {
	app.get('/api/setup', function(req, res) {
		var startConstellations = [
			{
				username: 'John',
				url: '/public/images/andromeda.png',
				name: 'Andromeda',
			},
			{
				username: 'Sam',
				url: '/public/images/aquarius.png',
				name: 'Aquarius',
			},
			{
				username: 'Charles',
				url: '/public/images/cancer.png',
				name: 'Cancer',
			},
			{
				username: 'Tina',
				url: '/public/images/cassiopeia.png',
				name: 'Cassiopeia',
			},
			{
				username: 'Christie',
				url: '/public/images/centarus.png',
				name: 'Centarus',
			},
			{
				username: 'Thomas',
				url: '/public/images/gemini.png',
				name: 'Gemini',
			},
			{
				username: 'Carrel',
				url: '/public/images/hydra.png',
				name: 'Hydra',
			},
			{
				username: 'Michael',
				url: '/public/images/leo.png',
				name: 'Leo',
			},
			{
				username: 'Chloe',
				url: '/public/images/scorpius.png',
				name: 'Scorpius',
			},
			{
				username: 'Rachel',
				url: '/public/images/tucana.png',
				name: 'Tucana',
			},
			{
				username: 'Duncan',
				url: '/public/images/virgo.png',
				name: 'Virgo',
			},
		];
		constellations.create(startConstellations, function(err, results) {
			res.send(results);
		})
	})
}