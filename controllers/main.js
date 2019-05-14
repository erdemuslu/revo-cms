class Main {
  constructor () {
    this.name = 'Erdem'
  }

  test () {
    console.log('erdem')
  }

  // test method
  async hello (ctx) {
    ctx.body = {
      message: 'Hello api'
    }
  }
}

module.exports = new Main()
