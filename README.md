# nuxtflix

> A pawsome Vue.js & Nuxt.js Netliflix like web app

## About

Use API from [The Movie DB](https://www.themoviedb.org/documentation/api)

For development, the API Key must be in the file .themoviedb.js in the project root, it's in JSON format like this:
```javascript
module.exports = {
  key: 'PUT-THE-API-KEY-HERE'
};

```

For production, create an environment variable with key "movieDbApiKey". 



## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
