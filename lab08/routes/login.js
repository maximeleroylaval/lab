const express = require('express');
const router = express.Router();

const login_controller = require('../controllers/login');

router.post('/', login_controller.post);
router.get('/', login_controller.renderHtml);

module.exports = router;
