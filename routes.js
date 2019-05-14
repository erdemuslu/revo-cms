const Router = require('koa-router')

// load controller
const Main = require('./controllers/main')

// init router
const router = new Router()

// main
router.get('/', ctx => Main.hello(ctx))

module.exports = router
