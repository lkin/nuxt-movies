import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, array } from '@storybook/addon-knobs';
import VueDropdown from '../components/VueDropdown';


const options = [
  'option 1',
  'option 2',
  'option 3'
];

const selected = options[0];

/**
 * Card
 */
storiesOf('Vue DropDown', module)
  .addDecorator(withKnobs)
  .add('Dropdown', () => ({
    components: { VueDropdown },
    template: '<vue-dropdown :options="options"></vue-dropdown>',
    props() {
      return {
        options: {
          type: Array,
          default: array('options', options)
        },
      };
    }
  }));

