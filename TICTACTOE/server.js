var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 3001;
// viewed at http://localhost:3001
app.use('/',express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(port);