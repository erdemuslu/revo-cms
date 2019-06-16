module.exports = {
  production: {
    sitename: 'Revo Cms',
    database: {
      dsn: process.env.PRODUCTION_DB_DSN
    }
  },
  staging: {
    sitename: 'Revo Cms [Staging]',
    database: {
      dsn: process.env.STAGING_DB_DSN
    }
  },
  development: {
    sitename: 'Revo Cms [Development]',
    database: {
      dsn: process.env.DEVELOPMENT_DB_DSN
    }
  }
}
