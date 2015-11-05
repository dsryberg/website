var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    req.sevdenDB.query("SELECT * FROM users", function(err, rows){
        if(err) throw err;
        console.log("\nwerk?");
        console.log(rows);
    });
    
    res.render('index', { title: 'Express' });
});

module.exports = router;
