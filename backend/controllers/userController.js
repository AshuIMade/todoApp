const asyncHandler = require('express-async-handler');
const dal = require('../dal/userDal');
/**
 * @desc get Todos
 * @route /api/todos
 * @param req
 * @param res 
 */
const getUsers = asyncHandler(async (req, res) => { 
  console.log("hello-----------****######")
  const goals = await dal.getAll();
  console.log("hello-----------****"+goals)
  res.status(200).json(goals);
});
/**
 * @desc post Todo
 * @route /api/todo
 * @param req
 * @param res 
 */
const postUser =asyncHandler( async (req, res) => { 
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
 // const createdGoal = await Goal.create(goal);
  res.status(200).json(goal);
});
/**
 * @desc update Todo
 * @route /api/todo/:id
 * @param req+id
 * @param res 
 */
const updateUser = asyncHandler(async (req, res) => { 
  const id = req.params.id;
  //const goal = await Goal.update(req.body, { where: { id: id } });
  res.status(200).json(goal);
});
/**
 * @desc delete Todo
 * @route /api/todo/:id
 * @param req+id
 * @param res 
 */
const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  //await Goal.destroy({ where: { id: id } });
  res.status(200).json({ message: `goal with id : ${req.params.id} is deleted!` });
});


module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser
}