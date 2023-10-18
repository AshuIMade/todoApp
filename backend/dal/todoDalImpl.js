const DB = require('../config/db').DBMS;
const orm = process.env.ORM || 'mongs'; // the other oprtion is 'seqlz'

var TodoDal;
(function (TodoDal) {
  (function (RelDb) {
    var SequelizeDB = (function () {
      function SequelizeDB() {
        this.database = new DB.ConfigConnect.DbConfigConnect();
        this.db = this.database.getDb(orm);
        this.db.connect();
        this.Todo = this.db.todoInit();//userInit();
      };
      SequelizeDB.prototype.getAll = async function () {
        console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWW")
        const Todos = await this.Todo.findAll({});
        return Todos;
      };
      
      SequelizeDB.prototype.create = async function (todo) {
        const created = await this.Todo.create(todo)
        return created;
      };
      SequelizeDB.prototype.update = async function (todo) {
        let id = todo.id;
        const updated = await this.Todo.update(todo, { where: { id: id } });
        return updated;
      };
      SequelizeDB.prototype.delete = async function (value) {
        let id = value;
        const result = await this.Todo.destroy({ where: { id:id } });
        return result;        
      }

      return SequelizeDB;
    })();
    RelDb.SequelizeDB = SequelizeDB;
   })(TodoDal.RelDb || (TodoDal.RelDb = {}));
  var RelDb = TodoDal.RelDb;
  (function (NoSqlDb) {
    var MongooseDb = (function () {
      function MongooseDb() {
        this.database = new DB.ConfigConnect.DbConfigConnect();
        this.db = this.database.getDb(orm);
        this.db.connect();
        this.Todo = this.db.todoInit();//userInit();
      };
      MongooseDb.prototype.getAll = async function () {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$")
        const Todos = await this.Todo.find();
        return Todos;
      };
      MongooseDb.prototype.create = async function (todo) {
        const created = await this.Todo.create(todo);
        return created;
      };
      MongooseDb.prototype.update = async function (todo) {
        const updated = await this.Todo.findByIdAndUpdated(todo.id, todo);
        return updated;
      };
      MongooseDb.prototype.delete = async function (value) {
        const todo = await this.Todo.findById(value);
        if (!todo) return;
        const res = await todo.remove();
        return res;
      };
      return MongooseDb;
    })();
    NoSqlDb.MongooseDb = MongooseDb;
  })(TodoDal.NoSqlDb || (TodoDal.NoSqlDb = {}));
  var NoSqlDb = TodoDal.NoSqlDb;
  (function (SelDb) {
    var Db = (function () {
      function Db() {
        //this.SelectedDB = new TodoDal.RelDb.SequelizeDB();
      };
      Db.prototype.SelectedDb = function () {
        console.log("********did we arrive here*******");
        return new TodoDal.RelDb.SequelizeDB();
      };
      return Db;
    })();
    SelDb.Db = Db;
   })(TodoDal.SelDb || (TodoDal.SelDb = {}));
  var SelDb = TodoDal.SelDb;

})(TodoDal||(TodoDal={}));

module.exports = {
  TodoDalImpl: TodoDal
}
/**
const database = new DB.ConfigConnect.DbConfigConnect();
const db = database.getDb(orm);
db.connect();
const Todo = db.todoInit();//userInit();


const getAll = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
  const goals = await Todo.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const getOne = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
  const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const getByCondition = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++Get By Condition")
  const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const Create = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
  const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const Update = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
  const goals = await user.findAll({});
  //console.log("hello-----------****"+goals)
  //res.status(200).json(goals);
}
const Delete = async function(req, res){ 
  console.log("hello-----------++++++++++++++++++++")
  const goals = await user.findAll({});
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

*/