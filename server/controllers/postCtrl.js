// load mongoose models
const PostModel = require('../models/PostModel');

class Post {
  // get posts
  async getPost() {
    const result = await PostModel.paginate({}, { sort: { _id: -1 }, page: 1, limit: 10 });

    return result;
  }

  // get posts by author
  async getPostByAuthor(id) {
    const result = await PostModel.find({ 'author.id': id });

    return result;
  }

  // save user into db
  async savePost(newPost) {
    const result = await PostModel(newPost).save();

    return result;
  }

  // delete post
  async deletePost(id) {
    const result = await PostModel.findByIdAndRemove(id);

    return result;
  }

  // update post
  async updatePost(id, obj) {
    const result = await PostModel.findByIdAndUpdate(id, obj);

    return result;
  }

  async list(ctx) {
    const result = await this.getPost();

    ctx.body = result;
  }

  async listByAuthor(ctx) {
    const result = await this.getPostByAuthor(ctx.params.id);

    ctx.body = result;
  }

  async save(ctx, next) {
    // get username and password
    const {
      body, authorName,
    } = ctx.request.body;

    // run mongoose model
    const status = await this.savePost({ body, author: { name: authorName } });

    // send data into client
    ctx.body = status;

    await next();
  }

  async remove(ctx, next) {
    const { id } = ctx.request.body;

    const result = await this.deletePost(id);

    ctx.body = {
      result,
    };

    await next();
  }

  async update(ctx, next) {
    // get data from client
    const { id, body } = ctx.request.body;

    const result = await this.updatePost(id, { body });

    ctx.body = {
      result,
    };

    await next();
  }
}

module.exports = new Post();
