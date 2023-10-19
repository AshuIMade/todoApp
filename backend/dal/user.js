const user = {
  firstName: {
    type: String,
    required: [true, 'Please add your first name']
  },
  lastName: {
    type: String,
    required: [true, 'Please add your last name']
  },
  email: {
    type: String,
    required: [true, 'Please add your email name'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please set password']
  }
}

module.exports = user