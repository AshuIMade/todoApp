const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');
//const db = require('../model');
const Todo = require('../model/todo');
const User = require('../model/user');
/**
const Todo = db.todos;
const User = db.users;
*/

/**
 * @desc get Todos
 * @route /api/v1/todos
 * @param req
 * @param res 
 */
const getTodos = asyncHandler(async (req, res) => { 
  console.log("hello-----------****"+req.user.id)
  const todos = await Todo.find({user: req.user.id});
  res.status(200).json(todos);
});
/**
 * @desc post Todo
 * @route /api/v1/todos
 * @param req
 * @param res 
 */
const postTodo = asyncHandler(async (req, res) => { 
  /**Destructure the input*/
  //const { firstName, lastName, email, password } = req.body;

  if (!req.body) {
    res.status(400);
    throw new Error('please add some text');
  }
  const { title, description, priority,status,createdDate,startDate,endDate } = req.body;

  console.log("----Hello%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"+req.user.id); 
  /**const todo = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    status: "created",
    createdDate: req.body.createdDate,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    user_id: req.user.id
  };*/
   console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTT"+title+ description+ priority+ status+createdDate+startDate+endDate+req.user.id); 

  const user = req.user.id;
  const todo = await Todo.create({
    user,title, description, priority, status, createdDate, startDate, endDate
  });
  console.log("Do we have any Idea about what is happning77777777777777777777777777777");
  /**Then respond to the request */
  let mailDetails = {
    from: 'asheimade@gmail.com',
    to: req.user.email,
    subject: 'Notification from todo',
    text: description
  };
      
  console.log("FFFFFFFFFFFFFFFFFFFFFFFFFF")

  sendEmail(mailDetails);
  if (todo) {
    console.log("Success So analyze things")
    res.status(201).json({
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      status: todo.status,
      createdDate: todo.createdDate,
      startDate: todo.startDate,
      endDate: todo.endDate,
      user_id:todo.User_id
    })
  } else {
    console.log("Is error comming ");
    res.status(400);
    throw new Error('Invalid user data');
  }
});
/**
 * @desc update Todo
 * @route /api/v1/todos/:id
 * @param req+id
 * @param res 
 */
const updateTodo = asyncHandler(async (req, res) => { 
  console.log("-------I think we can't even reach here-------+++---------");
  let id = req.params.id;
  const todo = await Todo.findById({  id });
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
  let upid = req.params.id;
  const updated = await Todo.findByIdAndUpdate({ upid },req.body,{new:true});
  res.status(200).json(updated);
});
/**
 * @desc delete Todo
 * @route /api/v1/todos/:id
 * @param req+id
 * @param res 
 */
const deleteTodo = asyncHandler(async (req, res) => {
   let id = req.params.id 
  const todo = await Todo.findById({ id});
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
  //{where:{id:req.params.id}}
  const result = await Todo.remove();
  res.status(200).json({ message: `goal with id : ${req.params.id} is deleted ${result}` });
});
const sendEmail = async (mailDetails) => {
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'asheimade@gmail.com',
        pass: '000000000'
    }
});

  const rsp=await mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs'+err);
    } else {
        console.log('Email sent successfully');
    }
  });
  console.log("rsp"+rsp)
  
}


module.exports = {
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo
}