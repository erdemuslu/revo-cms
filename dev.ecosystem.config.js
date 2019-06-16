module.exports = {
  apps: [
    {
      name: 'revo-cms-dev',
      script: 'bin/www',
      watch: true,
      env_production: {
        'PORT': 9002,
        'NODE_ENV': 'development'
      }
    }
  ]
}
