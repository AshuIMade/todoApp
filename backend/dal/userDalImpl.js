const { where } = require('sequelize');

const DB = require('../config/db').DBMS;
const orm = process.env.ORM || 'mongs'; // the other oprtion is 'seqlz'

var UserDal;
(function (UserDal) {
  (function (RelDb) {
    var SequelizeDB = (function () {
      function SequelizeDB() {
        this.database = new DB.ConfigConnect.DbConfigConnect();
        this.db = this.database.getDb(orm);
        this.db.connect();
        this.User = this.db.userInit();
      };
      SequelizeDB.prototype.getAll = async function () {
        console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWW");
        const users = await this.User.findAll({});
        //let Users;
        //this.User.findAll().then(users => { 
          //Users = users;
          //console.log(users);
        //}).catch(err => console.log(err))
        //console.log(Users);
        return users;
      };
      SequelizeDB.prototype.create = async function (user) {
        console.log("-----we arrive at flying duch man------"+user.firstName);
        const created = await this.User.create(user)
        return created;
      };
      SequelizeDB.prototype.update = async function (user) {
        let id = user.id;
        const userUpadated = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password          
        }
        const updated = await this.User.update(userUpadated, { where: { id: id } });
        return updated;
      };
      SequelizeDB.prototype.delete = async function (value) {
        let id = value;
        const result = await this.User.destroy({ where: { id:id } });
        return result;        
      }
      return SequelizeDB;
    })();
    RelDb.SequelizeDB = SequelizeDB;
   })(UserDal.RelDb || (UserDal.RelDb = {}));
  var RelDb = UserDal.RelDb;
  (function (NoSqlDb) {
    var MongooseDb = (function () {
      function MongooseDb() {
        this.database = new DB.ConfigConnect.DbConfigConnect();
        this.db = this.database.getDb(orm);
        this.db.connect();
        this.User = this.db.userInit();
      };
      MongooseDb.prototype.getAll = async function () {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$")
        const User = await this.User.find();
        return User;
      };
      MongooseDb.prototype.create = async function (user) {
        const created = await this.User.create(user);
        return created;
      };
      MongooseDb.prototype.update = async function (user) {
        const updated = await this.User.findByIdAndUpdated(user.id, user);
        return updated;
      };
      MongooseDb.prototype.delete = async function (value) {
        const user = await this.User.findById(value);
        if (!user) return;
        const res = await user.remove();
        return res;
      };
      return MongooseDb;
    })();
    NoSqlDb.MongooseDb = MongooseDb;
  })(UserDal.NoSqlDb || (UserDal.NoSqlDb = {}));
  var NoSqlDb = UserDal.NoSqlDb;
  (function (SelDb) {
    var Db = (function () {
      function Db() {
        //this.SelectedDB = new TodoDal.RelDb.SequelizeDB();
      };
      Db.prototype.SelectedDb = function (value) {
        console.log("********what do we have here*******");
        if (value === "mongs") {
          return new UserDal.NoSqlDb.MongooseDb();          
        }
        return new UserDal.RelDb.SequelizeDB();
      };
      return Db;
    })();
    SelDb.Db = Db;
   })(UserDal.SelDb || (UserDal.SelDb = {}));
  var SelDb = UserDal.SelDb;

})(UserDal||(UserDal={}));

module.exports = {
  UserDalImpl: UserDal
}
