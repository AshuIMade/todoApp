const express = require('express');
const { getTodos,postTodo,updateTodo,deleteTodo } = require('../controllers/todoController');

const router = express.Router();

router.route('/').get(getTodos).post(postTodo);
router.route('/:id').put(updateTodo).delete(deleteTodo);

module.exports = router;