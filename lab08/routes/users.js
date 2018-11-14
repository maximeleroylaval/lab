const express = require('express');
const router = express.Router();

const users_controller = require('../controllers/users');

router.post('/', users_controller.post);

module.exports = router;