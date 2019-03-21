const glob = require('glob');
const path = require('path');
const pkg = require('./package');


/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
// const dynamicRoutes = getDynamicPaths({
//   // '/movies': 'movies/*.json'
//   // '/blog': 'blog/posts/*.json',
//   // '/page': 'page/posts/*.json',
//   // '/category': 'categories/posts/*.json',
//   // '/tagged': 'tags/posts/*.json'
// });

console.log('Dynamic Routes:');
// console.log({ dynamicRoutes });
console.log(`process.env.movieDbApiKey: ${process.env.movieDbApiKey}`);


/**
 * Routes used by Nuxt generate and Sitemap
 * @type {string[]}
 */
const routes = [
  '/',
  // ...dynamicRoutes
];


/**
 * NUXTJS Config
 */
module.exports = {
  env: {
    movieDbApiKey: process.env.movieDbApiKey || require('./.themoviedb.js').key
  },

  mode: 'universal',

  // modern: 'client',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/gsap', ssr: false },
    { src: '~/plugins/vue-lazy-load', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    ['nuxt-svg-sprite-module', {
      directory: '/assets/icons',
      options: {
        // Configuration options:
        // https://github.com/jkphl/svg-sprite#configuration-basics
      }
    }]
  ],

  /*
  ** Route config for pre-rendering
  */
  generate: {
    // routes: dynamicRoutes
    routes: routes
  },

  terser: {
    sourceMap: true
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },


  axios: {
    debug: false,
    // https: true
  },

  sitemap: {
    path: '/sitemap.xml',
    // hostname: 'https://www.xxxxx.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    exclude: [
      '/admin/**'
    ],
    routes: routes
  }
};
