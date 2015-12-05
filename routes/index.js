var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var locals = {
		title:"Express",
		knownUser:true
	}
    res.render('index', locals);

});

module.exports = router;
