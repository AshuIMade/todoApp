//const TodoDalImpl = require('./todoDalImpl').TodoDalImpl;
//const Seldb = new TodoDalImpl.SelDb.Db();
//const selDb = Seldb.SelectedDb();

const getAll = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
  const todos = await selDb.getAll();
  return todos;
}
const getOne = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
}
const getByCondition = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++Get By Condition")
  
}
const createTodo = async function(todo){ 
  console.log("hello-----------++++++++++++++++++++")
  const created = await selDb.create(todo);
  return created;
}
const updateTodo = async function (todo) {
  //let id = todo.id;
  console.log("hello-----------++++++++++++++++++++");
  const updated = await selDb.update(todo);
  return updated;
}
const deleteTodo = async function(value){ 
  console.log("hello-----------++++++++++++++++++++");
  const result = await selDb.delete(value);
  return result;
}




module.exports = {
  getByCondition,
  getAll,
  getOne,
  createTodo,
  updateTodo,
  deleteTodo
}

