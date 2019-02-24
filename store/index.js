export const state = () => ({
  // content
  settings: null,
  api: {
    key: process.env.movieDbApiKey,
    configuration: {},
    url: {
      configuration: `https://api.themoviedb.org/3/configuration?api_key=${process.env.movieDbApiKey}`,
      images: 'https://image.tmdb.org/t/p/',
      youtubeTrailer: 'https://www.youtube.com/watch?v=',
      youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
      youtubePosterMaxRes: 'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',
      moviesGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.movieDbApiKey}&language=en-US`,
      movieDetails: `https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=${process.env.movieDbApiKey}&append_to_response=videos`,
      latestMovie: `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.movieDbApiKey}&language=en-US`,
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      popular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
    }
  },

  content: {
    menu: null,
    movieGenres: [],
    latestMovie: undefined,
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
  SET_MOVIE_GENRES(state, data) {
    state.content.movieGenres = data;
  },
  SET_LATEST_MOVIE(state, data) {
    state.content.latestMovie = data;
  },
  SET_TOP_RATED(state, data) {
    state.content.topRated = data;
  },

  // SET_FEATURED(state, featured) {
  //   state.content.featured = featured;
  // },
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
    await dispatch('getApiMovieGenres');
  },

  async getSettings({ state, commit }) {
    const settings = require('~/content/settings.json');
    commit('SET_SETTINGS', settings);
    commit('SET_HOSTNAME', settings.hostname ? settings.hostname : '');
  },

  async getMenuContent({ state, commit }) {
    const menu = require('~/content/menu.json');
    commit('SET_MENU', menu.menuItems);
  },

  // ---- API ----
  async getApiConfiguration({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.configuration,
      responseType: 'json'
    });

    commit('SET_API_CONFIGURATION', data);
  },

  async getApiMovieGenres({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.moviesGenres,
      responseType: 'json'
    });

    commit('SET_MOVIE_GENRES', data.genres);
  },

  async getApiLatestMovie({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.latestMovie,
      responseType: 'json'
    });

    commit('SET_LATEST_MOVIE', data);
  },

  async getApiUpcoming({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.upcoming,
      responseType: 'json'
    });

    return data;
  },


  async getApiMovieDetails({ state, commit }, id) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.movieDetails.replace('MOVIE_ID', id),
      responseType: 'json'
    });

    return data;
  },


  async getApiTopRated({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.topRated,
      responseType: 'json'
    });

    commit('SET_TOP_RATED', data);
  },


  // async getFeaturedMovies({ state, commit }) {
  //   const menu = require('~/content/menu.json');
  //   commit('SET_MENU', menu);
  // },
  //
  // async getMovies({ state, commit }) {
  //   // const context = await require.context('~/content/movies/', false, /\.json$/);
  //   // const movies = await context.keys().map(key => ({
  //   //   ...context(key),
  //   //   _path: `/works/${key.replace('.json', '').replace('./', '')}`,
  //   //   _slug: `${key.replace('.json', '').replace('./', '')}`
  //   // }));
  //   //
  //   // commit('SET_MOVIES', movies);
  //   let { data } = await this.$axios({
  //     method: 'get',
  //     url: state.omdb.dataUrl,
  //     responseType: 'json'
  //   });
  //
  //   commit('SET_MOVIES', data);
  // }

};
