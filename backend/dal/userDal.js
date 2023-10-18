const UserDalImpl = require('./userDalImpl').UserDalImpl;
const Seldb = new UserDalImpl.SelDb.Db();
const selDb = Seldb.SelectedDb();

const getAll = async function(){ 
  console.log("hello-----------++++++++++++++++++++")
  const users = await selDb.getAll();
  return users;
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const getOne = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
  //const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const getByCondition = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++Get By Condition")
  //const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const createUser = async function(user){ 
  console.log("hello-----------++++++++++++++++++++");
  const created = await selDb.create(user);
  return created;
}
const updateUser = async function(user){ 
  console.log("hello-----------++++++++++++++++++++");
  const updated = await selDb.update(user);
  return updated;
}
const deleteUser = async function(value){ 
  console.log("hello-----------++++++++++++++++++++");
  const result = await selDb.delete(value);
  return result;
  //const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}




module.exports = {
  getByCondition,
  getAll,
  getOne,
  createUser,
  updateUser,
  deleteUser
}

