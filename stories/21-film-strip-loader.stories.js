import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import FilmStripLoader from '../components/FilmStripLoader';
import { array } from '@storybook/addon-knobs';


/**
 * MediaScrollableList
 */
storiesOf('Loaders|FilmStripLoader', module)
  .add('FilmStripLoader', () => ({
    components: { FilmStripLoader },
    template: '<film-strip-loader class="film-strip-loader--hero"></film-strip-loader>'
  }));
