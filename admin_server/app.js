var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var winston = require('winston');
var env = process.env.NODE_ENV || 'development';
var config = require('./config.' + env);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', function (socket) {
    winston.info('User connected. Socket ID: ' + socket.id);
});

http.listen(3000, function () {
    winston.info('Demo Party admin server listaning on port 3000');
});
