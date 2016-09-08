var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var path = require('path');

//var mysql      = require('mysql');
//var con = mysql.createConnection({
//  host     : 'localhost',
//  user     : 'root',
//  password : 'parrot',
//  database : 'Users'
//});

// Gets the files needed from the public folder.
app.use('/public', express.static(__dirname + '/public'));

// Sets the server to listen on port 8080.
http.listen(8080, function(){
  console.log('listening on *:8080');
});

// Gets the html file to run.
app.get('/', function(req, res){
  res.sendfile('index.html');
});
