const { Sequelize, DataTypes } = require('sequelize');
const mongoose = require('mongoose');
const Todo = require('../dal/todo');
const User = require('../dal/user');

var dbms;

(function (dbms) {
  (function (Relational) {
    var Sequelizer = (function () {      
      /**Setup variables herelet db;*/
      function Sequelizer() {
        this.sequelize = new Sequelize(
          process.env.DB,
         process.env.USER,
          process.env.PASSWORD,
          {
            host:process.env.HOST,
            dialect: process.env.dialect,
            operatorsAliases: false,
            pool: {
              max: 5,
              min: 0,
              acquire: 30000,
              idle: 10000
            }
          }
        );
        this.sequelize.authenticate()
          .then(() => {
            console.log('connected to mysql DB ');
          })
          .catch(error => {
            console.log('Error in MysqlDb connection:' + error);
          });
        this.db={}
        this.db.Sequelize = Sequelize;
        this.db.sequelize = this.sequelize;
        //this.User = require('../model/user')(this.sequelize, DataTypes);
        //this.Todo = require('../model/todos')(this.sequelize, DataTypes);
       };
      /**Connect to db*/
      Sequelizer.prototype.connect = function () {
        /**this.db.authenticate()
          .then(() => {
            console.log('connected to mysql DB ');
          })
          .catch(error => {
            console.log('Error in MysqlDb connection:' + error);
          });*/
        //this.db.Sequelize = Sequelize;
        //this.db.sequelize = this.sequelize;
        //this.users = require('../model/user')(this.sequelize, DataTypes);
        this.User = this.db.define('user', User);
        this.Todo = this.db.define('todo', Todo);
        console.log("EEEEEEEE******EEEEEEE");
        this.User.hasMany(this.Todo, {
          foreignKey: 'user_id',
          as:'todo'
        });
                console.log("EEEEEEE******EEEEEEEE");

        this.Todo.belongsTo(this.User, {
          foreignKey: 'user_id',
          as:'user'          
        });
                console.log("EEEEEEEE******EEEEEEE");

        this.db.sequelize.sync({ alter: true }).then(() => {
          console.log("well well wll################################");
        }).catch((error) => {
          console.log(error)
        });
        console.log("EEEEEEEEEEEEEEE");
        return this.db;
      };
      Sequelizer.prototype.todoInit = function () {
        this.Todo = this.db.define('todo', Todo);
        return this.Todo;
      };
      Sequelizer.prototype.userInit = function () {
        this.User = this.db.define('user', User);
        

        return this.User;
      };
      return Sequelizer;
    })();    
    Relational.Sequelizer = Sequelizer;

  })(dbms.Relational || (dbms.Relational = {}))
  var Relational = dbms.Relational;
  
  (function (NoSql) {
    var Mongoose = (function () {
      
      /**Set up variables here let db; */
      function Mongoose() {
        this.db = mongoose;        
       };
      /**Connect to db */
      Mongoose.prototype.connect = async function () {
        try {
          this.db = await this.db.connect(process.env.MONGO_URI);
          console.log(`-------MongoDb connected---: ${this.db.connection.host}`);
        } catch (error) {
          console.log(`-------MongoDB Error---` + error);
          process.exit(1);
        }
        return this.db;
      };
      Mongoose.prototype.todoInit = function () {
        this.Todo=this.db.Schema(Todo)
        return this.Todo;
      };
      Mongoose.prototype.userInit = function () {
        this.User=this.db.Schema(User)
        return this.User;
      };

      return Mongoose;
     })();
    NoSql.Mongoose = Mongoose;
    
   })(dbms.NoSql || (dbms.NoSql = {}));
  var NoSql = dbms.NoSql;

  (function (ConfigConnect) {

    var DbConfigConnect = (function () {
      /**Select ORM */
      function DbConfigConnect() {
        console.log("---------What is happning----")
       };
      /**Connect With Proper Db */
      DbConfigConnect.prototype.getDb = function (value) {
        console.log("--did we get here---");
       if (value === "mongs") {
          return new dbms.NoSql.Mongoose();
        }
        return new dbms.Relational.Sequelizer();
        
      };
      return DbConfigConnect;
    })();
    ConfigConnect.DbConfigConnect = DbConfigConnect;

   })(dbms.ConfigConnect || (dbms.ConfigConnect = {}));
  var ConfigConnect = dbms.ConfigConnect;
})(dbms || (dbms = {}));


module.exports = {
    DBMS:dbms
}


