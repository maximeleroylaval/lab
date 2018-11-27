const express = require('express');
const router = express.Router({mergeParams: true});

const task_controller = require('../controllers/task');

router.get('/:id', task_controller.get);
router.get('/', task_controller.get_all);
router.post('/', task_controller.post);
router.put('/:id', task_controller.put);
router.delete('/:id', task_controller.delete);

module.exports = router;