const bcrypt = require('bcrypt')

// load mongoose models
const User = require('../models/User')

class Auth {
  // encrypted password
  async handlePassword (password) {
    const result = await bcrypt.hash(password, 10)

    return result
  }

  // save user into db
  async saveUser (newUser) {
    const result = await User(newUser).save()

    return result
  }

  // register user
  async register (ctx, next) {
    // get username and password
    const { username, password } = ctx.request.body

    // create hash
    const newPassword = await this.handlePassword(password)

    // get result of the save action into db
    const log = await this.saveUser({ username, password: newPassword })

    ctx.body = {
      msg: 'OK',
      newPassword,
      log
    }

    next()
  }
}

module.exports = new Auth()
