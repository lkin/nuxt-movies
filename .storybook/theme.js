import { create } from '@storybook/theming';
import logo from '../assets/icons/logo.svg';

export default create({
  // Is this a 'light' or 'dark' theme?
  base: 'dark',

  // Brand logo/text
  brandImage: logo
});
