import { addParameters, configure } from '@storybook/vue';
import { themes } from '@storybook/theming';
import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import { withA11y } from '@storybook/addon-a11y';

// Global parameters
// ------------------------

// Dark theme
addParameters({
  options: {
    name: 'Nuxt Movies',
    theme: themes.dark,
  },
});

// Viewport addon
addParameters({ viewport: options });

// a11y
addDecorator(withA11y);
addParameters({
  a11y: {
    // ... axe options
    element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
});


// install Vue plugins.
Vue.use(Vuex);

const store = {
  key: 'e70a2c7f7cd9ea29930db7e0be5399e2',
  configuration: {
    images: {
      base_url: 'http://image.tmdb.org/t/p/',
      secure_base_url: 'https://image.tmdb.org/t/p/',
      backdrop_sizes: [
        'w300',
        'w780',
        'w1280',
        'original'
      ],
      logo_sizes: [
        'w45',
        'w92',
        'w154',
        'w185',
        'w300',
        'w500',
        'original'
      ],
      poster_sizes: [
        'w92',
        'w154',
        'w185',
        'w342',
        'w500',
        'w780',
        'original'
      ],
      profile_sizes: [
        'w45',
        'w185',
        'h632',
        'original'
      ],
      still_sizes: [
        'w92',
        'w185',
        'w300',
        'original'
      ]
    },
    change_keys: [
      'adult',
      'air_date',
      'also_known_as',
      'alternative_titles',
      'biography',
      'birthday',
      'budget',
      'cast',
      'certifications',
      'character_names',
      'created_by',
      'crew',
      'deathday',
      'episode',
      'episode_number',
      'episode_run_time',
      'freebase_id',
      'freebase_mid',
      'general',
      'genres',
      'guest_stars',
      'homepage',
      'images',
      'imdb_id',
      'languages',
      'name',
      'network',
      'origin_country',
      'original_name',
      'original_title',
      'overview',
      'parts',
      'place_of_birth',
      'plot_keywords',
      'production_code',
      'production_companies',
      'production_countries',
      'releases',
      'revenue',
      'runtime',
      'season',
      'season_number',
      'season_regular',
      'spoken_languages',
      'status',
      'tagline',
      'title',
      'translations',
      'tvdb_id',
      'tvrage_id',
      'type',
      'video',
      'videos'
    ]
  },
  url: {
    configuration: 'https://api.themoviedb.org/3/configuration?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
    images: 'https://image.tmdb.org/t/p/',
    youtubeTrailer: 'https://www.youtube.com/watch?v=',
    youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
    youtubePosterMaxRes: 'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',
    moviesGenres: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US',
    movieDetails: 'https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&append_to_response=videos',
    latestMovie: 'https://api.themoviedb.org/3/movie/latest?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US',
    topRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&page=1',
    nowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&page=1',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&page=1',
    popular: 'https://api.themoviedb.org/3/movie/popular?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&page=1'
  }
}

// // Register custom components.
// Vue.component('movie-card', MovieCard);

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);
