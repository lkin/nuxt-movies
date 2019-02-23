export const state = () => ({
  // content
  settings: null,
  api: {
    key: process.env.movieDbApiKey,
    configuration: {},
    url: {
      configuration: 'https://api.themoviedb.org/3/configuration?api_key=',
      images: 'https://image.tmdb.org/t/p/',
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
    }
  },
  // omdb: {
  //   omdbKey: '2899512c',
  //   dataUrl: 'http://www.omdbapi.com/?apikey=2899512c&'
  // },

  content: {
    menu: null,
    movies: [],
    featured: [],
    topRated: {}
  }
});

export const mutations = {
  SET_HOSTNAME(state, data) {
    state.hostname = data;
  },
  SET_SETTINGS(state, settings) {
    state.settings = settings;
  },
  SET_MENU(state, menu) {
    state.content.menu = menu;
  },
  SET_API_CONFIGURATION(state, configuration) {
    state.api.configuration = configuration;
  },
  SET_TOP_RATED(state, data) {
    state.content.topRated = data;
  },

  SET_FEATURED(state, featured) {
    state.content.featured = featured;
  },
  SET_MOVIES(state, movies) {
    state.content.movies = movies;
  }
};

export const actions = {
  /**
   * nuxtServerInit
   * @param dispatch
   * @returns {Promise<void>}
   */
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSettings');
    await dispatch('getMenuContent');

    try {
      await dispatch('getApiConfiguration');
    } catch (error) {
      console.error({ error });
    }

    await dispatch('getApiTopRated');

    await dispatch('getFeaturedMovies');
  },

  async getSettings({ state, commit }) {
    const settings = require('~/content/settings.json');
    commit('SET_SETTINGS', settings);
    commit('SET_HOSTNAME', settings.hostname ? settings.hostname : '');
  },

  async getMenuContent({ state, commit }) {
    const featured = require('~/content/featured.json');
    commit('SET_FEATURED', featured);
  },

  // ---- API ----
  async getApiConfiguration({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.configuration + state.api.key,
      responseType: 'json'
    });

    commit('SET_API_CONFIGURATION', data);
  },

  async getApiTopRated({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.topRated,
      responseType: 'json'
    });

    commit('SET_TOP_RATED', data);
  },



  async getFeaturedMovies({ state, commit }) {
    const menu = require('~/content/menu.json');
    commit('SET_MENU', menu);
  },

  async getMovies({ state, commit }) {
    // const context = await require.context('~/content/movies/', false, /\.json$/);
    // const movies = await context.keys().map(key => ({
    //   ...context(key),
    //   _path: `/works/${key.replace('.json', '').replace('./', '')}`,
    //   _slug: `${key.replace('.json', '').replace('./', '')}`
    // }));
    //
    // commit('SET_MOVIES', movies);
    let { data } = await this.$axios({
      method: 'get',
      url: state.omdb.dataUrl,
      responseType: 'json'
    });

    commit('SET_MOVIES', data);
  }

};
