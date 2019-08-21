module.exports = {
  apps: [
    {
      name: 'revo-cms-dev',
      script: 'bin/www',
      ignore_watch: ['node_modules', '.cache', 'dashboard/output/**/*', 'dashboard/script/**/*', 'dashboard/style/**/*', '.git'],
      watch: true,
      env_development: {
        'PORT': 9002,
        'NODE_ENV': 'development'
      }
    }
  ]
}
