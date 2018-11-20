const express = require('express');
const router = express.Router();

const chat_controller = require('../controllers/chat');

router.get('/', chat_controller.renderHtml);

module.exports = router;
