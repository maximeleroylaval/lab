const express = require('express');
const router = express.Router();

const userprofile_controller = require('../controllers/userprofile');

router.get('/', userprofile_controller.get);

module.exports = router;