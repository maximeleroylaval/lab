const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user');
const task = require('./routes/task');

const app = express();

const mongoose = require('mongoose');

let dev_db_url = 'mongodb://laboratory:laboratory1@ds155213.mlab.com:55213/laboratoryglo';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/users', user);

app.use('/:id_user/tasks', task);

let port = 1337;

app.listen(port, () => {
    console.log('Server running on port ' + port);
});