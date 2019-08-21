const Pug = require('koa-pug')

const renderPug = (app) => new Pug({
  viewPath: './dashboard/views',
  // debug: process.env.NODE_ENV === 'development',
  // pretty: process.env.NODE_ENV === 'development',
  // compileDebug: process.env.NODE_ENV === 'development',
  noCache: process.env.NODE_ENV === 'development',
  app
})

module.exports = renderPug
