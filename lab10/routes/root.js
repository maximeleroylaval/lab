const express = require('express');
const router = express.Router({mergeParams: true});

const root_controller = require('../controllers/root');

router.get('/', root_controller.get);

module.exports = router;