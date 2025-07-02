const express = require('express');
const router = express.Router();

const {createTask, getTasks, getTaskById, updateTask} = require('../controllers/taskController');


router.route('/').post(createTask).get(getTasks);
router.route('/:id').get(getTaskById).put(updateTask);


module.exports = router;