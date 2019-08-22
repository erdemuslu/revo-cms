const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const limit = require('koa-limit');
const cors = require('koa-cors');

// load routes
const router = require('./routes');

// load libs
const renderPug = require('./lib/renderPug');

module.exports = () => {
  // get port & env
  const { PORT, NODE_ENV } = process.env;

  // init app
  const app = new Koa();

  // request limit
  app.use(limit({
    limit: 1000,
    interval: 1000 * 60 * 60 * 8,
  }));

  // init pug
  renderPug(app);

  // init static files
  app.use(serve('./dashboard'));

  // cors
  app.use(cors({
    credentials: true,
  }));

  // Use the bodyparser middlware
  app.use(BodyParser());

  // init router setup
  app.use(router.routes());

  // allow router setup
  app.use(router.allowedMethods());

  app.listen(PORT, () => {
    console.log(`Mode is ${NODE_ENV}`);
    console.log(`App is running at http://localhost:${PORT}`);
  });

  return app;
};
