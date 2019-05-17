const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const { Schema } = mongoose

mongoose.set('useCreateIndex', true)

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  header: {
    type: Object,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

PostSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('post', PostSchema)
