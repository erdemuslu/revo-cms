const Router = require('koa-router')

// load middleware
const checkToken = require('./middlewares/checkToken')

// load controller
const Main = require('./controllers/main')
const Auth = require('./controllers/auth')

// init router
const router = new Router()

// main
router.get('/', checkToken, ctx => Main.hello(ctx))

// user
router.post('/user/register', (ctx, next) => Auth.register(ctx, next))
router.post('/user/login', (ctx, next) => Auth.login(ctx, next))

module.exports = router
