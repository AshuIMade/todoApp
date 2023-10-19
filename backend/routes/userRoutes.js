const express = require('express');
const { getUsers, registerUser, getMe, loginUser, updateUser, deleteUser } = require('../controllers/userController');
const {protect}=require('../middleware/authMiddleware')

const userRouter = express.Router();

userRouter.get('/',protect, getUsers);
userRouter.post('/',registerUser);
userRouter.get('/me',protect,getMe);
userRouter.post('/login',loginUser);
userRouter.put('/:id',protect, updateUser);
userRouter.delete('/:id',protect,deleteUser);

module.exports = userRouter;