const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const limit = require('koa-limit')

// load routes
const router = require('./routes')

// init app
const app = new Koa()

// request limit
app.use(limit({
  limit: 1000,
  interval: 1000 * 60 * 60
}))

// Use the bodyparser middlware
app.use(BodyParser())

// define port
const { PORT, NODE_ENV } = process.env

// init router setup
app.use(router.routes())

// allow router setup
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`Mode is ${NODE_ENV}`)
  console.log(`App is running at http://localhost:${PORT}`)
})
