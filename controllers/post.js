// load mongoose models
const PostModel = require('../models/Post')

class Post {
  // save user into db
  async getPost () {
    const result = await PostModel.paginate({}, { sort: { _id: -1 }, page: 1, limit: 10 })

    return result
  }

  // save user into db
  async savePost (newPost) {
    const result = await PostModel(newPost).save()

    return result
  }

  async list (ctx) {
    // define result
    let result

    result = await this.getPost()

    ctx.body = result
  }

  async save (ctx, next) {
    // define status
    let status

    // get username and password
    const { title, body, author } = ctx.request.body

    // run mongoose model
    status = await this.savePost({ title, body, author })

    // send data into client
    ctx.body = status

    next()
  }
}

module.exports = new Post()
