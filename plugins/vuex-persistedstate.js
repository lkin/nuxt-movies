/**
 * Support Nuxt SSR using cookies
 * see: https://github.com/robinvdvleuten/vuex-persistedstate/issues/151
 */
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import cookie from 'cookie';
import { name, version } from '../package';

const versionKey = `${name}@${version}`;

export default ({ store, isDev, req }) => {
  createPersistedState({
    key: versionKey,
    paths: [
      'state.api',
      'state.content.menu',
      'state.content.languages',
      'state.content.countries',
      'state.content.movieGenres',
    ],
    storage: {
      getItem: (key) => process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie || '')[key],
      setItem: (key, value) => Cookies.set(key, value, { expires: 365, secure: !isDev }),
      removeItem: (key) => Cookies.remove(key)
    }
  })(store);

  console.log('Created Persisted State');
};
