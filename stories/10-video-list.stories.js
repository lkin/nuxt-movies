import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import VideoList from '../components/VideoList';
import store from '../.storybook/store'

const videos = [
  {
    id: '54cb1956925141678e012d15',
    iso_639_1: 'en',
    iso_3166_1: 'US',
    key: 'co9SNfJNDN8',
    name: 'The Lord of the Rings: The Return of the King Official Teaser #1 - (2003) HD',
    site: 'YouTube',
    size: 720,
    type: 'Teaser'
  },
  {
    id: '5b43c5ef0e0a26710d021655',
    iso_639_1: 'en',
    iso_3166_1: 'US',
    key: 'r5X-hFf6Bwo',
    name: 'The Lord of the Rings: The Return of the King Official Trailer #1 - (2003) HD',
    site: 'YouTube',
    size: 720,
    type: 'Trailer'
  },
  {
    id: '5b95d7249251414324026293',
    iso_639_1: 'en',
    iso_3166_1: 'US',
    key: 'o9-NreR2Ji0',
    name: 'The Lord of the Rings: The Return of the King (2003) Trailer 1',
    site: 'YouTube',
    size: 1080,
    type: 'Trailer'
  },
  {
    id: '5b95d733c3a368567602a63c',
    iso_639_1: 'en',
    iso_3166_1: 'US',
    key: '1zPLzpqjO4U',
    name: 'The Lord of the Rings: The Return of the King (2003) Trailer 2',
    site: 'YouTube',
    size: 1080,
    type: 'Trailer'
  }
];

/**
 * MediaScrollableList
 */
storiesOf('Videos List', module)
  .add('Videos List', () => ({
    components: { VideoList },
    template: '<video-list :videos="videos"></video-list>',
    data() {
      return {
        videos
      };
    },
    store
  }));
