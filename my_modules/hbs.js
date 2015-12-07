var hbs = require('hbs');

// Register Partials


// Register Helpers
hbs.registerHelper('test', function( inp ){
	return "I'm a little tea pot";
});

module.exports = hbs;