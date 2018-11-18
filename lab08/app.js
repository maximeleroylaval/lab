const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes/routes');

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

app.use(cookieParser());

app.use('/', routes);

app.get('/', function(req, res) {
    res.redirect('/login');
});

let port = 443;

app.listen(port, () => {
    console.log('Server running on port ' + port);
});
