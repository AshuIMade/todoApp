module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define("goal", {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    priority: {
      type: DataTypes.STRING,
      allowNull:true
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull:true
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull:true
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull:true
    }    
  });
  return Goal;
}