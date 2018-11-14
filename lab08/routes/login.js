const express = require('express');
const router = express.Router();

const login_controller = require('../controllers/login');

router.post('/', login_controller.post);

module.exports = router;