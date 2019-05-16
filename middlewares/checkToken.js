const { verify } = require('jsonwebtoken')

// load secret
const { secret } = require('../config')

async function verifyToken (token) {
  const result = await verify(token, secret)

  return result
}

module.exports = async (ctx, next) => {
  // get token from client
  const tokenFromClient = ctx.request.headers['x-access-token'] || ctx.request.body.token

  try {
    await verifyToken(tokenFromClient)

    return next()
  } catch (err) {
    ctx.body = {
      status: 0,
      msg: err.message
    }

    return false
  }
}
