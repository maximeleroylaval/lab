const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const port = process.env.PORT || 443;

const routes = require('./routes/routes');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    socket.username = "Anonymous";
    socket.on('username connect', function (username) {
        socket.username = username;
        io.emit('message', "User " + username + " connected");
    });
    socket.on('username change', function (username) {
        io.emit('message', "User " + socket.username + " renamed into " + username);
        socket.username = username;
    });
    socket.on('message', function (msg) {
        io.emit('message', "<h4>" + socket.username + " </h4>" + msg);
    });
    socket.on('disconnect', function () {
        io.emit('message', "User " + socket.username + " disconnected");
    });
});

http.listen(port, function () {
    console.log('Server running on port ' + port);
});