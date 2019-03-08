import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import MediaCard from '../components/MediaCard';
import MediaScrollableList from '../components/MediaScrollableList';
import { mutations, actions } from '../store';

// import app styles
import '../assets/sass/app.scss';

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
  vote_count: 2329,
  id: 324857,
  video: false,
  vote_average: 8.5,
  title: 'Spider-Man: Into the Spider-Verse',
  popularity: 163.009,
  poster_path: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
  original_language: 'en',
  original_title: 'Spider-Man: Into the Spider-Verse',
  genre_ids: [
    28,
    12,
    16,
    878,
    35
  ],
  backdrop_path: '/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg',
  adult: false,
  overview: 'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
  release_date: '2018-12-07'
};
const movies = [
  {
    vote_count: 2006,
    id: 19404,
    video: false,
    vote_average: 9.1,
    title: 'Dilwale Dulhania Le Jayenge',
    popularity: 16.116,
    poster_path: '/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg',
    original_language: 'hi',
    original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
    genre_ids: [
      35,
      18,
      10749
    ],
    backdrop_path: '/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg',
    adult: false,
    overview: 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
    release_date: '1995-10-20'
  },
  {
    vote_count: 12414,
    id: 278,
    video: false,
    vote_average: 8.7,
    title: 'The Shawshank Redemption',
    popularity: 27.017,
    poster_path: '/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    genre_ids: [
      18,
      80
    ],
    backdrop_path: '/j9XKiZrVeViAixVRzCta7h1VU9W.jpg',
    adult: false,
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    release_date: '1994-09-23'
  },
  {
    vote_count: 9513,
    id: 238,
    video: false,
    vote_average: 8.6,
    title: 'The Godfather',
    popularity: 27.416,
    poster_path: '/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    original_language: 'en',
    original_title: 'The Godfather',
    genre_ids: [
      18,
      80
    ],
    backdrop_path: '/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg',
    adult: false,
    overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    release_date: '1972-03-14'
  },
  {
    vote_count: 3746,
    id: 372058,
    video: false,
    vote_average: 8.6,
    title: 'Your Name.',
    popularity: 21.596,
    poster_path: '/xq1Ugd62d23K2knRUx6xxuALTZB.jpg',
    original_language: 'ja',
    original_title: '君の名は。',
    genre_ids: [
      10749,
      16,
      18
    ],
    backdrop_path: '/7OMAfDJikBxItZBIug0NJig5DHD.jpg',
    adult: false,
    overview: 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
    release_date: '2016-08-26'
  },
  {
    vote_count: 7513,
    id: 424,
    video: false,
    vote_average: 8.5,
    title: 'Schindler\'s List',
    popularity: 20.207,
    poster_path: '/yPisjyLweCl1tbgwgtzBCNCBle.jpg',
    original_language: 'en',
    original_title: 'Schindler\'s List',
    genre_ids: [
      18,
      36,
      10752
    ],
    backdrop_path: '/cTNYRUTXkBgPH3wP3kmPUB5U6dA.jpg',
    adult: false,
    overview: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
    release_date: '1993-12-15'
  },
  {
    vote_count: 2329,
    id: 324857,
    video: false,
    vote_average: 8.5,
    title: 'Spider-Man: Into the Spider-Verse',
    popularity: 163.009,
    poster_path: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    original_language: 'en',
    original_title: 'Spider-Man: Into the Spider-Verse',
    genre_ids: [
      28,
      12,
      16,
      878,
      35
    ],
    backdrop_path: '/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg',
    adult: false,
    overview: 'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
    release_date: '2018-12-07'
  },
  {
    vote_count: 5545,
    id: 240,
    video: false,
    vote_average: 8.5,
    title: 'The Godfather: Part II',
    popularity: 19.031,
    poster_path: '/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg',
    original_language: 'en',
    original_title: 'The Godfather: Part II',
    genre_ids: [
      18,
      80
    ],
    backdrop_path: '/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg',
    adult: false,
    overview: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
    release_date: '1974-12-20'
  },
  {
    vote_count: 6973,
    id: 129,
    video: false,
    vote_average: 8.5,
    title: 'Spirited Away',
    popularity: 25.796,
    poster_path: '/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg',
    original_language: 'ja',
    original_title: '千と千尋の神隠し',
    genre_ids: [
      16,
      10751,
      14
    ],
    backdrop_path: '/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg',
    adult: false,
    overview: 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
    release_date: '2001-07-20'
  },
  {
    vote_count: 7724,
    id: 497,
    video: false,
    vote_average: 8.4,
    title: 'The Green Mile',
    popularity: 19.294,
    poster_path: '/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg',
    original_language: 'en',
    original_title: 'The Green Mile',
    genre_ids: [
      14,
      18,
      80
    ],
    backdrop_path: '/Rlt20sEbOQKPVjia7lUilFm49W.jpg',
    adult: false,
    overview: 'A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people\'s ailments. When the cell block\'s head guard, Paul Edgecomb, recognizes Coffey\'s miraculous gift, he tries desperately to help stave off the condemned man\'s execution.',
    release_date: '1999-12-10'
  },
  {
    vote_count: 6839,
    id: 637,
    video: false,
    vote_average: 8.4,
    title: 'Life Is Beautiful',
    popularity: 18.173,
    poster_path: '/f7DImXDebOs148U4uPjI61iDvaK.jpg',
    original_language: 'it',
    original_title: 'La vita è bella',
    genre_ids: [
      35,
      18
    ],
    backdrop_path: '/bORe0eI72D874TMawOOFvqWS6Xe.jpg',
    adult: false,
    overview: 'A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.',
    release_date: '1997-12-20'
  },
  {
    vote_count: 14367,
    id: 680,
    video: false,
    vote_average: 8.4,
    title: 'Pulp Fiction',
    popularity: 24.905,
    poster_path: '/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
    original_language: 'en',
    original_title: 'Pulp Fiction',
    genre_ids: [
      53,
      80
    ],
    backdrop_path: '/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg',
    adult: false,
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
    release_date: '1994-09-10'
  },
  {
    vote_count: 4592,
    id: 539,
    video: false,
    vote_average: 8.4,
    title: 'Psycho',
    popularity: 20.618,
    poster_path: '/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
    original_language: 'en',
    original_title: 'Psycho',
    genre_ids: [
      18,
      27,
      53,
      9648
    ],
    backdrop_path: '/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg',
    adult: false,
    overview: 'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.',
    release_date: '1960-06-16'
  },
  {
    vote_count: 18061,
    id: 155,
    video: false,
    vote_average: 8.4,
    title: 'The Dark Knight',
    popularity: 28.362,
    poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
    original_language: 'en',
    original_title: 'The Dark Knight',
    genre_ids: [
      18,
      28,
      80,
      53
    ],
    backdrop_path: '/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
    adult: false,
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    release_date: '2008-07-16'
  },
  {
    vote_count: 263,
    id: 452522,
    video: false,
    vote_average: 8.4,
    title: 'Twin Peaks',
    popularity: 9.942,
    poster_path: '/zQsEi6096L7PvowV39dtdqdW16f.jpg',
    original_language: 'en',
    original_title: 'Twin Peaks',
    genre_ids: [
      18,
      9648
    ],
    backdrop_path: '/xqjGKLwLZeujg4fiBTOqhZkoL31.jpg',
    adult: false,
    overview: 'Undercurrents of passion, greed, jealousy and intrigue surface in a seemingly respectable town when a high school homecoming queen is found murdered.',
    release_date: '1989-12-31'
  },
  {
    vote_count: 15471,
    id: 550,
    video: false,
    vote_average: 8.4,
    title: 'Fight Club',
    popularity: 25.509,
    poster_path: '/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
    original_language: 'en',
    original_title: 'Fight Club',
    genre_ids: [
      18
    ],
    backdrop_path: '/52AfXWuXCHn3UjD17rBruA9f5qb.jpg',
    adult: false,
    overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    release_date: '1999-10-15'
  },
  {
    vote_count: 393,
    id: 40096,
    video: false,
    vote_average: 8.4,
    title: 'A Dog\'s Will',
    popularity: 8.286,
    poster_path: '/uHEmM49YphluJnGep8Ef1qwD2QX.jpg',
    original_language: 'pt',
    original_title: 'O Auto da Compadecida',
    genre_ids: [
      12,
      35
    ],
    backdrop_path: '/alQqTpmEkxSLgajfEYTsTH6nAKB.jpg',
    adult: false,
    overview: 'The lively João Grilo and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small Northeast Brazil town. But when they die, they have to be judged by Christ, the Devil and the Virgin Mary, before they are admitted to paradise.',
    release_date: '2000-09-15'
  },
  {
    vote_count: 13917,
    id: 13,
    video: false,
    vote_average: 8.4,
    title: 'Forrest Gump',
    popularity: 24.792,
    poster_path: '/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg',
    original_language: 'en',
    original_title: 'Forrest Gump',
    genre_ids: [
      35,
      18,
      10749
    ],
    backdrop_path: '/wMgbnUVS9wbRGAdki8fqxKU1O0N.jpg',
    adult: false,
    overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.',
    release_date: '1994-07-06'
  },
  {
    vote_count: 12504,
    id: 122,
    video: false,
    vote_average: 8.4,
    title: 'The Lord of the Rings: The Return of the King',
    popularity: 29.455,
    poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    original_language: 'en',
    original_title: 'The Lord of the Rings: The Return of the King',
    genre_ids: [
      12,
      14,
      28
    ],
    backdrop_path: '/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg',
    adult: false,
    overview: 'Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron\'s forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord\'s realm.',
    release_date: '2003-12-01'
  },
  {
    vote_count: 3518,
    id: 389,
    video: false,
    vote_average: 8.4,
    title: '12 Angry Men',
    popularity: 16.983,
    poster_path: '/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg',
    original_language: 'en',
    original_title: '12 Angry Men',
    genre_ids: [
      18
    ],
    backdrop_path: '/lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg',
    adult: false,
    overview: 'The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors\' prejudices and preconceptions about the trial, the accused, and each other.',
    release_date: '1957-03-25'
  },
  {
    vote_count: 1892,
    id: 12477,
    video: false,
    vote_average: 8.4,
    title: 'Grave of the Fireflies',
    popularity: 0.6,
    poster_path: '/4u1vptE8aXuzb5zauZTmikyectV.jpg',
    original_language: 'ja',
    original_title: '火垂るの墓',
    genre_ids: [
      16,
      18,
      10752
    ],
    backdrop_path: '/fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg',
    adult: false,
    overview: 'In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.',
    release_date: '1988-04-16'
  }
];

storiesOf('MediaCard', module)
  .add('Backdrop format', () => ({
    components: { MediaCard },
    template: '<media-card :movie="movie"></media-card>',
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
  }))
  .add('Poster format', () => ({
    components: { MediaCard },
    template: '<media-card :movie="movie" card-type="poster"></media-card>',
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

storiesOf('MediaScrollableList', module)
  .add('list of Backdrop', () => ({
    components: { MediaScrollableList },
    template: '<media-scrollable-list title="Test long title" :movies="movies"></media-scrollable-list>',
    data() {
      return {
        movies: movies
      };
    },
    store: new Vuex.Store({
      state: state,
      mutations,
      actions
    }),
  }));
