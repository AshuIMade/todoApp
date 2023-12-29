const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//const db = require('../model');
const User = require('../model/user');
//const User = db.users;
//const dal = require('../dal/userDal');
/**
 * @desc get all users for ad min purpose 
 * @route get /api/v1/users
 * @param req
 * @param res 
 */
const getUsers = asyncHandler(async (req, res) => { 
  console.log("hello-----------****######");
  let id = req.user.id;
  const user = await User.find({  id:id  });
  if (!user||user) {
    res.status(401);
    throw new Error('user not found');
  }
  if (todo.user_id !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  const users = await User.find();
  res.status(200).json(users);
});
/**
 * @desc get myself
 * @route get /api/v1/users/me
 * @param req
 * @param res 
 */
const getMe = asyncHandler(async (req, res) => { 
  console.log("id::::::" + req.user.id)
  //const { id, firstName, lastName, email } = await User.findOne({ where: { id: req.user.id } });
  res.status(200).json(req.user);
});
/**
 * @desc Register user 
 * @route post /api/v1/users
 * @param req
 * @param res 
 */
const registerUser = asyncHandler(async (req, res) => {
    console.log("hello-----------****######");
  /**Destructure the input*/
  const { firstName, lastName, email, password } = req.body;
  /**Check if the all the necessary fields exist*/
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please add all the fields");
  }
  /**check if the user exists */
  const userExists = await User.findOne({email});
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  /**Next Hash The password */
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  /**then create the user */
  const user = await User.create({
    firstName,
    lastName,
    email,
    password:hashPassword
  });
  /**Then respond to the request */
  if (user) {
    res.status(201).json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user.id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
/**
 * @desc login user 
 * @route post /api/v1/users/login
 * @param req
 * @param res 
 */
const loginUser = asyncHandler(async (req, res) => { 
  /** destructure the req */
  const { email, password } = req.body;
  /**identify the user by email  */
  const user = await User.findOne({ email  });
  console.log(user);
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    res.status(400)
    throw new Error('Invalid credentials');
  }
});
/**
 * @desc update user
 * @route put /api/v1/users/:id
 * @param req+id
 * @param res 
 */
const updateUser = asyncHandler(async (req, res) => { 
  console.log("-------I think we can't even reach here-------+++---------");
  let id = req.user.id;
  const user = await User.findById({ id });
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }
  if (todo.user_id !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  let upid = registerUser.params.id;
  const updatedUser = await User.findByIdAndUpdate({ upid }, req.body, {new:true});
  res.status(200).json(updatedUser);
});
/**
 * @desc delete user
 * @route delete /api/v1/users/:id
 * @param req+id
 * @param res 
 */
const deleteUser = asyncHandler(async (req, res) => {
  let id = req.user.id
   const user = await User.findById({id  });
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }
  if (todo.user_id !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  //{where:{id:req.params.id }}
  const result = await User.remove();
  res.status(200).json({ message: `goal with id : ${req.params.id} is deleted ${result}` });
});
/**
 * @desc Generate JWT 
 * @param req+id
 * @param res 
 */
const generateToken = (id) => {
  console.log("id&&&&&&&" + id)
  let ids = id
  return jwt.sign({ id: ids }, process.env.JWT_SECRET, { expiresIn: '30d' });
}


module.exports = {
  getUsers,
  getMe,
  loginUser,
  registerUser,
  updateUser,
  deleteUser
}