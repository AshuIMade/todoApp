const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle:dbConfig.pool.idle
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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.persons = require('./person')(sequelize, DataTypes);
db.goals = require('./goal')(sequelize, DataTypes); 
db.sequelize.sync({ force: false })
  .then(
    () => {
      console.log('resync is done...');
    });

module.exports = db