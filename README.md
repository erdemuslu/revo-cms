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

Create config.js file into root path

```javascript
const config = {
  // mlab config
  db: {
    port: ,
    name: ,
    username: ,
    password:
  },
  // cloudinary config
  cloudinary: {
    cloudName: ,
    apiKey: ,
    apiSecret: 
  },
  // your secret key
  secret: 
}

module.exports = config
```