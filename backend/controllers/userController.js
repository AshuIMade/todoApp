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
  const users = await dal.getAll();
  res.status(200).json(users);
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
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };
 const createdUser = await dal.createUser(user);
  res.status(200).json(createdUser);
});
/**
 * @desc update Todo
 * @route /api/todo/:id
 * @param req+id
 * @param res 
 */
const updateUser = asyncHandler(async (req, res) => { 
   console.log("-------I think we can't even reach here-------+++---------")
  //const id = req.params.id;
  const user = {
    id:req.params.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };
  const updatedUser =await dal.updateUser(user)
  res.status(200).json(updatedUser);
});
/**
 * @desc delete Todo
 * @route /api/todo/:id
 * @param req+id
 * @param res 
 */
const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await dal.deleteUser(id);
  res.status(200).json({ message: `goal with id : ${req.params.id} is deleted ${result}` });
});


module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser
}