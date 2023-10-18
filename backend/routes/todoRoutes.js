const express = require('express');
const { getTodos,postTodo,updateTodo,deleteTodo } = require('../controllers/todoController');

const todoRouter = express.Router();

todoRouter.route('/').get(getTodos).post(postTodo);
todoRouter.route('/:id').put(updateTodo).delete(deleteTodo);

module.exports = todoRouter;