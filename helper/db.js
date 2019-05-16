const mongoose = require('mongoose')
const { db: { port, name, username, password } } = require('../config')

// init mongo connection
module.exports = () => {
  // db connection
  mongoose.connect(`mongodb://${username}:${password}@ds155916.mlab.com:${port}/${name}`, {
    useNewUrlParser: true
  })

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected')
  })

  mongoose.connection.on('error', (error) => {
    console.log('MongoDB: Error', error)
  })
}
