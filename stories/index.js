import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import MovieCard from '../components/MovieCard.vue';


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
  // .add('story as a template', () => '<movie-card :movie="true"></movie-card>')
  .add('story as a component', () => ({
    components: { MovieCard },
    template: '<movie-card :movie="true"></movie-card>'
  }));
