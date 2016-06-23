var express = require('express');
var sqlite = require('sqlite3');

var app = express();
app.set('view engine','ejs');

//var ejs = require('ejs');

var db = new sqlite.Database('db.sqlite');

// app.use(express.static('static'));

//app.get('/', function (req, res) {
//  res.render('WebTask.ejs')
//});

app.get('/', function(req, res) {
  db.all('select * from posts', function(err, data){
    res.render('home.ejs', {
      posts: data
    });
  });
});

app.post('/new', function(req, res) {
  console.log(req.query.text);
  db.run('insert into posts (text) values(?);', req.query.text, function () {
    res.send('ok');
  });
});
    
app.delete('/delete', function (req, res) {
  db.run('delete from posts (text) where id = ?;', req.query.id, function () {
    res.send('ok');
  });  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});