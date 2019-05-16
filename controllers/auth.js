const { hash } = require('bcrypt')
const { isEmail } = require('validator')

// load mongoose models
const User = require('../models/User')

class Auth {
  // encrypted password
  async handlePassword (password) {
    const result = await hash(password, 10)

    return result
  }

  // save user into db
  async saveUser (newUser) {
    const result = await User(newUser).save()

    return result
  }

  async validate ({ email, password }) {
    const emailCheck = await isEmail(email)
    const passCheck = await password.length > 5

    return { emailCheck, passCheck }
  }

  // register user
  async register (ctx, next) {
    // define status
    let status

    // get username and password
    const { email, password } = ctx.request.body

    // run validate func
    const { emailCheck, passCheck } = await this.validate({ email, password })

    // save db or catch err
    if (emailCheck && passCheck) {
      // create hash
      const newPassword = await this.handlePassword(password)

      // save into db
      status = await this.saveUser({ email, password: newPassword })
    } else {
      // define err msg
      status = { emailCheck, passCheck }
    }

    // send data into client
    ctx.body = {
      status
    }

    next()
  }
}

module.exports = new Auth()
