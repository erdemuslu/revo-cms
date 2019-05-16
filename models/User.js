const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.set('useCreateIndex', true)

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema)
