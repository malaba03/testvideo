var express = require('express');
var serveStatic = require('serve-static');
var nconf = require('nconf');

// Setup nconf to use (in-order):
  //   1. Command-line arguments
  //   2. Environment variables
  //   3. A file located at 'path/to/config.json'
nconf.env().argv();
nconf.file({ file: 'config.json' });

var app = express();
app.use(serveStatic('.'));

app.get('/search/:query?', function(req, res){
});

app.listen(nconf.get('port'));

console.log("Video Test lanched on port: "+nconf.get('port'));
