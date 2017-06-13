var express = require('express');
var app = express();

var database = {};

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/set', function(req, res) {
  var query = req.query;
  var key = Object.keys(query);
  database[key] = query[key];
  res.send(database[key]);
  res.status(200).end();
});

app.get('/get', function(req, res){
  var query = req.query;
  res.send(database[query.key]);
});

app.listen(4000, function() {
  console.log('App listening on port 4000');
});

module.exports = app;
