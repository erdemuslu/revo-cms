module.exports = {
  apps: [
    {
      name: 'revo-cms',
      script: 'server/index.js',
      watch: false,
      env_production: {
        'PORT': 9000,
        'NODE_ENV': 'production'
      }
    }
  ]
}
