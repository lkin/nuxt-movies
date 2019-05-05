import shared from '../lib/shared';

export const state = () => ({
  api: {
    key: process.env.movieDbApiKey,
    configuration: {},
    url: {
      configuration: `https://api.themoviedb.org/3/configuration?api_key=${process.env.movieDbApiKey}`,
      languages: `https://api.themoviedb.org/3/configuration/languages?api_key=${process.env.movieDbApiKey}`,
      countries: `https://api.themoviedb.org/3/configuration/countries?api_key=${process.env.movieDbApiKey}`,
      images: 'https://image.tmdb.org/t/p/',
      youtubeEmbed: 'https://www.youtube.com/embed/',
      youtubeTrailer: 'https://www.youtube.com/watch?v=',
      youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
      youtubePosterMaxRes: 'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',
      search: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.movieDbApiKey}&language=en-US&query=KEYWORD&page=1&include_adult=false`,

      // movies
      // ------------------------------------------------------------
      movieCertifications: `https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.movieDbApiKey}`,
      moviesGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.movieDbApiKey}&language=en-US`,
      movieDetails: `https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=${process.env.movieDbApiKey}&include_image_language=en&append_to_response=videos,images`,
      movieCredits: `https://api.themoviedb.org/3/movie/MOVIE_ID/credits?api_key=${process.env.movieDbApiKey}`,

      // trending: https://developers.themoviedb.org/3/trending/get-trending
      trending: `https://api.themoviedb.org/3/trending/TYPE/TIME?api_key=${process.env.movieDbApiKey}`,

      // movie collections
      // latestMovie: `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.movieDbApiKey}&language=en-US`,
      movieTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      movieNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      movieUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      moviePopular: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,

      // movie related
      movieSimilar: `https://api.themoviedb.org/3/movie/MOVIE_ID/similar?api_key=${process.env.movieDbApiKey}`,
      movieLists: `https://api.themoviedb.org/3/movie/MOVIE_ID/lists?api_key=${process.env.movieDbApiKey}`,


      // tv series
      // ------------------------------------------------------------
      tvCertifications: `https://api.themoviedb.org/3/certification/tv/list?api_key=${process.env.movieDbApiKey}`,
      tvGenres: `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.movieDbApiKey}&language=en-US`,
      tvDetails: `https://api.themoviedb.org/3/tv/TV_ID?api_key=${process.env.movieDbApiKey}&append_to_response=videos,images`,

      tvLatest: `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.movieDbApiKey}&language=en-US`,
      tvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      tvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      tvOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,
      tvOnTheAirToday: `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.movieDbApiKey}&language=en-US&page=1`,


      // people
      // ------------------------------------------------------------
      peopleDetails: `https://api.themoviedb.org/3/person/PERSON_ID?api_key=${process.env.movieDbApiKey}&language=en-US`,
      peopleCredits: `https://api.themoviedb.org/3/person/PERSON_ID/combined_credits?api_key=${process.env.movieDbApiKey}&language=en-US`,
    }
  },

  content: {
    menu: null,
    languages: [],
    countries: [],
    movieGenres: [],

    // volatile content
    movieTopRated: {}, // first 20 results
    movieUpcoming: [], // first 20 results
    tvTopRated: [], // first 20 results
    appLoader: [] // first 20 results
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
  SET_LANGUAGES(state, languages) {
    state.content.languages = languages;
  },
  SET_COUNTRIES(state, countries) {
    state.content.countries = countries;
  },
  SET_MOVIE_GENRES(state, data) {
    state.content.movieGenres = data;
  },

  // apis
  SET_MOVIE_UPCOMING(state, data) {
    state.content.movieUpcoming = data;
  },
  SET_MOVIE_TOP_RATED(state, data) {
    state.content.movieTopRated = data;
  },
  SET_TV_TOP_RATED(state, data) {
    state.content.tvTopRated = data;
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
      await dispatch('getApiLanguages');
      await dispatch('getApiCountries');
      await dispatch('getApiMovieGenres');
    } catch (error) {
      console.error({ error });
    }

    await dispatch('getAppLoaderContent');
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

  async getApiLanguages({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.languages,
      responseType: 'json'
    });

    commit('SET_LANGUAGES', data);
  },

  async getApiCountries({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.countries,
      responseType: 'json'
    });

    commit('SET_COUNTRIES', data);
  },


  async getApiMovieGenres({ state, commit }) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.moviesGenres,
      responseType: 'json'
    });

    commit('SET_MOVIE_GENRES', data.genres);
  },


  async getApiMultiSearch({ state, commit }, keyword) {
    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.search.replace('KEYWORD', keyword),
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


  /**
   * Get the upcoming movies (movies only)
   * @param state
   * @param commit
   * @returns {Promise<void>}
   */
  async getApiUpcoming({ state, commit }) {
    if (state.content.movieUpcoming.length > 0) {
      return Promise.resolve();
    }

    let { data } = await this.$axios({
      method: 'get',
      url: state.api.url.movieUpcoming,
      responseType: 'json'
    });

    commit('SET_MOVIE_UPCOMING', data.results);
  },

  /**
   * Get the movie|tv top rated list
   * @param state
   * @param commit
   * @param mediaType
   * @returns {Promise<void>}
   */
  async getApiTopRated({ state, commit }, mediaType) {
    const url = mediaType === shared.mediaType.movie ? state.api.url.movieTopRated : state.api.url.tvTopRated;

    if (mediaType === shared.mediaType.movie && state.content.movieTopRated.length > 0) {
      return Promise.resolve();
    }

    if (mediaType === shared.mediaType.tv && state.content.tvTopRated.length > 0) {
      return Promise.resolve();
    }

    let { data } = await this.$axios({
      method: 'get',
      url: url,
      responseType: 'json'
    });

    commit(mediaType === shared.mediaType.movie ? 'SET_MOVIE_TOP_RATED' : 'SET_TV_TOP_RATED', data.results);

    return data;
  },

  /**
   * Load the top rated data for movies and tv shows, to be used for fast app loader
   * @param state
   * @param commit
   * @param mediaType
   * @returns {Promise<void>}
   */
  async getAppLoaderContent({ state, commit }, mediaType) {
    const moviesTopRated = await this.$axios({
      method: 'get',
      url: state.api.url.movieTopRated,
      responseType: 'json'
    });
    commit('SET_MOVIE_TOP_RATED', moviesTopRated.data.results);

    const tvTopRated = await this.$axios({
      method: 'get',
      url: state.api.url.tvTopRated,
      responseType: 'json'
    });
    commit('SET_TV_TOP_RATED', tvTopRated.data.results);
  },
};
