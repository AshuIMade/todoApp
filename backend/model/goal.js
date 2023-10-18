module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("todo", {
    title: {
    type: DataTypes.STRING,
    required: [true, 'Please add your the title']
  },
  description: {
    type: DataTypes.STRING,
    required: false
  },
  priority: {
    type: DataTypes.STRING,
    required: [true, 'Please add set priority']
  },
  status: {
    type: DataTypes.STRING,
    required: false
  },
  createdDate: {
    type: DataTypes.DATE,
    required: false
  },
  startDate: {
    type: DataTypes.DATE,
    required: [true, 'Please add starting date']
  },
  endDate: {
    type: DataTypes.DATE,
    required: [true, 'Please add end date']
  }   
  });
  return Todo;
}