const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.set('useCreateIndex', true)

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: { unique: true }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
      minlength: 6
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('user', UserSchema)
