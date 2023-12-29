const express = require('express');
const { getTodos,postTodo,updateTodo,deleteTodo } = require('../controllers/todoController');
const { protect } = require('../middleware/authMiddleware');
const todoRouter = express.Router();

//todoRouter.route('/').get(protect,getTodos).post(protect,postTodo);
//todoRouter.route('/:id').put(protect, updateTodo).delete(protect, deleteTodo);


todoRouter.get('/', protect, getTodos);
todoRouter.post('/', protect, postTodo);
todoRouter.put('/:id', protect, updateTodo);
todoRouter.delete('/:id', protect, deleteTodo);


module.exports = todoRouter;