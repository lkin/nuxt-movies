import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import MovieCard from '../components/MovieCard.vue';
import { mutations, actions } from '../store';


const movieDbApiKey = process.env.movieDbApiKey || require('../.themoviedb.js').key;

const state = {
  api: {
    key: movieDbApiKey,
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
      configuration: `https://api.themoviedb.org/3/configuration?api_key=${movieDbApiKey}`,
      images: 'https://image.tmdb.org/t/p/',
      youtubeTrailer: 'https://www.youtube.com/watch?v=',
      youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
      youtubePosterMaxRes: 'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',
      moviesGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${movieDbApiKey}&language=en-US`,
      movieDetails: `https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=${movieDbApiKey}&append_to_response=videos`,
      latestMovie: `https://api.themoviedb.org/3/movie/latest?api_key=${movieDbApiKey}&language=en-US`,
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${movieDbApiKey}&language=en-US&page=1`,
      nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${movieDbApiKey}&language=en-US&page=1`,
      upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${movieDbApiKey}&language=en-US&page=1`,
      popular: `https://api.themoviedb.org/3/movie/popular?api_key=${movieDbApiKey}&language=en-US&page=1`,
    }
  },
  content: {
    menu: null,
    movieGenres: [],
    latestMovie: undefined,
    topRated: {}
  }
};

const movie = {
  vote_count: 1949,
  id: 490132,
  video: false,
  vote_average: 8.3,
  title: 'Green Book',
  popularity: 210.513,
  poster_path: '/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg',
  original_language: 'en',
  original_title: 'Green Book',
  genre_ids: [
    18,
    35,
    10402
  ],
  backdrop_path: '/78PjwaykLY2QqhMfWRDvmfbC6EV.jpg',
  adult: false,
  overview: 'Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.',
  release_date: '2018-11-16'
};

storiesOf('MovieCard', module)
  .add('story as a component', () => ({
    components: { MovieCard },
    template: '<movie-card :movie="movie"></movie-card>',
    data() {
      return {
        movie: movie
      };
    },
    store: new Vuex.Store({
      state: state,
      mutations,
      actions
    }),
  }));
