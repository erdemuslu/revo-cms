const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

mongoose.set('useCreateIndex', true);

const PostSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('post', PostSchema);
