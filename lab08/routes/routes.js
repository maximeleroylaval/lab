const express = require('express');
const router = express.Router();

const login = require('./login');
const userprofile = require('./userprofile');
const users = require('./users');

const login_controller = require('../controllers/login');

router.use('/login', login);
router.use('/userprofile', login_controller.checkAuth, userprofile);
router.use('/users', users);

module.exports = router;