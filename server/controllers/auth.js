const { hash, compare } = require('bcrypt')
const { isEmail } = require('validator')
const { sign } = require('jsonwebtoken')

// load secret key
const { secret } = require('../../config')

// load mongoose models
const UserModel = require('../models/User')

class Auth {
  // encrypted password
  async handlePassword (password) {
    const result = await hash(password, 10)

    return result
  }

  // save user into db
  async saveUser (newUser) {
    const result = await UserModel(newUser).save()

    return result
  }

  async validate ({ email, password }) {
    const emailCheck = await isEmail(email)
    const passCheck = await password.length > 5

    return { emailCheck, passCheck }
  }

  // search into db
  async findUser (email) {
    const result = await UserModel.findOne({ email: new RegExp(`^${email}$`, 'i') })

    return result
  }

  // compare passwords
  async comparePass (fromUser, fromDb) {
    const result = await compare(fromUser, fromDb)

    return result
  }

  // create token
  async createToken (payload) {
    // create token
    const result = await sign(payload, secret, {
      expiresIn: 720 // 12 hours
    })

    return result
  }

  // check
  async check (ctx, next) {
    // send data into client
    ctx.body = {
      status: 1
    }

    await next()
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

    await next()
  }

  async login (ctx, next) {
    // define result
    const result = { success: 0 }

    // get username
    const { email, password } = ctx.request.body

    // run validate func
    const { emailCheck, passCheck } = await this.validate({ email, password })

    if (emailCheck && passCheck) {
      // find username
      const user = await this.findUser(email)

      // check user exist
      if (user === null) {
        ctx.body = {
          msg: 'this email does not exist'
        }

        return false
      }

      // check password
      const checkPassword = await this.comparePass(password, user.password)

      if (!checkPassword) {
        ctx.body = {
          msg: 'email or password invalid'
        }

        return false
      }

      // send id
      result.id = user._id

      // create token
      result.token = await this.createToken({ email })

      // set success
      result.success = 1

      // send data into client
      ctx.body = result
    } else {
      result.props = {
        email: emailCheck,
        password: passCheck
      }

      // send data into client
      ctx.body = result
    }

    await next()
  }
}

module.exports = new Auth()
