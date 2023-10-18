const todo = {
  title: {
    type: String,
    required: [true, 'Please add your the title']
  },
  description: {
    type: String,
    required: false
  },
  priority: {
    type: String,
    required: [true, 'Please add set priority']
  },
  status: {
    type: String,
    required: false
  },
  createdDate: {
    type: Date,
    required: false
  },
  startDate: {
    type: Date,
    required: [true, 'Please add starting date']
  },
  endDate: {
    type: Date,
    required: [true, 'Please add end date']
  }
}

module.exports = todo