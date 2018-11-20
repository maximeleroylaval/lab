const express = require('express');
const router = express.Router();

const login = require('./login');
const chat = require('./chat');

router.use('/login', login);
router.use('/chat', chat);

router.get('/', function(req, res) {
    res.redirect('/login');
});

module.exports = router;