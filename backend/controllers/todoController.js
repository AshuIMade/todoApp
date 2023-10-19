const asyncHandler = require('express-async-handler');
const db = require('../model');
const Todo = db.todos;
const User = db.users;
/**
 * @desc get Todos
 * @route /api/v1/todos
 * @param req
 * @param res 
 */
const getTodos = asyncHandler(async (req, res) => { 
  console.log("hello-----------****")
  const todos = await Todo.findAll({ where: { User_id: req.user.id } });
  res.status(200).json(todos);
});
/**
 * @desc post Todo
 * @route /api/v1/todos
 * @param req
 * @param res 
 */
const postTodo =asyncHandler( async (req, res) => { 
  if (!req.body) {
    res.status(400);
    throw new Error('please add some text');
  }
  console.log("----Hello-----"); 
  const todo = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
    createdDate: req.body.createdDate,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    user_id: req.user.id
  };
 const created = await Todo.create(todo);
  res.status(200).json(created);
});
/**
 * @desc update Todo
 * @route /api/v1/todos/:id
 * @param req+id
 * @param res 
 */
const updateTodo = asyncHandler(async (req, res) => { 
  console.log("-------I think we can't even reach here-------+++---------");
  const todo = await Todo.findOne({ where: { id: req.params.id } });
  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }
  //const user = await User.findOne({ where: { id: req.user.id } });
  if (!req.user) {
    res.status(401);
    throw new Error('user not found');
  }
  if (todo.user_id !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  const updated = await Todo.update(req.body, { where: { id: req.params.id } });
  res.status(200).json(updated);
});
/**
 * @desc delete Todo
 * @route /api/v1/todos/:id
 * @param req+id
 * @param res 
 */
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findOne({ where: { id: req.params.id } });
  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }
  //const user = await User.findOne({ where: { id: req.user.id } });
  if (!req.user) {
    res.status(401);
    throw new Error('user not found');
  }
  if (todo.user_id !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  const result = await Todo.destroy({where:{id:req.params.id}});
  res.status(200).json({ message: `goal with id : ${req.params.id} is deleted ${result}` });
});


module.exports = {
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo
}