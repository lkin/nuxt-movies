import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Card from '../components/Card';
import store from '../.storybook/store'


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

const movieJap = {
  vote_count: 3815,
  id: 372058,
  video: false,
  vote_average: 8.6,
  title: 'Your Name.',
  popularity: 20.747,
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
};

/**
 * Card
 */
storiesOf('Cards|Cards', module)
  .add('Poster Card', () => ({
    components: { Card },
    template: '<card :medium="movie" card-type="poster"></card>',
    data() {
      return {
        movie: movie
      };
    },
    store,
  }))
  .add('Poster Card No Image', () => ({
    components: { Card },
    template: '<card :medium="movie" card-type="poster"></card>',
    data() {
      return {
        movie: {
          ...movie,
          poster_path: null
        }
      };
    },
    store,
  }))
  .add('Backdrop Card', () => ({
    components: { Card },
    template: '<card :medium="movie"></card>',
    data() {
      return {
        movie: movie
      };
    },
    store,
  }))
  .add('Backdrop Card with non english text', () => ({
    components: { Card },
    template: '<card :medium="movie"></card>',
    data() {
      return {
        movie: movieJap
      };
    },
    store,
  }))
  .add('Backdrop Card No Image', () => ({
    components: { Card },
    template: '<card :medium="movie"></card>',
    data() {
      return {
        movie: {
          ...movie,
          backdrop_path: null
        }
      };
    },
    store,
  }));

