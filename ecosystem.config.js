module.exports = {
  apps: [
    {
      name: 'revo-cms',
      script: 'bin/www',
      watch: false,
      env_production: {
        'PORT': 9000,
        'NODE_ENV': 'production'
      }
    }
  ]
}
