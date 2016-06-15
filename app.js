var express = require('express');
var app = express();
app.set('view engine','ejs')

//var ejs = require('ejs');
//var sqlite = require('sqlite3');


var app = express();
app.use(express.static('static'));

//app.get('/', function (req, res) {
//  res.render('WebTask.ejs')
//});

app.get('/', function (req, res) {
  res.render('home.ejs',{text: 'my text'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});