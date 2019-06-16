class Main {
  // test method
  async hello (ctx, next) {
    console.log('Route is working')
    ctx.body = {
      message: 'Hello api'
    }

    await next()
  }
}

module.exports = new Main()
