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

  // delete post
  async deletePost (id) {
    const result = await PostModel.findByIdAndRemove(id)

    return result
  }

  // delete post
  async updatePost (id, obj) {
    const result = await PostModel.findByIdAndUpdate(id, obj)

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

  async remove (ctx, next) {
    // define result
    let result

    const { id } = ctx.request.body

    result = await this.deletePost(id)

    ctx.body = {
      result
    }

    next()
  }

  async update (ctx, next) {
    // define result
    let result

    // get data from client
    const { id, body } = ctx.request.body
    console.log(id, body)

    result = await this.updatePost(id, { body })

    ctx.body = {
      result
    }

    next()
  }
}

module.exports = new Post()
