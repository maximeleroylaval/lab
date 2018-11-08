const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user');

router.get('/:id', user_controller.get);
router.post('/', user_controller.post);
router.delete('/:id', user_controller.delete);

module.exports = router;