const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/createTask', taskController.createTask)
router.get('/getTaskList', taskController.getTaskList)
router.post('/updateTask/:id', taskController.updateTask)
router.post('/deleteTask/:id', taskController.deleteTask)

module.exports = router;