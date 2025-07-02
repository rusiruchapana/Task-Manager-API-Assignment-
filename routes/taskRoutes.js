const express = require('express');
const router = express.Router();

const {createTask} = require('../controllers/taskController');


router.route('/').post(createTask);


module.exports = router;