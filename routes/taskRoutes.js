const express = require('express');
const router = express.Router();

const {createTask, getTasks, getTaskById} = require('../controllers/taskController');


router.route('/').post(createTask).get(getTasks);
router.route('/:id').get(getTaskById);


module.exports = router;