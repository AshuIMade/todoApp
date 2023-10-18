const TodoDalImpl = require('./todoDalImpl').TodoDalImpl;
const Seldb = new TodoDalImpl.SelDb.Db();
const selDb = Seldb.SelectedDb();

const getAll = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
  const todos = await selDb.getAll();
  return todos;
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
const Create = async function(todo){ 
  console.log("hello-----------++++++++++++++++++++")
  const created = await seldb.create(todo);
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
  return created;
}
const Update = async function (todo) {
  //let id = todo.id;
  console.log("hello-----------++++++++++++++++++++");
  const updated = await selDb.update(todo);
  return updated;
  //const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const Delete = async function(value){ 
  console.log("hello-----------++++++++++++++++++++");
  const result = await todo.delete(value);
  return result;
  //const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}




module.exports = {
  getByCondition,
  getAll,
  getOne,
  Create,
  Update,
  Delete
}

