const env = require('dotenv').config()

module.exports = {
  production: {
    sitename: 'Revo Cms',
    database: {
      dsn: env.parsed.PRODUCTION_DB_DSN
    }
  },
  staging: {
    sitename: 'Revo Cms [Staging]',
    database: {
      dsn: env.parsed.STAGING_DB_DSN
    }
  },
  development: {
    sitename: 'Revo Cms [Development]',
    database: {
      dsn: env.parsed.DEVELOPMENT_DB_DSN
    }
  },
  secret: env.parsed.SECRET_KEY,
  cloudinary: {
    cloudName: env.parsed.CLOUDINARY_NAME,
    apiKey: env.parsed.CLOUDINARY_APIKEY,
    apiSecret: env.parsed.CLOUDINARY_APISECRET
  }
}
