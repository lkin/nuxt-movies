import shared from '../lib/shared';

export const state = () => ({
  api: {
    key: process.env.movieDbApiKey,
    configuration: {},
    url: {
      configuration: `https://api.themoviedb.org/3/configuration?api_key=${process.env.movieDbApiKey}`,
      images: 'https://image.tmdb.org/t/p/',
      youtubeEmbed: 'https://www.youtube.com/embed/',
      youtubeTrailer: 'https://www.youtube.com/watch?v=',
      youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
      youtubePosterMaxRes: 'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',

      // movies
      // ------------------------------------------------------------
      movieCertifications: `https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.movieDbApiKey}`,
      moviesGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.movieDbApiKey}&language=en-US`,
      movieDetails: `https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=${process.env.movieDbApiKey}&include_image_language=en&append_to_response=videos,images`,
      movieCredits: `https://api.themoviedb.org/3/movie/MOVIE_ID/credits?api_key=${process.env.movieDbApiKey}`,

      // trending: https://developers.themoviedb.org/3/trending/get-trending
      trending: `https://api.themoviedb.org/3/trending/TYPE/TIME?api_key=${process.env.movieDbApiKey}`,

      // movie collections
      latestMovie: `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.movieDbApiKey}&language=en-US`,
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      popular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,

      // movie related
      similar: `https://api.themoviedb.org/3/movie/MOVIE_ID/similar?api_key=${process.env.movieDbApiKey}`,
      movieLists: `https://api.themoviedb.org/3/movie/MOVIE_ID/lists?api_key=${process.env.movieDbApiKey}`,


      // tv series
      // ------------------------------------------------------------
      tvCertifications: `https://api.themoviedb.org/3/certification/tv/list?api_key=${process.env.movieDbApiKey}`,
      tvGenres: `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.movieDbApiKey}&language=en-US`,
      tvDetails: `https://api.themoviedb.org/3/tv/TV_ID?api_key=${process.env.movieDbApiKey}&append_to_response=videos`,

      latestTv: `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.movieDbApiKey}&language=en-US`,


      // people
      // ------------------------------------------------------------
      peopleDetails: `https://api.themoviedb.org/3/person/PERSON_ID?api_key=${process.env.movieDbApiKey}&language=en-US`,
      peopleCredits: `https://api.themoviedb.org/3/person/PERSON_ID/combined_credits?api_key=${process.env.movieDbApiKey}&language=en-US`,

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
    const settings = require('../content/settings.json'); // don't use "~" for storybook compatibility
    commit('SET_SETTINGS', settings);
    commit('SET_HOSTNAME', settings.hostname ? settings.hostname : '');
  },

  async getMenuContent({ state, commit }) {
    const menu = require('../content/menu.json'); // don't use "~" for storybook compatibility
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


  async getApiMovieCredits({ state, commit }, id) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.movieCredits.replace('MOVIE_ID', id),
      responseType: 'json'
    });

    return data;
  },


  async getApiPeopleDetails({ state, commit }, id) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.peopleDetails.replace('PERSON_ID', id),
      responseType: 'json'
    });

    return data;
  },

  async getApiPeopleCredits({ state, commit }, id) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.peopleCredits.replace('PERSON_ID', id),
      responseType: 'json'
    });

    return data;
  },


  async getApiTopRated({ state, commit }, mediaType) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.topRated.replace('MEDIA_TYPE', mediaType),
      responseType: 'json'
    });

    return data;
    // commit('SET_TOP_RATED', data);
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
