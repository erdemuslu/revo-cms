module.exports = {
  apps: [
    {
      name: 'revo-cms-dev',
      script: 'bin/www',
      ignore_watch: ['node_modules', '.cache', 'dashboard/output/**/*', 'dashboard/app/**/*', '.git'],
      watch: true,
      env_development: {
        PORT: 9002,
        NODE_ENV: 'development',
      },
    },
  ],
};
