var configValues = require('./config');

module.exports = {

	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname +
			':' + configValues.pwd + '@ds133814.mlab.com:33814/node-constellation';
	}
}