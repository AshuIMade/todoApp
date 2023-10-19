const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
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
sequelize.authenticate()
          .then(() => {
            console.log('connected to mysql DB ');
          })
          .catch(error => {
            console.log('Error in MysqlDb connection:' + error);
          });
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.todos = require('./todoModel.js')(sequelize, DataTypes);
db.users = require('./userModel.js')(sequelize, DataTypes);
db.users.hasMany(db.todos, {
          foreignKey: 'user_id',
          as:'todo'
        });
db.todos.belongsTo(db.users, {
          foreignKey: 'user_id',
          as:'user'          
        });
        
/**db.sequelize.sync({ alter: true }).then(() => {
          console.log("well well wll################################");
        }).catch((error) => {
          console.log(error)
        });*/

module.exports = db;