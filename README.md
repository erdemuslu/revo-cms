![revo cms logo](https://i.ibb.co/tXkn6S6/logo.png)

# Revo cms
A basic cms to create your own blog 

## Endpoints

| TYPE   | PATH           | PARAMS             | DETAILS      |
|--------|----------------|--------------------|--------------|
| POST   | /user/login    | email, password    | login route  |
| POST   | /user/register | email, password    | create user  |
| GET    | /post/list     |  sort, page, limit | list posts   |
| POST   | /post/save     | title, body        |  create post |
| PUT    | /post/update   | id, body           | update post  |
| DELETE | /post/remove   | id                 |  remove post |

## Before start

Create .env file into root path

```javascript
SECRET_KEY=VERY_SECRET_KEY
PRODUCTION_DB_DSN=production_db_url
STAGING_DB_DSN=staging_db_url
DEVELOPMENT_DB_DSN=mongodb://localhost:27017/revo
```