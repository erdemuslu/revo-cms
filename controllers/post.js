const cloudinary = require('cloudinary').v2

// load config
const { cloudinary: { cloudName, apiKey, apiSecret } } = require('../config')

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

  // update post
  async updatePost (id, obj) {
    const result = await PostModel.findByIdAndUpdate(id, obj)

    return result
  }

  // upload photo
  async uploadPhoto (ctx, next) {
    // define result
    let result

    // set config
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret
    })

    result = await cloudinary.uploader.upload('/Users/erdem/projects/revo-cms/public/assets/example.jpg')

    ctx.body = result

    next()
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
