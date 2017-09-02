var configValues = require('./config');

module.exports = {

	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname +
			':' + configValues.pwd + '@ds035750.mlab.com:35750/constellations';
	}
}