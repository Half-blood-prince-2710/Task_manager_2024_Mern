const express = require('express')
const router = express.Router();
const {postTask,getTask, getDatedTask} = require('../controllers/task-controller')

router.route('/').get(getTask)
router.route('/add').post(postTask)
router.route('/:date').get(getDatedTask)

module.exports = router