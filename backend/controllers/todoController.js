const asyncHandler = require('express-async-handler');
const dal = require('../dal/todoDal');
/**
 * @desc get Todos
 * @route /api/todos
 * @param req
 * @param res 
 */
const getTodos = asyncHandler(async (req, res) => { 
  console.log("hello-----------****")
  const todos = await dal.getAll();
  res.status(200).json(todos);
});
/**
 * @desc post Todo
 * @route /api/todo
 * @param req
 * @param res 
 */
const postTodo =asyncHandler( async (req, res) => { 
  //if (!req.body.text) {
    //res.status(400);
    //throw new Error('please add some text');
  //}
  console.log("----Hello-----"); 
  const todo = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
    createdDate: req.body.createdDate,
    startDate: req.body.startDate,
    endDate:req.body.endDate
  };
 const created = await dal.createTodo(todo);
  res.status(200).json(created);
});
/**
 * @desc update Todo
 * @route /api/todo/:id
 * @param req+id
 * @param res 
 */
const updateTodo = asyncHandler(async (req, res) => { 
  console.log("-------I think we can't even reach here-------+++---------")
  //const id = req.params.id;
  const todo = {
    id:req.params.id,
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status,
    createdDate: req.body.createdDate,
    startDate: req.body.startDate,
    endDate:req.body.endDate
  };
  const updated =await dal.updateTodo(todo)
  res.status(200).json(updated);
});
/**
 * @desc delete Todo
 * @route /api/todo/:id
 * @param req+id
 * @param res 
 */
const deleteTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await dal.deleteTodo(id);
  res.status(200).json({ message: `goal with id : ${req.params.id} is deleted ${result}` });
});


module.exports = {
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo
}