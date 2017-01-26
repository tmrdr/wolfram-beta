var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(3000);
