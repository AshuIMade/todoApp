const asyncHandler = require('express-async-handler');
const db = require('../model');
const Goal = db.goals;
const User = db.persons;
/**
 * @desc get Todos
 * @route /api/todos
 * @param req
 * @param res 
 */
const getTodos = asyncHandler(async (req, res) => { 
  const goals = await Goal.findAll({});
  res.status(200).json(goals);
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
  //console.log(req.body); 
  const goal = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    status: req.body.status
  };
  const createdGoal = await Goal.create(goal);
  res.status(200).json(createdGoal);
});
/**
 * @desc update Todo
 * @route /api/todo/:id
 * @param req+id
 * @param res 
 */
const updateTodo = asyncHandler(async (req, res) => { 
  const id = req.params.id;
  const goal = await Goal.update(req.body, { where: { id: id } });
  res.status(200).json(goal);
});
/**
 * @desc delete Todo
 * @route /api/todo/:id
 * @param req+id
 * @param res 
 */
const deleteTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await Goal.destroy({ where: { id: id } });
  res.status(200).json({ message: `goal with id : ${req.params.id} is deleted!` });
});


module.exports = {
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo
}