class Main {
  // home route
  async home(ctx) {
    return ctx.render('index');
  }
}

module.exports = new Main();
