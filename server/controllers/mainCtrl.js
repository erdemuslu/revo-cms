class Main {
  // test method
  async hello (ctx) {
    return ctx.render('index')
  }
}

module.exports = new Main()
