const Router = require('koa-router')

// load middleware
const checkToken = require('./middlewares/checkToken')

// load controller
const Main = require('./controllers/main')
const Auth = require('./controllers/auth')
const Post = require('./controllers/post')

// init router
const router = new Router()

// main
router.get('/', checkToken, ctx => Main.hello(ctx))

// user
router.post('/user/register', (ctx, next) => Auth.register(ctx, next))
router.post('/user/login', (ctx, next) => Auth.login(ctx, next))

// post
router.get('/post/list', checkToken, (ctx) => Post.list(ctx))
router.post('/post/save', checkToken, (ctx, next) => Post.save(ctx, next))
router.put('/post/update', checkToken, (ctx, next) => Post.update(ctx, next))
router.delete('/post/remove', checkToken, (ctx, next) => Post.remove(ctx, next))

module.exports = router
