module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define("person", {
    firstName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    }   
  });
  return Person;
}