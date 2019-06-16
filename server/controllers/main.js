class Main {
  // test method
  async hello (ctx, next) {
    ctx.body = {
      message: 'Hello api'
    }

    await next()
  }
}

module.exports = new Main()
