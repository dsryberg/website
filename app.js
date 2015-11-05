var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var mysql = require("mysql");

// Setup mysql connections

var sevdenDB = mysql.createConnection({
    host: "localhost",
    user: "www",
    password: "password",   //Change this later!
    database: "sevden",
});

sevdenDB.connect( function(err) {
    if(err){
        console.log("Error Connecting to sevden DB");
        return;
    }

    console.log("Successfully connected to sevdenDB");
});

/*
sevdenDB.end( function(err){
    if(err){
        console.log("There was an error ending the User DB connection");
        throw err;
    }
});
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add persistent variables to 'req'

app.use(function(req, res, next) {
    req.sevdenDB = sevdenDB;

    next();
});

// Do routing
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
