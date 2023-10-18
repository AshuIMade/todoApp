const express = require('express');
const { getUsers,postUser,updateUser,deleteUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/').get(getUsers).post(postUser);
userRouter.route('/:id').put(updateUser).delete(deleteUser);

module.exports = userRouter;