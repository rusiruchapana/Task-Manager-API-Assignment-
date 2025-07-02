const express = require('express');
const router = express.Router();

const {testRoute} = require('../controllers/taskController');

router.get('/', testRoute);

module.exports = router;