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
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        const Todos = await this.Todo.findAll({});
        return Todos;
      };
      
      SequelizeDB.prototype.create = async function (todo) {
        console.log("So its not responding" + todo);
        const created = await this.Todo.create(todo)
        return created;
      };
      SequelizeDB.prototype.update = async function (todo) {
        let id = todo.id;
        const todoUpadated = {
          title: todo.title    
        }
        /**
         *       description: todo.description,
          priority: todo.priority,
          status: todo.status,
          createdDate: todo.createdDate,
          startDate: todo.startDate,
          endDate: todo.endDate
         */
        console.log("Id is good " + todo.id);
        console.log("Title " + todo.title);
        const updated = await this.Todo.update(todoUpadated, { where: { id: id } });
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
      Db.prototype.SelectedDb = function (value) {
        console.log("********did we arrive here*******");
        if (value === "mongs") {
          return new TodoDal.NoSqlDb.MongooseDb();
        }
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
