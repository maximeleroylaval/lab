const express = require('express');
const router = express.Router();

const root = require('./root');
const user = require('./user');
const task = require('./task');

router.use('/', root);

router.use('/users', user);

router.use('/:id_user/tasks', task);

module.exports = router;