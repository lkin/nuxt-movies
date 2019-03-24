import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import AppLoader from '../components/AppLoader';
import { mutations, actions } from '../store';


const movieDbApiKey = process.env.movieDbApiKey || require('../.themoviedb.js').key;

const state = {
  api: {
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
      languages: 'https://api.themoviedb.org/3/configuration/languages?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
      countries: 'https://api.themoviedb.org/3/configuration/countries?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
      images: 'https://image.tmdb.org/t/p/',
      youtubeEmbed: 'https://www.youtube.com/embed/',
      youtubeTrailer: 'https://www.youtube.com/watch?v=',
      youtubePoster: 'https://img.youtube.com/vi/YOUTUBEKEY/hqdefault.jpg',
      youtubePosterMaxRes: 'https://img.youtube.com/vi/YOUTUBEKEY/maxresdefault.jpg',
      search: 'https://api.themoviedb.org/3/search/multi?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&query=KEYWORD&page=1&include_adult=false',
      movieCertifications: 'https://api.themoviedb.org/3/certification/movie/list?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
      moviesGenres: 'https://api.themoviedb.org/3/genre/movie/list?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US',
      movieDetails: 'https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&include_image_language=en&append_to_response=videos,images',
      movieCredits: 'https://api.themoviedb.org/3/movie/MOVIE_ID/credits?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
      trending: 'https://api.themoviedb.org/3/trending/TYPE/TIME?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
      latestMovie: 'https://api.themoviedb.org/3/movie/latest?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US',
      topRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&page=1',
      nowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&page=1',
      upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&page=1',
      popular: 'https://api.themoviedb.org/3/movie/popular?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US&page=1',
      similar: 'https://api.themoviedb.org/3/movie/MOVIE_ID/similar?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
      movieLists: 'https://api.themoviedb.org/3/movie/MOVIE_ID/lists?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
      tvCertifications: 'https://api.themoviedb.org/3/certification/tv/list?api_key=e70a2c7f7cd9ea29930db7e0be5399e2',
      tvGenres: 'https://api.themoviedb.org/3/genre/tv/list?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US',
      tvDetails: 'https://api.themoviedb.org/3/tv/TV_ID?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&append_to_response=videos',
      latestTv: 'https://api.themoviedb.org/3/tv/latest?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US',
      peopleDetails: 'https://api.themoviedb.org/3/person/PERSON_ID?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US',
      peopleCredits: 'https://api.themoviedb.org/3/person/PERSON_ID/combined_credits?api_key=e70a2c7f7cd9ea29930db7e0be5399e2&language=en-US'
    }
  },
  content: {
    menu: [
      {
        title: 'Home',
        visible: true,
        linkType: 'internal',
        linkURL: '/'
      },
      {
        title: 'Movies',
        visible: true,
        linkType: 'internal',
        linkURL: '/movies'
      },
      {
        title: 'TV Shows',
        visible: true,
        linkType: 'internal',
        linkURL: '/tv-shows'
      }
    ],
    languages: [
      {
        iso_639_1: 'xx',
        english_name: 'No Language',
        name: 'No Language'
      },
      {
        iso_639_1: 'aa',
        english_name: 'Afar',
        name: ''
      },
      {
        iso_639_1: 'af',
        english_name: 'Afrikaans',
        name: 'Afrikaans'
      },
      {
        iso_639_1: 'ak',
        english_name: 'Akan',
        name: ''
      },
      {
        iso_639_1: 'an',
        english_name: 'Aragonese',
        name: ''
      },
      {
        iso_639_1: 'as',
        english_name: 'Assamese',
        name: ''
      },
      {
        iso_639_1: 'av',
        english_name: 'Avaric',
        name: ''
      },
      {
        iso_639_1: 'ae',
        english_name: 'Avestan',
        name: ''
      },
      {
        iso_639_1: 'ay',
        english_name: 'Aymara',
        name: ''
      },
      {
        iso_639_1: 'az',
        english_name: 'Azerbaijani',
        name: 'Azərbaycan'
      },
      {
        iso_639_1: 'ba',
        english_name: 'Bashkir',
        name: ''
      },
      {
        iso_639_1: 'bm',
        english_name: 'Bambara',
        name: 'Bamanankan'
      },
      {
        iso_639_1: 'bi',
        english_name: 'Bislama',
        name: ''
      },
      {
        iso_639_1: 'bo',
        english_name: 'Tibetan',
        name: ''
      },
      {
        iso_639_1: 'br',
        english_name: 'Breton',
        name: ''
      },
      {
        iso_639_1: 'ca',
        english_name: 'Catalan',
        name: 'Català'
      },
      {
        iso_639_1: 'cs',
        english_name: 'Czech',
        name: 'Český'
      },
      {
        iso_639_1: 'ce',
        english_name: 'Chechen',
        name: ''
      },
      {
        iso_639_1: 'cu',
        english_name: 'Slavic',
        name: ''
      },
      {
        iso_639_1: 'cv',
        english_name: 'Chuvash',
        name: ''
      },
      {
        iso_639_1: 'kw',
        english_name: 'Cornish',
        name: ''
      },
      {
        iso_639_1: 'co',
        english_name: 'Corsican',
        name: ''
      },
      {
        iso_639_1: 'cr',
        english_name: 'Cree',
        name: ''
      },
      {
        iso_639_1: 'cy',
        english_name: 'Welsh',
        name: 'Cymraeg'
      },
      {
        iso_639_1: 'da',
        english_name: 'Danish',
        name: 'Dansk'
      },
      {
        iso_639_1: 'de',
        english_name: 'German',
        name: 'Deutsch'
      },
      {
        iso_639_1: 'dv',
        english_name: 'Divehi',
        name: ''
      },
      {
        iso_639_1: 'dz',
        english_name: 'Dzongkha',
        name: ''
      },
      {
        iso_639_1: 'eo',
        english_name: 'Esperanto',
        name: 'Esperanto'
      },
      {
        iso_639_1: 'et',
        english_name: 'Estonian',
        name: 'Eesti'
      },
      {
        iso_639_1: 'eu',
        english_name: 'Basque',
        name: 'euskera'
      },
      {
        iso_639_1: 'fo',
        english_name: 'Faroese',
        name: ''
      },
      {
        iso_639_1: 'fj',
        english_name: 'Fijian',
        name: ''
      },
      {
        iso_639_1: 'fi',
        english_name: 'Finnish',
        name: 'suomi'
      },
      {
        iso_639_1: 'fr',
        english_name: 'French',
        name: 'Français'
      },
      {
        iso_639_1: 'fy',
        english_name: 'Frisian',
        name: ''
      },
      {
        iso_639_1: 'ff',
        english_name: 'Fulah',
        name: 'Fulfulde'
      },
      {
        iso_639_1: 'gd',
        english_name: 'Gaelic',
        name: ''
      },
      {
        iso_639_1: 'ga',
        english_name: 'Irish',
        name: 'Gaeilge'
      },
      {
        iso_639_1: 'gl',
        english_name: 'Galician',
        name: 'Galego'
      },
      {
        iso_639_1: 'gv',
        english_name: 'Manx',
        name: ''
      },
      {
        iso_639_1: 'gn',
        english_name: 'Guarani',
        name: ''
      },
      {
        iso_639_1: 'gu',
        english_name: 'Gujarati',
        name: ''
      },
      {
        iso_639_1: 'ht',
        english_name: 'Haitian; Haitian Creole',
        name: ''
      },
      {
        iso_639_1: 'ha',
        english_name: 'Hausa',
        name: 'Hausa'
      },
      {
        iso_639_1: 'sh',
        english_name: 'Serbo-Croatian',
        name: ''
      },
      {
        iso_639_1: 'hz',
        english_name: 'Herero',
        name: ''
      },
      {
        iso_639_1: 'ho',
        english_name: 'Hiri Motu',
        name: ''
      },
      {
        iso_639_1: 'hr',
        english_name: 'Croatian',
        name: 'Hrvatski'
      },
      {
        iso_639_1: 'hu',
        english_name: 'Hungarian',
        name: 'Magyar'
      },
      {
        iso_639_1: 'ig',
        english_name: 'Igbo',
        name: ''
      },
      {
        iso_639_1: 'io',
        english_name: 'Ido',
        name: ''
      },
      {
        iso_639_1: 'ii',
        english_name: 'Yi',
        name: ''
      },
      {
        iso_639_1: 'iu',
        english_name: 'Inuktitut',
        name: ''
      },
      {
        iso_639_1: 'ie',
        english_name: 'Interlingue',
        name: ''
      },
      {
        iso_639_1: 'ia',
        english_name: 'Interlingua',
        name: ''
      },
      {
        iso_639_1: 'id',
        english_name: 'Indonesian',
        name: 'Bahasa indonesia'
      },
      {
        iso_639_1: 'ik',
        english_name: 'Inupiaq',
        name: ''
      },
      {
        iso_639_1: 'is',
        english_name: 'Icelandic',
        name: 'Íslenska'
      },
      {
        iso_639_1: 'it',
        english_name: 'Italian',
        name: 'Italiano'
      },
      {
        iso_639_1: 'jv',
        english_name: 'Javanese',
        name: ''
      },
      {
        iso_639_1: 'ja',
        english_name: 'Japanese',
        name: '日本語'
      },
      {
        iso_639_1: 'kl',
        english_name: 'Kalaallisut',
        name: ''
      },
      {
        iso_639_1: 'kn',
        english_name: 'Kannada',
        name: '?????'
      },
      {
        iso_639_1: 'ks',
        english_name: 'Kashmiri',
        name: ''
      },
      {
        iso_639_1: 'kr',
        english_name: 'Kanuri',
        name: ''
      },
      {
        iso_639_1: 'kk',
        english_name: 'Kazakh',
        name: 'қазақ'
      },
      {
        iso_639_1: 'km',
        english_name: 'Khmer',
        name: ''
      },
      {
        iso_639_1: 'ki',
        english_name: 'Kikuyu',
        name: ''
      },
      {
        iso_639_1: 'rw',
        english_name: 'Kinyarwanda',
        name: 'Kinyarwanda'
      },
      {
        iso_639_1: 'ky',
        english_name: 'Kirghiz',
        name: '??????'
      },
      {
        iso_639_1: 'kv',
        english_name: 'Komi',
        name: ''
      },
      {
        iso_639_1: 'kg',
        english_name: 'Kongo',
        name: ''
      },
      {
        iso_639_1: 'ko',
        english_name: 'Korean',
        name: '한국어/조선말'
      },
      {
        iso_639_1: 'kj',
        english_name: 'Kuanyama',
        name: ''
      },
      {
        iso_639_1: 'ku',
        english_name: 'Kurdish',
        name: ''
      },
      {
        iso_639_1: 'lo',
        english_name: 'Lao',
        name: ''
      },
      {
        iso_639_1: 'la',
        english_name: 'Latin',
        name: 'Latin'
      },
      {
        iso_639_1: 'lv',
        english_name: 'Latvian',
        name: 'Latviešu'
      },
      {
        iso_639_1: 'li',
        english_name: 'Limburgish',
        name: ''
      },
      {
        iso_639_1: 'ln',
        english_name: 'Lingala',
        name: ''
      },
      {
        iso_639_1: 'lt',
        english_name: 'Lithuanian',
        name: 'Lietuvių'
      },
      {
        iso_639_1: 'lb',
        english_name: 'Letzeburgesch',
        name: ''
      },
      {
        iso_639_1: 'lu',
        english_name: 'Luba-Katanga',
        name: ''
      },
      {
        iso_639_1: 'lg',
        english_name: 'Ganda',
        name: ''
      },
      {
        iso_639_1: 'mh',
        english_name: 'Marshall',
        name: ''
      },
      {
        iso_639_1: 'ml',
        english_name: 'Malayalam',
        name: ''
      },
      {
        iso_639_1: 'mr',
        english_name: 'Marathi',
        name: ''
      },
      {
        iso_639_1: 'mg',
        english_name: 'Malagasy',
        name: ''
      },
      {
        iso_639_1: 'mt',
        english_name: 'Maltese',
        name: 'Malti'
      },
      {
        iso_639_1: 'mo',
        english_name: 'Moldavian',
        name: ''
      },
      {
        iso_639_1: 'mn',
        english_name: 'Mongolian',
        name: ''
      },
      {
        iso_639_1: 'mi',
        english_name: 'Maori',
        name: ''
      },
      {
        iso_639_1: 'ms',
        english_name: 'Malay',
        name: 'Bahasa melayu'
      },
      {
        iso_639_1: 'my',
        english_name: 'Burmese',
        name: ''
      },
      {
        iso_639_1: 'na',
        english_name: 'Nauru',
        name: ''
      },
      {
        iso_639_1: 'nv',
        english_name: 'Navajo',
        name: ''
      },
      {
        iso_639_1: 'nr',
        english_name: 'Ndebele',
        name: ''
      },
      {
        iso_639_1: 'nd',
        english_name: 'Ndebele',
        name: ''
      },
      {
        iso_639_1: 'ng',
        english_name: 'Ndonga',
        name: ''
      },
      {
        iso_639_1: 'ne',
        english_name: 'Nepali',
        name: ''
      },
      {
        iso_639_1: 'nl',
        english_name: 'Dutch',
        name: 'Nederlands'
      },
      {
        iso_639_1: 'nn',
        english_name: 'Norwegian Nynorsk',
        name: ''
      },
      {
        iso_639_1: 'nb',
        english_name: 'Norwegian Bokmål',
        name: 'Bokmål'
      },
      {
        iso_639_1: 'no',
        english_name: 'Norwegian',
        name: 'Norsk'
      },
      {
        iso_639_1: 'ny',
        english_name: 'Chichewa; Nyanja',
        name: ''
      },
      {
        iso_639_1: 'oc',
        english_name: 'Occitan',
        name: ''
      },
      {
        iso_639_1: 'oj',
        english_name: 'Ojibwa',
        name: ''
      },
      {
        iso_639_1: 'or',
        english_name: 'Oriya',
        name: ''
      },
      {
        iso_639_1: 'om',
        english_name: 'Oromo',
        name: ''
      },
      {
        iso_639_1: 'os',
        english_name: 'Ossetian; Ossetic',
        name: ''
      },
      {
        iso_639_1: 'pi',
        english_name: 'Pali',
        name: ''
      },
      {
        iso_639_1: 'pl',
        english_name: 'Polish',
        name: 'Polski'
      },
      {
        iso_639_1: 'pt',
        english_name: 'Portuguese',
        name: 'Português'
      },
      {
        iso_639_1: 'qu',
        english_name: 'Quechua',
        name: ''
      },
      {
        iso_639_1: 'rm',
        english_name: 'Raeto-Romance',
        name: ''
      },
      {
        iso_639_1: 'ro',
        english_name: 'Romanian',
        name: 'Română'
      },
      {
        iso_639_1: 'rn',
        english_name: 'Rundi',
        name: 'Kirundi'
      },
      {
        iso_639_1: 'ru',
        english_name: 'Russian',
        name: 'Pусский'
      },
      {
        iso_639_1: 'sg',
        english_name: 'Sango',
        name: ''
      },
      {
        iso_639_1: 'sa',
        english_name: 'Sanskrit',
        name: ''
      },
      {
        iso_639_1: 'si',
        english_name: 'Sinhalese',
        name: 'සිංහල'
      },
      {
        iso_639_1: 'sk',
        english_name: 'Slovak',
        name: 'Slovenčina'
      },
      {
        iso_639_1: 'sl',
        english_name: 'Slovenian',
        name: 'Slovenščina'
      },
      {
        iso_639_1: 'se',
        english_name: 'Northern Sami',
        name: ''
      },
      {
        iso_639_1: 'sm',
        english_name: 'Samoan',
        name: ''
      },
      {
        iso_639_1: 'sn',
        english_name: 'Shona',
        name: ''
      },
      {
        iso_639_1: 'sd',
        english_name: 'Sindhi',
        name: ''
      },
      {
        iso_639_1: 'so',
        english_name: 'Somali',
        name: 'Somali'
      },
      {
        iso_639_1: 'st',
        english_name: 'Sotho',
        name: ''
      },
      {
        iso_639_1: 'es',
        english_name: 'Spanish',
        name: 'Español'
      },
      {
        iso_639_1: 'sq',
        english_name: 'Albanian',
        name: 'shqip'
      },
      {
        iso_639_1: 'sc',
        english_name: 'Sardinian',
        name: ''
      },
      {
        iso_639_1: 'sr',
        english_name: 'Serbian',
        name: 'Srpski'
      },
      {
        iso_639_1: 'ss',
        english_name: 'Swati',
        name: ''
      },
      {
        iso_639_1: 'su',
        english_name: 'Sundanese',
        name: ''
      },
      {
        iso_639_1: 'sw',
        english_name: 'Swahili',
        name: 'Kiswahili'
      },
      {
        iso_639_1: 'sv',
        english_name: 'Swedish',
        name: 'svenska'
      },
      {
        iso_639_1: 'ty',
        english_name: 'Tahitian',
        name: ''
      },
      {
        iso_639_1: 'ta',
        english_name: 'Tamil',
        name: 'தமிழ்'
      },
      {
        iso_639_1: 'tt',
        english_name: 'Tatar',
        name: ''
      },
      {
        iso_639_1: 'te',
        english_name: 'Telugu',
        name: 'తెలుగు'
      },
      {
        iso_639_1: 'tg',
        english_name: 'Tajik',
        name: ''
      },
      {
        iso_639_1: 'tl',
        english_name: 'Tagalog',
        name: ''
      },
      {
        iso_639_1: 'th',
        english_name: 'Thai',
        name: 'ภาษาไทย'
      },
      {
        iso_639_1: 'ti',
        english_name: 'Tigrinya',
        name: ''
      },
      {
        iso_639_1: 'to',
        english_name: 'Tonga',
        name: ''
      },
      {
        iso_639_1: 'tn',
        english_name: 'Tswana',
        name: ''
      },
      {
        iso_639_1: 'ts',
        english_name: 'Tsonga',
        name: ''
      },
      {
        iso_639_1: 'tk',
        english_name: 'Turkmen',
        name: ''
      },
      {
        iso_639_1: 'tr',
        english_name: 'Turkish',
        name: 'Türkçe'
      },
      {
        iso_639_1: 'tw',
        english_name: 'Twi',
        name: ''
      },
      {
        iso_639_1: 'ug',
        english_name: 'Uighur',
        name: ''
      },
      {
        iso_639_1: 'uk',
        english_name: 'Ukrainian',
        name: 'Український'
      },
      {
        iso_639_1: 'ur',
        english_name: 'Urdu',
        name: 'اردو'
      },
      {
        iso_639_1: 'uz',
        english_name: 'Uzbek',
        name: 'ozbek'
      },
      {
        iso_639_1: 've',
        english_name: 'Venda',
        name: ''
      },
      {
        iso_639_1: 'vi',
        english_name: 'Vietnamese',
        name: 'Tiếng Việt'
      },
      {
        iso_639_1: 'vo',
        english_name: 'Volapük',
        name: ''
      },
      {
        iso_639_1: 'wa',
        english_name: 'Walloon',
        name: ''
      },
      {
        iso_639_1: 'wo',
        english_name: 'Wolof',
        name: 'Wolof'
      },
      {
        iso_639_1: 'xh',
        english_name: 'Xhosa',
        name: ''
      },
      {
        iso_639_1: 'yi',
        english_name: 'Yiddish',
        name: ''
      },
      {
        iso_639_1: 'za',
        english_name: 'Zhuang',
        name: ''
      },
      {
        iso_639_1: 'zu',
        english_name: 'Zulu',
        name: 'isiZulu'
      },
      {
        iso_639_1: 'ab',
        english_name: 'Abkhazian',
        name: ''
      },
      {
        iso_639_1: 'zh',
        english_name: 'Mandarin',
        name: '普通话'
      },
      {
        iso_639_1: 'ps',
        english_name: 'Pushto',
        name: 'پښتو'
      },
      {
        iso_639_1: 'am',
        english_name: 'Amharic',
        name: ''
      },
      {
        iso_639_1: 'ar',
        english_name: 'Arabic',
        name: 'العربية'
      },
      {
        iso_639_1: 'bg',
        english_name: 'Bulgarian',
        name: 'български език'
      },
      {
        iso_639_1: 'cn',
        english_name: 'Cantonese',
        name: '广州话 / 廣州話'
      },
      {
        iso_639_1: 'mk',
        english_name: 'Macedonian',
        name: ''
      },
      {
        iso_639_1: 'el',
        english_name: 'Greek',
        name: 'ελληνικά'
      },
      {
        iso_639_1: 'fa',
        english_name: 'Persian',
        name: 'فارسی'
      },
      {
        iso_639_1: 'he',
        english_name: 'Hebrew',
        name: 'עִבְרִית'
      },
      {
        iso_639_1: 'hi',
        english_name: 'Hindi',
        name: 'हिन्दी'
      },
      {
        iso_639_1: 'hy',
        english_name: 'Armenian',
        name: ''
      },
      {
        iso_639_1: 'en',
        english_name: 'English',
        name: 'English'
      },
      {
        iso_639_1: 'ee',
        english_name: 'Ewe',
        name: 'Èʋegbe'
      },
      {
        iso_639_1: 'ka',
        english_name: 'Georgian',
        name: 'ქართული'
      },
      {
        iso_639_1: 'pa',
        english_name: 'Punjabi',
        name: 'ਪੰਜਾਬੀ'
      },
      {
        iso_639_1: 'bn',
        english_name: 'Bengali',
        name: 'বাংলা'
      },
      {
        iso_639_1: 'bs',
        english_name: 'Bosnian',
        name: 'Bosanski'
      },
      {
        iso_639_1: 'ch',
        english_name: 'Chamorro',
        name: 'Finu\' Chamorro'
      },
      {
        iso_639_1: 'be',
        english_name: 'Belarusian',
        name: 'беларуская мова'
      },
      {
        iso_639_1: 'yo',
        english_name: 'Yoruba',
        name: 'Èdè Yorùbá'
      }
    ],
    countries: [
      {
        iso_3166_1: 'AD',
        english_name: 'Andorra'
      },
      {
        iso_3166_1: 'AE',
        english_name: 'United Arab Emirates'
      },
      {
        iso_3166_1: 'AF',
        english_name: 'Afghanistan'
      },
      {
        iso_3166_1: 'AG',
        english_name: 'Antigua and Barbuda'
      },
      {
        iso_3166_1: 'AI',
        english_name: 'Anguilla'
      },
      {
        iso_3166_1: 'AL',
        english_name: 'Albania'
      },
      {
        iso_3166_1: 'AM',
        english_name: 'Armenia'
      },
      {
        iso_3166_1: 'AN',
        english_name: 'Netherlands Antilles'
      },
      {
        iso_3166_1: 'AO',
        english_name: 'Angola'
      },
      {
        iso_3166_1: 'AQ',
        english_name: 'Antarctica'
      },
      {
        iso_3166_1: 'AR',
        english_name: 'Argentina'
      },
      {
        iso_3166_1: 'AS',
        english_name: 'American Samoa'
      },
      {
        iso_3166_1: 'AT',
        english_name: 'Austria'
      },
      {
        iso_3166_1: 'AU',
        english_name: 'Australia'
      },
      {
        iso_3166_1: 'AW',
        english_name: 'Aruba'
      },
      {
        iso_3166_1: 'AZ',
        english_name: 'Azerbaijan'
      },
      {
        iso_3166_1: 'BA',
        english_name: 'Bosnia and Herzegovina'
      },
      {
        iso_3166_1: 'BB',
        english_name: 'Barbados'
      },
      {
        iso_3166_1: 'BD',
        english_name: 'Bangladesh'
      },
      {
        iso_3166_1: 'BE',
        english_name: 'Belgium'
      },
      {
        iso_3166_1: 'BF',
        english_name: 'Burkina Faso'
      },
      {
        iso_3166_1: 'BG',
        english_name: 'Bulgaria'
      },
      {
        iso_3166_1: 'BH',
        english_name: 'Bahrain'
      },
      {
        iso_3166_1: 'BI',
        english_name: 'Burundi'
      },
      {
        iso_3166_1: 'BJ',
        english_name: 'Benin'
      },
      {
        iso_3166_1: 'BM',
        english_name: 'Bermuda'
      },
      {
        iso_3166_1: 'BN',
        english_name: 'Brunei Darussalam'
      },
      {
        iso_3166_1: 'BO',
        english_name: 'Bolivia'
      },
      {
        iso_3166_1: 'BR',
        english_name: 'Brazil'
      },
      {
        iso_3166_1: 'BS',
        english_name: 'Bahamas'
      },
      {
        iso_3166_1: 'BT',
        english_name: 'Bhutan'
      },
      {
        iso_3166_1: 'BV',
        english_name: 'Bouvet Island'
      },
      {
        iso_3166_1: 'BW',
        english_name: 'Botswana'
      },
      {
        iso_3166_1: 'BZ',
        english_name: 'Belize'
      },
      {
        iso_3166_1: 'BY',
        english_name: 'Belarus'
      },
      {
        iso_3166_1: 'CA',
        english_name: 'Canada'
      },
      {
        iso_3166_1: 'CC',
        english_name: 'Cocos  Islands'
      },
      {
        iso_3166_1: 'CD',
        english_name: 'Congo'
      },
      {
        iso_3166_1: 'CF',
        english_name: 'Central African Republic'
      },
      {
        iso_3166_1: 'CG',
        english_name: 'Congo'
      },
      {
        iso_3166_1: 'CH',
        english_name: 'Switzerland'
      },
      {
        iso_3166_1: 'CI',
        english_name: 'Cote D\'Ivoire'
      },
      {
        iso_3166_1: 'CK',
        english_name: 'Cook Islands'
      },
      {
        iso_3166_1: 'CL',
        english_name: 'Chile'
      },
      {
        iso_3166_1: 'CM',
        english_name: 'Cameroon'
      },
      {
        iso_3166_1: 'CN',
        english_name: 'China'
      },
      {
        iso_3166_1: 'CO',
        english_name: 'Colombia'
      },
      {
        iso_3166_1: 'CR',
        english_name: 'Costa Rica'
      },
      {
        iso_3166_1: 'CS',
        english_name: 'Serbia and Montenegro'
      },
      {
        iso_3166_1: 'CU',
        english_name: 'Cuba'
      },
      {
        iso_3166_1: 'CV',
        english_name: 'Cape Verde'
      },
      {
        iso_3166_1: 'CX',
        english_name: 'Christmas Island'
      },
      {
        iso_3166_1: 'CY',
        english_name: 'Cyprus'
      },
      {
        iso_3166_1: 'CZ',
        english_name: 'Czech Republic'
      },
      {
        iso_3166_1: 'DE',
        english_name: 'Germany'
      },
      {
        iso_3166_1: 'DJ',
        english_name: 'Djibouti'
      },
      {
        iso_3166_1: 'DK',
        english_name: 'Denmark'
      },
      {
        iso_3166_1: 'DM',
        english_name: 'Dominica'
      },
      {
        iso_3166_1: 'DO',
        english_name: 'Dominican Republic'
      },
      {
        iso_3166_1: 'DZ',
        english_name: 'Algeria'
      },
      {
        iso_3166_1: 'EC',
        english_name: 'Ecuador'
      },
      {
        iso_3166_1: 'EE',
        english_name: 'Estonia'
      },
      {
        iso_3166_1: 'EG',
        english_name: 'Egypt'
      },
      {
        iso_3166_1: 'EH',
        english_name: 'Western Sahara'
      },
      {
        iso_3166_1: 'ER',
        english_name: 'Eritrea'
      },
      {
        iso_3166_1: 'ES',
        english_name: 'Spain'
      },
      {
        iso_3166_1: 'ET',
        english_name: 'Ethiopia'
      },
      {
        iso_3166_1: 'FI',
        english_name: 'Finland'
      },
      {
        iso_3166_1: 'FJ',
        english_name: 'Fiji'
      },
      {
        iso_3166_1: 'FK',
        english_name: 'Falkland Islands'
      },
      {
        iso_3166_1: 'RS',
        english_name: 'Serbia'
      },
      {
        iso_3166_1: 'FM',
        english_name: 'Micronesia'
      },
      {
        iso_3166_1: 'FO',
        english_name: 'Faeroe Islands'
      },
      {
        iso_3166_1: 'FR',
        english_name: 'France'
      },
      {
        iso_3166_1: 'GA',
        english_name: 'Gabon'
      },
      {
        iso_3166_1: 'GB',
        english_name: 'United Kingdom'
      },
      {
        iso_3166_1: 'GD',
        english_name: 'Grenada'
      },
      {
        iso_3166_1: 'GE',
        english_name: 'Georgia'
      },
      {
        iso_3166_1: 'GF',
        english_name: 'French Guiana'
      },
      {
        iso_3166_1: 'GH',
        english_name: 'Ghana'
      },
      {
        iso_3166_1: 'GI',
        english_name: 'Gibraltar'
      },
      {
        iso_3166_1: 'GL',
        english_name: 'Greenland'
      },
      {
        iso_3166_1: 'GM',
        english_name: 'Gambia'
      },
      {
        iso_3166_1: 'GN',
        english_name: 'Guinea'
      },
      {
        iso_3166_1: 'GP',
        english_name: 'Guadaloupe'
      },
      {
        iso_3166_1: 'GQ',
        english_name: 'Equatorial Guinea'
      },
      {
        iso_3166_1: 'GR',
        english_name: 'Greece'
      },
      {
        iso_3166_1: 'GS',
        english_name: 'South Georgia and the South Sandwich Islands'
      },
      {
        iso_3166_1: 'GT',
        english_name: 'Guatemala'
      },
      {
        iso_3166_1: 'GU',
        english_name: 'Guam'
      },
      {
        iso_3166_1: 'GW',
        english_name: 'Guinea-Bissau'
      },
      {
        iso_3166_1: 'GY',
        english_name: 'Guyana'
      },
      {
        iso_3166_1: 'HK',
        english_name: 'Hong Kong'
      },
      {
        iso_3166_1: 'HM',
        english_name: 'Heard and McDonald Islands'
      },
      {
        iso_3166_1: 'HN',
        english_name: 'Honduras'
      },
      {
        iso_3166_1: 'HR',
        english_name: 'Croatia'
      },
      {
        iso_3166_1: 'HT',
        english_name: 'Haiti'
      },
      {
        iso_3166_1: 'HU',
        english_name: 'Hungary'
      },
      {
        iso_3166_1: 'ID',
        english_name: 'Indonesia'
      },
      {
        iso_3166_1: 'IE',
        english_name: 'Ireland'
      },
      {
        iso_3166_1: 'IL',
        english_name: 'Israel'
      },
      {
        iso_3166_1: 'IN',
        english_name: 'India'
      },
      {
        iso_3166_1: 'IO',
        english_name: 'British Indian Ocean Territory'
      },
      {
        iso_3166_1: 'IQ',
        english_name: 'Iraq'
      },
      {
        iso_3166_1: 'IR',
        english_name: 'Iran'
      },
      {
        iso_3166_1: 'IS',
        english_name: 'Iceland'
      },
      {
        iso_3166_1: 'IT',
        english_name: 'Italy'
      },
      {
        iso_3166_1: 'JM',
        english_name: 'Jamaica'
      },
      {
        iso_3166_1: 'JO',
        english_name: 'Jordan'
      },
      {
        iso_3166_1: 'JP',
        english_name: 'Japan'
      },
      {
        iso_3166_1: 'KE',
        english_name: 'Kenya'
      },
      {
        iso_3166_1: 'KG',
        english_name: 'Kyrgyz Republic'
      },
      {
        iso_3166_1: 'KH',
        english_name: 'Cambodia'
      },
      {
        iso_3166_1: 'KI',
        english_name: 'Kiribati'
      },
      {
        iso_3166_1: 'KM',
        english_name: 'Comoros'
      },
      {
        iso_3166_1: 'KN',
        english_name: 'St. Kitts and Nevis'
      },
      {
        iso_3166_1: 'KP',
        english_name: 'North Korea'
      },
      {
        iso_3166_1: 'KW',
        english_name: 'Kuwait'
      },
      {
        iso_3166_1: 'KY',
        english_name: 'Cayman Islands'
      },
      {
        iso_3166_1: 'KZ',
        english_name: 'Kazakhstan'
      },
      {
        iso_3166_1: 'LA',
        english_name: 'Lao People\'s Democratic Republic'
      },
      {
        iso_3166_1: 'LB',
        english_name: 'Lebanon'
      },
      {
        iso_3166_1: 'LC',
        english_name: 'St. Lucia'
      },
      {
        iso_3166_1: 'LI',
        english_name: 'Liechtenstein'
      },
      {
        iso_3166_1: 'LK',
        english_name: 'Sri Lanka'
      },
      {
        iso_3166_1: 'LR',
        english_name: 'Liberia'
      },
      {
        iso_3166_1: 'LS',
        english_name: 'Lesotho'
      },
      {
        iso_3166_1: 'LT',
        english_name: 'Lithuania'
      },
      {
        iso_3166_1: 'LU',
        english_name: 'Luxembourg'
      },
      {
        iso_3166_1: 'LV',
        english_name: 'Latvia'
      },
      {
        iso_3166_1: 'LY',
        english_name: 'Libyan Arab Jamahiriya'
      },
      {
        iso_3166_1: 'MA',
        english_name: 'Morocco'
      },
      {
        iso_3166_1: 'MC',
        english_name: 'Monaco'
      },
      {
        iso_3166_1: 'MD',
        english_name: 'Moldova'
      },
      {
        iso_3166_1: 'MG',
        english_name: 'Madagascar'
      },
      {
        iso_3166_1: 'MH',
        english_name: 'Marshall Islands'
      },
      {
        iso_3166_1: 'MK',
        english_name: 'Macedonia'
      },
      {
        iso_3166_1: 'ML',
        english_name: 'Mali'
      },
      {
        iso_3166_1: 'MM',
        english_name: 'Myanmar'
      },
      {
        iso_3166_1: 'MN',
        english_name: 'Mongolia'
      },
      {
        iso_3166_1: 'MO',
        english_name: 'Macao'
      },
      {
        iso_3166_1: 'MP',
        english_name: 'Northern Mariana Islands'
      },
      {
        iso_3166_1: 'MQ',
        english_name: 'Martinique'
      },
      {
        iso_3166_1: 'MR',
        english_name: 'Mauritania'
      },
      {
        iso_3166_1: 'MS',
        english_name: 'Montserrat'
      },
      {
        iso_3166_1: 'MT',
        english_name: 'Malta'
      },
      {
        iso_3166_1: 'MU',
        english_name: 'Mauritius'
      },
      {
        iso_3166_1: 'MV',
        english_name: 'Maldives'
      },
      {
        iso_3166_1: 'MW',
        english_name: 'Malawi'
      },
      {
        iso_3166_1: 'MX',
        english_name: 'Mexico'
      },
      {
        iso_3166_1: 'MY',
        english_name: 'Malaysia'
      },
      {
        iso_3166_1: 'MZ',
        english_name: 'Mozambique'
      },
      {
        iso_3166_1: 'NA',
        english_name: 'Namibia'
      },
      {
        iso_3166_1: 'NC',
        english_name: 'New Caledonia'
      },
      {
        iso_3166_1: 'NE',
        english_name: 'Niger'
      },
      {
        iso_3166_1: 'NF',
        english_name: 'Norfolk Island'
      },
      {
        iso_3166_1: 'NG',
        english_name: 'Nigeria'
      },
      {
        iso_3166_1: 'ME',
        english_name: 'Montenegro'
      },
      {
        iso_3166_1: 'NI',
        english_name: 'Nicaragua'
      },
      {
        iso_3166_1: 'NL',
        english_name: 'Netherlands'
      },
      {
        iso_3166_1: 'NO',
        english_name: 'Norway'
      },
      {
        iso_3166_1: 'NP',
        english_name: 'Nepal'
      },
      {
        iso_3166_1: 'NR',
        english_name: 'Nauru'
      },
      {
        iso_3166_1: 'NU',
        english_name: 'Niue'
      },
      {
        iso_3166_1: 'NZ',
        english_name: 'New Zealand'
      },
      {
        iso_3166_1: 'OM',
        english_name: 'Oman'
      },
      {
        iso_3166_1: 'PA',
        english_name: 'Panama'
      },
      {
        iso_3166_1: 'PE',
        english_name: 'Peru'
      },
      {
        iso_3166_1: 'PF',
        english_name: 'French Polynesia'
      },
      {
        iso_3166_1: 'PG',
        english_name: 'Papua New Guinea'
      },
      {
        iso_3166_1: 'PH',
        english_name: 'Philippines'
      },
      {
        iso_3166_1: 'YU',
        english_name: 'Yugoslavia'
      },
      {
        iso_3166_1: 'XK',
        english_name: 'Kosovo'
      },
      {
        iso_3166_1: 'XC',
        english_name: 'Czechoslovakia'
      },
      {
        iso_3166_1: 'PK',
        english_name: 'Pakistan'
      },
      {
        iso_3166_1: 'PL',
        english_name: 'Poland'
      },
      {
        iso_3166_1: 'PM',
        english_name: 'St. Pierre and Miquelon'
      },
      {
        iso_3166_1: 'PN',
        english_name: 'Pitcairn Island'
      },
      {
        iso_3166_1: 'PR',
        english_name: 'Puerto Rico'
      },
      {
        iso_3166_1: 'PS',
        english_name: 'Palestinian Territory'
      },
      {
        iso_3166_1: 'PT',
        english_name: 'Portugal'
      },
      {
        iso_3166_1: 'PW',
        english_name: 'Palau'
      },
      {
        iso_3166_1: 'PY',
        english_name: 'Paraguay'
      },
      {
        iso_3166_1: 'QA',
        english_name: 'Qatar'
      },
      {
        iso_3166_1: 'RE',
        english_name: 'Reunion'
      },
      {
        iso_3166_1: 'RO',
        english_name: 'Romania'
      },
      {
        iso_3166_1: 'RU',
        english_name: 'Russia'
      },
      {
        iso_3166_1: 'RW',
        english_name: 'Rwanda'
      },
      {
        iso_3166_1: 'SA',
        english_name: 'Saudi Arabia'
      },
      {
        iso_3166_1: 'SB',
        english_name: 'Solomon Islands'
      },
      {
        iso_3166_1: 'SC',
        english_name: 'Seychelles'
      },
      {
        iso_3166_1: 'SD',
        english_name: 'Sudan'
      },
      {
        iso_3166_1: 'SE',
        english_name: 'Sweden'
      },
      {
        iso_3166_1: 'SG',
        english_name: 'Singapore'
      },
      {
        iso_3166_1: 'SH',
        english_name: 'St. Helena'
      },
      {
        iso_3166_1: 'SI',
        english_name: 'Slovenia'
      },
      {
        iso_3166_1: 'SJ',
        english_name: 'Svalbard & Jan Mayen Islands'
      },
      {
        iso_3166_1: 'SK',
        english_name: 'Slovakia'
      },
      {
        iso_3166_1: 'SL',
        english_name: 'Sierra Leone'
      },
      {
        iso_3166_1: 'SM',
        english_name: 'San Marino'
      },
      {
        iso_3166_1: 'SN',
        english_name: 'Senegal'
      },
      {
        iso_3166_1: 'SO',
        english_name: 'Somalia'
      },
      {
        iso_3166_1: 'SR',
        english_name: 'Suriname'
      },
      {
        iso_3166_1: 'ST',
        english_name: 'Sao Tome and Principe'
      },
      {
        iso_3166_1: 'SV',
        english_name: 'El Salvador'
      },
      {
        iso_3166_1: 'SY',
        english_name: 'Syrian Arab Republic'
      },
      {
        iso_3166_1: 'SZ',
        english_name: 'Swaziland'
      },
      {
        iso_3166_1: 'TC',
        english_name: 'Turks and Caicos Islands'
      },
      {
        iso_3166_1: 'TD',
        english_name: 'Chad'
      },
      {
        iso_3166_1: 'TF',
        english_name: 'French Southern Territories'
      },
      {
        iso_3166_1: 'TG',
        english_name: 'Togo'
      },
      {
        iso_3166_1: 'TH',
        english_name: 'Thailand'
      },
      {
        iso_3166_1: 'TJ',
        english_name: 'Tajikistan'
      },
      {
        iso_3166_1: 'TK',
        english_name: 'Tokelau'
      },
      {
        iso_3166_1: 'TL',
        english_name: 'Timor-Leste'
      },
      {
        iso_3166_1: 'TM',
        english_name: 'Turkmenistan'
      },
      {
        iso_3166_1: 'TN',
        english_name: 'Tunisia'
      },
      {
        iso_3166_1: 'TO',
        english_name: 'Tonga'
      },
      {
        iso_3166_1: 'TR',
        english_name: 'Turkey'
      },
      {
        iso_3166_1: 'TT',
        english_name: 'Trinidad and Tobago'
      },
      {
        iso_3166_1: 'TV',
        english_name: 'Tuvalu'
      },
      {
        iso_3166_1: 'TW',
        english_name: 'Taiwan'
      },
      {
        iso_3166_1: 'TZ',
        english_name: 'Tanzania'
      },
      {
        iso_3166_1: 'UA',
        english_name: 'Ukraine'
      },
      {
        iso_3166_1: 'UG',
        english_name: 'Uganda'
      },
      {
        iso_3166_1: 'UM',
        english_name: 'United States Minor Outlying Islands'
      },
      {
        iso_3166_1: 'US',
        english_name: 'United States of America'
      },
      {
        iso_3166_1: 'UY',
        english_name: 'Uruguay'
      },
      {
        iso_3166_1: 'UZ',
        english_name: 'Uzbekistan'
      },
      {
        iso_3166_1: 'VA',
        english_name: 'Holy See'
      },
      {
        iso_3166_1: 'VC',
        english_name: 'St. Vincent and the Grenadines'
      },
      {
        iso_3166_1: 'VE',
        english_name: 'Venezuela'
      },
      {
        iso_3166_1: 'VG',
        english_name: 'British Virgin Islands'
      },
      {
        iso_3166_1: 'VI',
        english_name: 'US Virgin Islands'
      },
      {
        iso_3166_1: 'VN',
        english_name: 'Vietnam'
      },
      {
        iso_3166_1: 'VU',
        english_name: 'Vanuatu'
      },
      {
        iso_3166_1: 'WF',
        english_name: 'Wallis and Futuna Islands'
      },
      {
        iso_3166_1: 'WS',
        english_name: 'Samoa'
      },
      {
        iso_3166_1: 'YE',
        english_name: 'Yemen'
      },
      {
        iso_3166_1: 'YT',
        english_name: 'Mayotte'
      },
      {
        iso_3166_1: 'ZA',
        english_name: 'South Africa'
      },
      {
        iso_3166_1: 'ZM',
        english_name: 'Zambia'
      },
      {
        iso_3166_1: 'ZW',
        english_name: 'Zimbabwe'
      },
      {
        iso_3166_1: 'KR',
        english_name: 'South Korea'
      },
      {
        iso_3166_1: 'XG',
        english_name: 'East Germany'
      },
      {
        iso_3166_1: 'SU',
        english_name: 'Soviet Union'
      },
      {
        iso_3166_1: 'SS',
        english_name: 'South Sudan'
      }
    ],
    movieGenres: [
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 12,
        name: 'Adventure'
      },
      {
        id: 16,
        name: 'Animation'
      },
      {
        id: 35,
        name: 'Comedy'
      },
      {
        id: 80,
        name: 'Crime'
      },
      {
        id: 99,
        name: 'Documentary'
      },
      {
        id: 18,
        name: 'Drama'
      },
      {
        id: 10751,
        name: 'Family'
      },
      {
        id: 14,
        name: 'Fantasy'
      },
      {
        id: 36,
        name: 'History'
      },
      {
        id: 27,
        name: 'Horror'
      },
      {
        id: 10402,
        name: 'Music'
      },
      {
        id: 9648,
        name: 'Mystery'
      },
      {
        id: 10749,
        name: 'Romance'
      },
      {
        id: 878,
        name: 'Science Fiction'
      },
      {
        id: 10770,
        name: 'TV Movie'
      },
      {
        id: 53,
        name: 'Thriller'
      },
      {
        id: 10752,
        name: 'War'
      },
      {
        id: 37,
        name: 'Western'
      }
    ],
    moviesTopRated: [
      {
        vote_count: 2014,
        id: 19404,
        video: false,
        vote_average: 9,
        title: 'Dilwale Dulhania Le Jayenge',
        popularity: 18.88,
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
        vote_count: 12566,
        id: 278,
        video: false,
        vote_average: 8.7,
        title: 'The Shawshank Redemption',
        popularity: 32.423,
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
        vote_count: 9619,
        id: 238,
        video: false,
        vote_average: 8.6,
        title: 'The Godfather',
        popularity: 30.257,
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
        vote_count: 3818,
        id: 372058,
        video: false,
        vote_average: 8.6,
        title: 'Your Name.',
        popularity: 22.23,
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
        vote_count: 7619,
        id: 424,
        video: false,
        vote_average: 8.5,
        title: 'Schindler\'s List',
        popularity: 26.265,
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
        vote_count: 5610,
        id: 240,
        video: false,
        vote_average: 8.5,
        title: 'The Godfather: Part II',
        popularity: 22.893,
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
        vote_count: 7068,
        id: 129,
        video: false,
        vote_average: 8.5,
        title: 'Spirited Away',
        popularity: 26.943,
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
        vote_count: 2804,
        id: 324857,
        video: false,
        vote_average: 8.5,
        title: 'Spider-Man: Into the Spider-Verse',
        popularity: 177.654,
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
        vote_count: 7859,
        id: 497,
        video: false,
        vote_average: 8.5,
        title: 'The Green Mile',
        popularity: 25.13,
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
        vote_count: 6926,
        id: 637,
        video: false,
        vote_average: 8.4,
        title: 'Life Is Beautiful',
        popularity: 18.171,
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
        vote_count: 14564,
        id: 680,
        video: false,
        vote_average: 8.4,
        title: 'Pulp Fiction',
        popularity: 30.195,
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
        vote_count: 405,
        id: 40096,
        video: false,
        vote_average: 8.4,
        title: 'A Dog\'s Will',
        popularity: 8.249,
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
        vote_count: 18242,
        id: 155,
        video: false,
        vote_average: 8.4,
        title: 'The Dark Knight',
        popularity: 43.134,
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
        vote_count: 4657,
        id: 539,
        video: false,
        vote_average: 8.4,
        title: 'Psycho',
        popularity: 24.045,
        poster_path: '/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
        original_language: 'es',
        original_title: 'Psycho',
        genre_ids: [
          27
        ],
        backdrop_path: '/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg',
        adult: false,
        overview: 'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.',
        release_date: '1960-06-16'
      },
      {
        vote_count: 15678,
        id: 550,
        video: false,
        vote_average: 8.4,
        title: 'Fight Club',
        popularity: 30.829,
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
        vote_count: 182,
        id: 517814,
        video: false,
        vote_average: 8.4,
        title: 'Capernaum',
        popularity: 27.239,
        poster_path: '/dQWfLmt9aU6Xe6yNPmEZJoLOPxX.jpg',
        original_language: 'ar',
        original_title: 'کفرناحوم',
        genre_ids: [
          18
        ],
        backdrop_path: '/8e0ETQmrgcP6R8TaVjd7o9NCGj9.jpg',
        adult: false,
        overview: 'Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.',
        release_date: '2018-10-06'
      },
      {
        vote_count: 14103,
        id: 13,
        video: false,
        vote_average: 8.4,
        title: 'Forrest Gump',
        popularity: 33.346,
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
        vote_count: 3563,
        id: 389,
        video: false,
        vote_average: 8.4,
        title: '12 Angry Men',
        popularity: 14.93,
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
        vote_count: 1920,
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
      },
      {
        vote_count: 12656,
        id: 122,
        video: false,
        vote_average: 8.4,
        title: 'The Lord of the Rings: The Return of the King',
        popularity: 40.444,
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
      }
    ],
    tvTopRated: [
      {
        original_name: 'I Am Not an Animal',
        genre_ids: [
          16,
          35
        ],
        name: 'I Am Not an Animal',
        popularity: 9.269,
        origin_country: [
          'GB'
        ],
        vote_count: 232,
        first_air_date: '2004-05-10',
        backdrop_path: '/o8Site0BMZ8xhknKJ0m52iLfqHg.jpg',
        original_language: 'en',
        id: 100,
        vote_average: 9.6,
        overview: 'I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.',
        poster_path: '/nMhv6jG5dtLdW7rgguYWvpbk0YN.jpg'
      },
      {
        original_name: 'Rick and Morty',
        genre_ids: [
          16,
          35,
          10759,
          10765
        ],
        name: 'Rick and Morty',
        popularity: 80.576,
        origin_country: [
          'US'
        ],
        vote_count: 1153,
        first_air_date: '2013-12-02',
        backdrop_path: '/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg',
        original_language: 'en',
        id: 60625,
        vote_average: 8.5,
        overview: 'Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty\'s already unstable family life, these events cause Morty much distress at home and school.',
        poster_path: '/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg'
      },
      {
        original_name: 'Breaking Bad',
        genre_ids: [
          18
        ],
        name: 'Breaking Bad',
        popularity: 76.931,
        origin_country: [
          'US'
        ],
        vote_count: 3155,
        first_air_date: '2008-01-20',
        backdrop_path: '/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg',
        original_language: 'en',
        id: 1396,
        vote_average: 8.4,
        overview: 'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family\'s financial future at any cost as he enters the dangerous world of drugs and crime.',
        poster_path: '/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg'
      },
      {
        original_name: 'Sherlock',
        genre_ids: [
          80,
          18,
          9648
        ],
        name: 'Sherlock',
        popularity: 42.083,
        origin_country: [
          'GB'
        ],
        vote_count: 1644,
        first_air_date: '2010-07-25',
        backdrop_path: '/bvS50jBZXtglmLu72EAt5KgJBrL.jpg',
        original_language: 'en',
        id: 19885,
        vote_average: 8.3,
        overview: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
        poster_path: '/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg'
      },
      {
        original_name: 'Planet Earth II',
        genre_ids: [
          99,
          10751
        ],
        name: 'Planet Earth II',
        popularity: 17.299,
        origin_country: [
          'GB'
        ],
        vote_count: 298,
        first_air_date: '2016-11-06',
        backdrop_path: '/xIt4DDYipMPNu2HDBrhUS4ndSYb.jpg',
        original_language: 'en',
        id: 68595,
        vote_average: 8.3,
        overview: 'David Attenborough presents a documentary series exploring how animals meet the challenges of surviving in the most iconic habitats on earth.',
        poster_path: '/uy5QoTu8fc6fGXMCTMbpQJFUEB0.jpg'
      },
      {
        original_name: 'Stranger Things',
        genre_ids: [
          18,
          9648,
          10765
        ],
        name: 'Stranger Things',
        popularity: 63.912,
        origin_country: [
          'US'
        ],
        vote_count: 2139,
        first_air_date: '2016-07-15',
        backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
        original_language: 'en',
        id: 66732,
        vote_average: 8.3,
        overview: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
        poster_path: '/vNJ95BMCzIBJZhW0IEoxzOoW53P.jpg'
      },
      {
        original_name: 'The Wire',
        genre_ids: [
          80,
          18
        ],
        name: 'The Wire',
        popularity: 26.544,
        origin_country: [
          'US'
        ],
        vote_count: 780,
        first_air_date: '2002-06-02',
        backdrop_path: '/4hWfYN3wiOZZXC7t6B70BF9iUvk.jpg',
        original_language: 'en',
        id: 1438,
        vote_average: 8.3,
        overview: 'Told from the points of view of both the Baltimore homicide and narcotics detectives and their targets, the series captures a universe in which the national war on drugs has become a permanent, self-sustaining bureaucracy, and distinctions between good and evil are routinely obliterated.',
        poster_path: '/dg7NuKDjmS6OzuNy33qt8kSkPA1.jpg'
      },
      {
        original_name: 'Planet Earth',
        genre_ids: [
          99
        ],
        name: 'Planet Earth',
        popularity: 13.282,
        origin_country: [
          'GB'
        ],
        vote_count: 466,
        first_air_date: '2006-03-05',
        backdrop_path: '/4AJnC8L5CXdqb6tMeUBL5jdHfuG.jpg',
        original_language: 'en',
        id: 1044,
        vote_average: 8.3,
        overview: 'David Attenborough celebrates the amazing variety of the natural world in this epic documentary series, filmed over four years across 64 different countries.',
        poster_path: '/tI5hLHgrfOTOhPjX22vlo9YsdgE.jpg'
      },
      {
        original_name: 'Over the Garden Wall',
        genre_ids: [
          16,
          35,
          9648,
          10751,
          10765
        ],
        name: 'Over the Garden Wall',
        popularity: 11.416,
        origin_country: [
          'US'
        ],
        vote_count: 180,
        first_air_date: '2014-11-03',
        backdrop_path: '/7vWXXOfsFiopxyuE1U303aej0fT.jpg',
        original_language: 'en',
        id: 61617,
        vote_average: 8.3,
        overview: 'Two brothers, Wirt and Greg, find themselves lost in the Unknown; a strange forest adrift in time. With the help of a wise old Woodsman and a foul-tempered bluebird named Beatrice, Wirt and Greg must travel across this strange land, in hope of finding their way home. Join them as they encounter surprises and obstacles on their journey through the wood.',
        poster_path: '/2kcGFbt768xAiqvj748FFlO9Gvl.jpg'
      },
      {
        original_name: 'Fargo',
        genre_ids: [
          80,
          18
        ],
        name: 'Fargo',
        popularity: 28.909,
        origin_country: [
          'US'
        ],
        vote_count: 971,
        first_air_date: '2014-04-15',
        backdrop_path: '/qq1S5EjaaUrQAcMsn6raNFXpzHk.jpg',
        original_language: 'en',
        id: 60622,
        vote_average: 8.3,
        overview: 'A close-knit anthology series dealing with stories involving malice, violence and murder based in and around Minnesota.',
        poster_path: '/e890UetS6XH7kqltlZ8VU6qDaHU.jpg'
      },
      {
        original_name: 'Peaky Blinders',
        genre_ids: [
          80,
          18
        ],
        name: 'Peaky Blinders',
        popularity: 32.923,
        origin_country: [
          'GB'
        ],
        vote_count: 449,
        first_air_date: '2013-09-12',
        backdrop_path: '/inPxrxF5qBQ2H5dyjcMzibX5JA6.jpg',
        original_language: 'en',
        id: 60574,
        vote_average: 8.3,
        overview: 'A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.',
        poster_path: '/jeWoeUQyHdxGFNZCrzbOUP78FiZ.jpg'
      },
      {
        original_name: 'Gravity Falls',
        genre_ids: [
          16,
          35,
          9648,
          10765
        ],
        name: 'Gravity Falls',
        popularity: 32.732,
        origin_country: [
          'US'
        ],
        vote_count: 234,
        first_air_date: '2012-06-15',
        backdrop_path: '/sJjrJWsOCUUeVMexxANNC6s3dWV.jpg',
        original_language: 'en',
        id: 40075,
        vote_average: 8.2,
        overview: 'Twin brother and sister Dipper and Mabel Pines are in for an unexpected adventure when they spend the summer helping their great uncle Stan run a tourist trap in the mysterious town of Gravity Falls, Oregon.',
        poster_path: '/oGsgxjeZ9rd20eCJsGSMGgWvl4P.jpg'
      },
      {
        original_name: 'Avatar: The Last Airbender',
        genre_ids: [
          28,
          12,
          16,
          14
        ],
        name: 'Avatar: The Last Airbender',
        popularity: 22.186,
        origin_country: [
          'US'
        ],
        vote_count: 439,
        first_air_date: '2005-02-21',
        backdrop_path: '/732azfQ0xUAJNQ48pPfVtCCLVlZ.jpg',
        original_language: 'en',
        id: 246,
        vote_average: 8.3,
        overview: 'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.',
        poster_path: '/sB8V0pQtJZ17v8FLXMOcYz6045c.jpg'
      },
      {
        original_name: 'ワンパンマン',
        genre_ids: [
          16,
          35,
          10759
        ],
        name: 'One-Punch Man',
        popularity: 88.551,
        origin_country: [
          'JP'
        ],
        vote_count: 284,
        first_air_date: '2015-10-04',
        backdrop_path: '/s0w8JbuNNxL1YgaHeDWih12C3jG.jpg',
        original_language: 'ja',
        id: 63926,
        vote_average: 8.2,
        overview: 'Saitama is a hero who only became a hero for fun. After three years of “special” training, though, he’s become so strong that he’s practically invincible. In fact, he’s too strong—even his mightiest opponents are taken out with a single punch, and it turns out that being devastatingly powerful is actually kind of a bore. With his passion for being a hero lost along with his hair, yet still faced with new enemies every day, how much longer can he keep it going?',
        poster_path: '/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg'
      },
      {
        original_name: 'カウボーイビバップ',
        genre_ids: [
          16,
          18,
          10759,
          10765
        ],
        name: 'Cowboy Bebop',
        popularity: 20.931,
        origin_country: [
          'JP'
        ],
        vote_count: 300,
        first_air_date: '1998-04-03',
        backdrop_path: '/pL2VkIcoHnyX5oLd3IIaANkzB01.jpg',
        original_language: 'ja',
        id: 30991,
        vote_average: 8.2,
        overview: 'In 2071, roughly fifty years after an accident with a hyperspace gateway made the Earth almost uninhabitable, humanity has colonized most of the rocky planets and moons of the Solar System. Amid a rising crime rate, the Inter Solar System Police (ISSP) set up a legalized contract system, in which registered bounty hunters (also referred to as "Cowboys") chase criminals and bring them in alive in return for a reward.',
        poster_path: '/wjFU9z8EfOwczRTv0FrPcv9zHME.jpg'
      },
      {
        original_name: 'Peep Show',
        genre_ids: [
          35
        ],
        name: 'Peep Show',
        popularity: 13.387,
        origin_country: [
          'GB'
        ],
        vote_count: 136,
        first_air_date: '2003-09-19',
        backdrop_path: '/xoWBzIxfza235mOkvXt40uZSbqS.jpg',
        original_language: 'en',
        id: 815,
        vote_average: 8.2,
        overview: 'Peep Show is an award-winning British sitcom starring David Mitchell and Robert Webb. The television programme is written by Jesse Armstrong and Sam Bain, with additional material by Mitchell and Webb amongst others. It has been broadcast on Channel 4 since 2003. The show\'s eighth series makes it the longest-returning comedy in Channel 4 history. Stylistically, the show uses point of view shots with the thoughts of main characters Mark and Jeremy audible as voiceovers.\n\nPeep Show follows the lives of two men from their twenties to thirties, Mark Corrigan, who has steady employment for most of the series, and Jeremy "Jez" Usbourne, an unemployed would-be musician. The pair met at the fictional Dartmouth University, and now share a flat in Croydon, South London. Mark is initially a loan manager at the fictional JLB Credit, later becoming a waiter, and then a bathroom supplies salesman. He is financially secure, but awkward and socially inept, with a pessimistic and cynical attitude. Jeremy, having split up with his girlfriend Big Suze prior to the first episode, now lives in Mark\'s spare room. He usually has a much more optimistic and energetic outlook on the world than Mark, yet his self-proclaimed talent as a musician has yet to be recognised, and he is not as popular or attractive as he would like to think himself, although he is more successful with the opposite sex than Mark.',
        poster_path: '/pqrGyLYS5WIsLXwCuxc46sOP50F.jpg'
      },
      {
        original_name: 'Band of Brothers',
        genre_ids: [
          18,
          10759,
          10768
        ],
        name: 'Band of Brothers',
        popularity: 27.426,
        origin_country: [
          'GB',
          'US'
        ],
        vote_count: 1391,
        first_air_date: '2001-09-09',
        backdrop_path: '/1LrtAhWPSEetJLjblXvnaYtl7eA.jpg',
        original_language: 'en',
        id: 4613,
        vote_average: 8.2,
        overview: 'Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war. As an elite rifle company parachuting into Normandy early on D-Day morning, participants in the Battle of the Bulge, and witness to the horrors of war, the men of Easy knew extraordinary bravery and extraordinary fear - and became the stuff of legend. Based on Stephen E. Ambrose\'s acclaimed book of the same name.',
        poster_path: '/yjqu0KEVAWz9eJQBvzrQMFlGD84.jpg'
      },
      {
        original_name: 'Black Mirror',
        genre_ids: [
          18,
          10765
        ],
        name: 'Black Mirror',
        popularity: 35.879,
        origin_country: [
          'GB'
        ],
        vote_count: 1199,
        first_air_date: '2011-12-04',
        backdrop_path: '/b92npz1sZwvmjUfVIrWXehrk3pc.jpg',
        original_language: 'en',
        id: 42009,
        vote_average: 8.2,
        overview: 'A contemporary British re-working of The Twilight Zone with stories that tap into the collective unease about our modern world. \n\nOver the last ten years, technology has transformed almost every aspect of our lives before we\'ve had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone - a black mirror of our 21st Century existence.',
        poster_path: '/vGrS1mzlSHQQdOcmqH1zlE2iViY.jpg'
      },
      {
        original_name: 'DEATH NOTE',
        genre_ids: [
          16,
          9648
        ],
        name: 'Death Note',
        popularity: 56.758,
        origin_country: [
          'JP'
        ],
        vote_count: 478,
        first_air_date: '2006-10-04',
        backdrop_path: '/A2j5g79EcWn1oTNCW9PSo7NZRfv.jpg',
        original_language: 'ja',
        id: 13916,
        vote_average: 8.2,
        overview: 'Light Yagami is an ace student with great prospects—and he’s bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god. Any human whose name is written in the notebook dies, and Light has vowed to use the power of the Death Note to rid the world of evil. But will Light succeed in his noble goal, or will the Death Note turn him into the very thing he fights against?',
        poster_path: '/g8hHbsRmHYoWYizhWCk87vpkrmy.jpg'
      },
      {
        original_name: 'The Sopranos',
        genre_ids: [
          18
        ],
        name: 'The Sopranos',
        popularity: 36.939,
        origin_country: [
          'US'
        ],
        vote_count: 761,
        first_air_date: '1999-01-10',
        backdrop_path: '/8GZ91vtbYOMp05qruAGPezWC0Ja.jpg',
        original_language: 'en',
        id: 1398,
        vote_average: 8.2,
        overview: 'The story of New Jersey-based Italian-American mobster Tony Soprano and the difficulties he faces as he tries to balance the conflicting requirements of his home life and the criminal organization he heads. Those difficulties are often highlighted through his ongoing professional relationship with psychiatrist Jennifer Melfi. The show features Tony\'s family members and Mafia associates in prominent roles and story arcs, most notably his wife Carmela and his cousin and protégé Christopher Moltisanti.',
        poster_path: '/u0cLcBQITrYqfHsn06fxnQwtqiE.jpg'
      }
    ],
    appLoader: []
  },
  hostname: 'https://nuxtflix-pawsome.netlify.com/'
};

const movies = [
  {
    vote_count: 2014,
    id: 19404,
    video: false,
    vote_average: 9,
    title: 'Dilwale Dulhania Le Jayenge',
    popularity: 18.88,
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
    vote_count: 12566,
    id: 278,
    video: false,
    vote_average: 8.7,
    title: 'The Shawshank Redemption',
    popularity: 32.423,
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
    vote_count: 9619,
    id: 238,
    video: false,
    vote_average: 8.6,
    title: 'The Godfather',
    popularity: 30.257,
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
    vote_count: 3818,
    id: 372058,
    video: false,
    vote_average: 8.6,
    title: 'Your Name.',
    popularity: 22.23,
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
    vote_count: 7619,
    id: 424,
    video: false,
    vote_average: 8.5,
    title: 'Schindler\'s List',
    popularity: 26.265,
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
    vote_count: 5610,
    id: 240,
    video: false,
    vote_average: 8.5,
    title: 'The Godfather: Part II',
    popularity: 22.893,
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
    vote_count: 7068,
    id: 129,
    video: false,
    vote_average: 8.5,
    title: 'Spirited Away',
    popularity: 26.943,
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
    vote_count: 2804,
    id: 324857,
    video: false,
    vote_average: 8.5,
    title: 'Spider-Man: Into the Spider-Verse',
    popularity: 177.654,
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
    vote_count: 7859,
    id: 497,
    video: false,
    vote_average: 8.5,
    title: 'The Green Mile',
    popularity: 25.13,
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
    vote_count: 6926,
    id: 637,
    video: false,
    vote_average: 8.4,
    title: 'Life Is Beautiful',
    popularity: 18.171,
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
    vote_count: 14564,
    id: 680,
    video: false,
    vote_average: 8.4,
    title: 'Pulp Fiction',
    popularity: 30.195,
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
    vote_count: 405,
    id: 40096,
    video: false,
    vote_average: 8.4,
    title: 'A Dog\'s Will',
    popularity: 8.249,
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
    vote_count: 18242,
    id: 155,
    video: false,
    vote_average: 8.4,
    title: 'The Dark Knight',
    popularity: 43.134,
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
    vote_count: 4657,
    id: 539,
    video: false,
    vote_average: 8.4,
    title: 'Psycho',
    popularity: 24.045,
    poster_path: '/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
    original_language: 'es',
    original_title: 'Psycho',
    genre_ids: [
      27
    ],
    backdrop_path: '/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg',
    adult: false,
    overview: 'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.',
    release_date: '1960-06-16'
  },
  {
    vote_count: 15678,
    id: 550,
    video: false,
    vote_average: 8.4,
    title: 'Fight Club',
    popularity: 30.829,
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
    vote_count: 182,
    id: 517814,
    video: false,
    vote_average: 8.4,
    title: 'Capernaum',
    popularity: 27.239,
    poster_path: '/dQWfLmt9aU6Xe6yNPmEZJoLOPxX.jpg',
    original_language: 'ar',
    original_title: 'کفرناحوم',
    genre_ids: [
      18
    ],
    backdrop_path: '/8e0ETQmrgcP6R8TaVjd7o9NCGj9.jpg',
    adult: false,
    overview: 'Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.',
    release_date: '2018-10-06'
  },
  {
    vote_count: 14103,
    id: 13,
    video: false,
    vote_average: 8.4,
    title: 'Forrest Gump',
    popularity: 33.346,
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
    vote_count: 3563,
    id: 389,
    video: false,
    vote_average: 8.4,
    title: '12 Angry Men',
    popularity: 14.93,
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
    vote_count: 1920,
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
  },
  {
    vote_count: 12656,
    id: 122,
    video: false,
    vote_average: 8.4,
    title: 'The Lord of the Rings: The Return of the King',
    popularity: 40.444,
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
  }
];
const tv = [
  {
    original_name: 'I Am Not an Animal',
    genre_ids: [
      16,
      35
    ],
    name: 'I Am Not an Animal',
    popularity: 9.269,
    origin_country: [
      'GB'
    ],
    vote_count: 232,
    first_air_date: '2004-05-10',
    backdrop_path: '/o8Site0BMZ8xhknKJ0m52iLfqHg.jpg',
    original_language: 'en',
    id: 100,
    vote_average: 9.6,
    overview: 'I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.',
    poster_path: '/nMhv6jG5dtLdW7rgguYWvpbk0YN.jpg'
  },
  {
    original_name: 'Rick and Morty',
    genre_ids: [
      16,
      35,
      10759,
      10765
    ],
    name: 'Rick and Morty',
    popularity: 80.576,
    origin_country: [
      'US'
    ],
    vote_count: 1153,
    first_air_date: '2013-12-02',
    backdrop_path: '/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg',
    original_language: 'en',
    id: 60625,
    vote_average: 8.5,
    overview: 'Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty\'s already unstable family life, these events cause Morty much distress at home and school.',
    poster_path: '/qJdfO3ahgAMf2rcmhoqngjBBZW1.jpg'
  },
  {
    original_name: 'Breaking Bad',
    genre_ids: [
      18
    ],
    name: 'Breaking Bad',
    popularity: 76.931,
    origin_country: [
      'US'
    ],
    vote_count: 3155,
    first_air_date: '2008-01-20',
    backdrop_path: '/eSzpy96DwBujGFj0xMbXBcGcfxX.jpg',
    original_language: 'en',
    id: 1396,
    vote_average: 8.4,
    overview: 'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family\'s financial future at any cost as he enters the dangerous world of drugs and crime.',
    poster_path: '/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg'
  },
  {
    original_name: 'Sherlock',
    genre_ids: [
      80,
      18,
      9648
    ],
    name: 'Sherlock',
    popularity: 42.083,
    origin_country: [
      'GB'
    ],
    vote_count: 1644,
    first_air_date: '2010-07-25',
    backdrop_path: '/bvS50jBZXtglmLu72EAt5KgJBrL.jpg',
    original_language: 'en',
    id: 19885,
    vote_average: 8.3,
    overview: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    poster_path: '/f9zGxLHGyQB10cMDZNY5ZcGKhZi.jpg'
  },
  {
    original_name: 'Planet Earth II',
    genre_ids: [
      99,
      10751
    ],
    name: 'Planet Earth II',
    popularity: 17.299,
    origin_country: [
      'GB'
    ],
    vote_count: 298,
    first_air_date: '2016-11-06',
    backdrop_path: '/xIt4DDYipMPNu2HDBrhUS4ndSYb.jpg',
    original_language: 'en',
    id: 68595,
    vote_average: 8.3,
    overview: 'David Attenborough presents a documentary series exploring how animals meet the challenges of surviving in the most iconic habitats on earth.',
    poster_path: '/uy5QoTu8fc6fGXMCTMbpQJFUEB0.jpg'
  },
  {
    original_name: 'Stranger Things',
    genre_ids: [
      18,
      9648,
      10765
    ],
    name: 'Stranger Things',
    popularity: 63.912,
    origin_country: [
      'US'
    ],
    vote_count: 2139,
    first_air_date: '2016-07-15',
    backdrop_path: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    original_language: 'en',
    id: 66732,
    vote_average: 8.3,
    overview: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    poster_path: '/vNJ95BMCzIBJZhW0IEoxzOoW53P.jpg'
  },
  {
    original_name: 'The Wire',
    genre_ids: [
      80,
      18
    ],
    name: 'The Wire',
    popularity: 26.544,
    origin_country: [
      'US'
    ],
    vote_count: 780,
    first_air_date: '2002-06-02',
    backdrop_path: '/4hWfYN3wiOZZXC7t6B70BF9iUvk.jpg',
    original_language: 'en',
    id: 1438,
    vote_average: 8.3,
    overview: 'Told from the points of view of both the Baltimore homicide and narcotics detectives and their targets, the series captures a universe in which the national war on drugs has become a permanent, self-sustaining bureaucracy, and distinctions between good and evil are routinely obliterated.',
    poster_path: '/dg7NuKDjmS6OzuNy33qt8kSkPA1.jpg'
  },
  {
    original_name: 'Planet Earth',
    genre_ids: [
      99
    ],
    name: 'Planet Earth',
    popularity: 13.282,
    origin_country: [
      'GB'
    ],
    vote_count: 466,
    first_air_date: '2006-03-05',
    backdrop_path: '/4AJnC8L5CXdqb6tMeUBL5jdHfuG.jpg',
    original_language: 'en',
    id: 1044,
    vote_average: 8.3,
    overview: 'David Attenborough celebrates the amazing variety of the natural world in this epic documentary series, filmed over four years across 64 different countries.',
    poster_path: '/tI5hLHgrfOTOhPjX22vlo9YsdgE.jpg'
  },
  {
    original_name: 'Over the Garden Wall',
    genre_ids: [
      16,
      35,
      9648,
      10751,
      10765
    ],
    name: 'Over the Garden Wall',
    popularity: 11.416,
    origin_country: [
      'US'
    ],
    vote_count: 180,
    first_air_date: '2014-11-03',
    backdrop_path: '/7vWXXOfsFiopxyuE1U303aej0fT.jpg',
    original_language: 'en',
    id: 61617,
    vote_average: 8.3,
    overview: 'Two brothers, Wirt and Greg, find themselves lost in the Unknown; a strange forest adrift in time. With the help of a wise old Woodsman and a foul-tempered bluebird named Beatrice, Wirt and Greg must travel across this strange land, in hope of finding their way home. Join them as they encounter surprises and obstacles on their journey through the wood.',
    poster_path: '/2kcGFbt768xAiqvj748FFlO9Gvl.jpg'
  },
  {
    original_name: 'Fargo',
    genre_ids: [
      80,
      18
    ],
    name: 'Fargo',
    popularity: 28.909,
    origin_country: [
      'US'
    ],
    vote_count: 971,
    first_air_date: '2014-04-15',
    backdrop_path: '/qq1S5EjaaUrQAcMsn6raNFXpzHk.jpg',
    original_language: 'en',
    id: 60622,
    vote_average: 8.3,
    overview: 'A close-knit anthology series dealing with stories involving malice, violence and murder based in and around Minnesota.',
    poster_path: '/e890UetS6XH7kqltlZ8VU6qDaHU.jpg'
  },
  {
    original_name: 'Peaky Blinders',
    genre_ids: [
      80,
      18
    ],
    name: 'Peaky Blinders',
    popularity: 32.923,
    origin_country: [
      'GB'
    ],
    vote_count: 449,
    first_air_date: '2013-09-12',
    backdrop_path: '/inPxrxF5qBQ2H5dyjcMzibX5JA6.jpg',
    original_language: 'en',
    id: 60574,
    vote_average: 8.3,
    overview: 'A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.',
    poster_path: '/jeWoeUQyHdxGFNZCrzbOUP78FiZ.jpg'
  },
  {
    original_name: 'Gravity Falls',
    genre_ids: [
      16,
      35,
      9648,
      10765
    ],
    name: 'Gravity Falls',
    popularity: 32.732,
    origin_country: [
      'US'
    ],
    vote_count: 234,
    first_air_date: '2012-06-15',
    backdrop_path: '/sJjrJWsOCUUeVMexxANNC6s3dWV.jpg',
    original_language: 'en',
    id: 40075,
    vote_average: 8.2,
    overview: 'Twin brother and sister Dipper and Mabel Pines are in for an unexpected adventure when they spend the summer helping their great uncle Stan run a tourist trap in the mysterious town of Gravity Falls, Oregon.',
    poster_path: '/oGsgxjeZ9rd20eCJsGSMGgWvl4P.jpg'
  },
  {
    original_name: 'Avatar: The Last Airbender',
    genre_ids: [
      28,
      12,
      16,
      14
    ],
    name: 'Avatar: The Last Airbender',
    popularity: 22.186,
    origin_country: [
      'US'
    ],
    vote_count: 439,
    first_air_date: '2005-02-21',
    backdrop_path: '/732azfQ0xUAJNQ48pPfVtCCLVlZ.jpg',
    original_language: 'en',
    id: 246,
    vote_average: 8.3,
    overview: 'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.',
    poster_path: '/sB8V0pQtJZ17v8FLXMOcYz6045c.jpg'
  },
  {
    original_name: 'ワンパンマン',
    genre_ids: [
      16,
      35,
      10759
    ],
    name: 'One-Punch Man',
    popularity: 88.551,
    origin_country: [
      'JP'
    ],
    vote_count: 284,
    first_air_date: '2015-10-04',
    backdrop_path: '/s0w8JbuNNxL1YgaHeDWih12C3jG.jpg',
    original_language: 'ja',
    id: 63926,
    vote_average: 8.2,
    overview: 'Saitama is a hero who only became a hero for fun. After three years of “special” training, though, he’s become so strong that he’s practically invincible. In fact, he’s too strong—even his mightiest opponents are taken out with a single punch, and it turns out that being devastatingly powerful is actually kind of a bore. With his passion for being a hero lost along with his hair, yet still faced with new enemies every day, how much longer can he keep it going?',
    poster_path: '/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg'
  },
  {
    original_name: 'カウボーイビバップ',
    genre_ids: [
      16,
      18,
      10759,
      10765
    ],
    name: 'Cowboy Bebop',
    popularity: 20.931,
    origin_country: [
      'JP'
    ],
    vote_count: 300,
    first_air_date: '1998-04-03',
    backdrop_path: '/pL2VkIcoHnyX5oLd3IIaANkzB01.jpg',
    original_language: 'ja',
    id: 30991,
    vote_average: 8.2,
    overview: 'In 2071, roughly fifty years after an accident with a hyperspace gateway made the Earth almost uninhabitable, humanity has colonized most of the rocky planets and moons of the Solar System. Amid a rising crime rate, the Inter Solar System Police (ISSP) set up a legalized contract system, in which registered bounty hunters (also referred to as "Cowboys") chase criminals and bring them in alive in return for a reward.',
    poster_path: '/wjFU9z8EfOwczRTv0FrPcv9zHME.jpg'
  },
  {
    original_name: 'Peep Show',
    genre_ids: [
      35
    ],
    name: 'Peep Show',
    popularity: 13.387,
    origin_country: [
      'GB'
    ],
    vote_count: 136,
    first_air_date: '2003-09-19',
    backdrop_path: '/xoWBzIxfza235mOkvXt40uZSbqS.jpg',
    original_language: 'en',
    id: 815,
    vote_average: 8.2,
    overview: 'Peep Show is an award-winning British sitcom starring David Mitchell and Robert Webb. The television programme is written by Jesse Armstrong and Sam Bain, with additional material by Mitchell and Webb amongst others. It has been broadcast on Channel 4 since 2003. The show\'s eighth series makes it the longest-returning comedy in Channel 4 history. Stylistically, the show uses point of view shots with the thoughts of main characters Mark and Jeremy audible as voiceovers.\n\nPeep Show follows the lives of two men from their twenties to thirties, Mark Corrigan, who has steady employment for most of the series, and Jeremy "Jez" Usbourne, an unemployed would-be musician. The pair met at the fictional Dartmouth University, and now share a flat in Croydon, South London. Mark is initially a loan manager at the fictional JLB Credit, later becoming a waiter, and then a bathroom supplies salesman. He is financially secure, but awkward and socially inept, with a pessimistic and cynical attitude. Jeremy, having split up with his girlfriend Big Suze prior to the first episode, now lives in Mark\'s spare room. He usually has a much more optimistic and energetic outlook on the world than Mark, yet his self-proclaimed talent as a musician has yet to be recognised, and he is not as popular or attractive as he would like to think himself, although he is more successful with the opposite sex than Mark.',
    poster_path: '/pqrGyLYS5WIsLXwCuxc46sOP50F.jpg'
  },
  {
    original_name: 'Band of Brothers',
    genre_ids: [
      18,
      10759,
      10768
    ],
    name: 'Band of Brothers',
    popularity: 27.426,
    origin_country: [
      'GB',
      'US'
    ],
    vote_count: 1391,
    first_air_date: '2001-09-09',
    backdrop_path: '/1LrtAhWPSEetJLjblXvnaYtl7eA.jpg',
    original_language: 'en',
    id: 4613,
    vote_average: 8.2,
    overview: 'Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war. As an elite rifle company parachuting into Normandy early on D-Day morning, participants in the Battle of the Bulge, and witness to the horrors of war, the men of Easy knew extraordinary bravery and extraordinary fear - and became the stuff of legend. Based on Stephen E. Ambrose\'s acclaimed book of the same name.',
    poster_path: '/yjqu0KEVAWz9eJQBvzrQMFlGD84.jpg'
  },
  {
    original_name: 'Black Mirror',
    genre_ids: [
      18,
      10765
    ],
    name: 'Black Mirror',
    popularity: 35.879,
    origin_country: [
      'GB'
    ],
    vote_count: 1199,
    first_air_date: '2011-12-04',
    backdrop_path: '/b92npz1sZwvmjUfVIrWXehrk3pc.jpg',
    original_language: 'en',
    id: 42009,
    vote_average: 8.2,
    overview: 'A contemporary British re-working of The Twilight Zone with stories that tap into the collective unease about our modern world. \n\nOver the last ten years, technology has transformed almost every aspect of our lives before we\'ve had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone - a black mirror of our 21st Century existence.',
    poster_path: '/vGrS1mzlSHQQdOcmqH1zlE2iViY.jpg'
  },
  {
    original_name: 'DEATH NOTE',
    genre_ids: [
      16,
      9648
    ],
    name: 'Death Note',
    popularity: 56.758,
    origin_country: [
      'JP'
    ],
    vote_count: 478,
    first_air_date: '2006-10-04',
    backdrop_path: '/A2j5g79EcWn1oTNCW9PSo7NZRfv.jpg',
    original_language: 'ja',
    id: 13916,
    vote_average: 8.2,
    overview: 'Light Yagami is an ace student with great prospects—and he’s bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god. Any human whose name is written in the notebook dies, and Light has vowed to use the power of the Death Note to rid the world of evil. But will Light succeed in his noble goal, or will the Death Note turn him into the very thing he fights against?',
    poster_path: '/g8hHbsRmHYoWYizhWCk87vpkrmy.jpg'
  },
  {
    original_name: 'The Sopranos',
    genre_ids: [
      18
    ],
    name: 'The Sopranos',
    popularity: 36.939,
    origin_country: [
      'US'
    ],
    vote_count: 761,
    first_air_date: '1999-01-10',
    backdrop_path: '/8GZ91vtbYOMp05qruAGPezWC0Ja.jpg',
    original_language: 'en',
    id: 1398,
    vote_average: 8.2,
    overview: 'The story of New Jersey-based Italian-American mobster Tony Soprano and the difficulties he faces as he tries to balance the conflicting requirements of his home life and the criminal organization he heads. Those difficulties are often highlighted through his ongoing professional relationship with psychiatrist Jennifer Melfi. The show features Tony\'s family members and Mafia associates in prominent roles and story arcs, most notably his wife Carmela and his cousin and protégé Christopher Moltisanti.',
    poster_path: '/u0cLcBQITrYqfHsn06fxnQwtqiE.jpg'
  }
];

/**
 * MediaScrollableList
 */
storiesOf('App Loader', module)
  .add('App Loader', () => ({
    components: { AppLoader },
    template: '<app-loader></app-loader>',
    data() {
      return {
        movies,
        tv
      };
    },
    store: new Vuex.Store({
      state: state,
      mutations,
      actions
    }),
  }));
