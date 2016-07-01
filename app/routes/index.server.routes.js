
module.exports = function(app) {
	//var index = require('../controllers/index.server.controller');
	//app.get('/', index.render);

app.get('*', function(req, res) {
	        res.sendfile('./'); // load the single view file (angular will handle the page changes on the front-end)
		    });
};
