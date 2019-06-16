module.exports = {
  apps: [
    {
      name: 'revo-cms-dev',
      script: 'server/index.js',
      watch: true,
      env: {
        'PORT': 9002,
        'NODE_ENV': 'development'
      }
    }
  ]
}
