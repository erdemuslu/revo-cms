const Router = require('koa-router')

// load middleware
const checkToken = require('./middlewares/checkToken')

// load controller
const { hello } = require('./controllers/mainCtrl')
const userCtrl = require('./controllers/userCtrl')
const postCtrl = require('./controllers/postCtrl')

// init router
const router = new Router()

// main
router.get('/', hello)

// auth
router.post('/auth/check', (ctx, next) => userCtrl.check(ctx, next))

// user
router.post('/user/register', (ctx, next) => userCtrl.register(ctx, next))
router.post('/user/login', (ctx, next) => userCtrl.login(ctx, next))

// post
router.get('/post/list', checkToken, (ctx) => postCtrl.list(ctx))
router.get('/post/list/:id', checkToken, (ctx) => postCtrl.listByAuthor(ctx))
router.post('/post/save', checkToken, (ctx, next) => postCtrl.save(ctx, next))
router.put('/post/update', checkToken, (ctx, next) => postCtrl.update(ctx, next))
router.delete('/post/remove', checkToken, (ctx, next) => postCtrl.remove(ctx, next))

module.exports = router
