class Main {
  // test method
  async hello (ctx) {
    ctx.body = {
      message: 'Hello api'
    }
  }
}

module.exports = new Main()
