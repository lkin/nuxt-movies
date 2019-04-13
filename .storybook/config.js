import { addParameters, addDecorator, configure } from '@storybook/vue';
import { themes } from '@storybook/theming';
import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import theme from './theme';

// Global parameters
// ------------------------

// Dark theme
addParameters({
  options: {
    // name: 'Nuxt Movies',
    theme: theme // themes.dark,
  },
});

// Viewport addon
addParameters({
  viewport: {
    //   /**
    //    * name to display in the dropdown
    //    * @type {String}
    //    */
    //   name: 'Responsive',
    //
    //   /**
    //    * Inline styles to be applied to the story (iframe).
    //    * styles is an object whose key is the camelCased version of the style name, and whose
    //    * value is the style’s value, usually a string
    //    * @type {Object}
    //    */
    //   styles: {
    //     width: '100%',
    //     height: '100%',
    //   },
    //
    //   /**
    //    * type of the device (e.g. desktop, mobile, or tablet)
    //    * @type {String}
    //    */
    //   type: 'desktop',
  }
});

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


// Vuex
// -----------------------
Vue.use(Vuex);


// Import your global components
// -----------------------------
import { VLazyImagePlugin } from 'v-lazy-image';
Vue.use(VLazyImagePlugin);

/**
 * Functional components replacing the ones from Nuxt
 * Source: https://ithelp.ithome.com.tw/articles/10201352
 */
// Vue.component('nuxt-link', {
//   functional: true,
//   render (createElement, context) {
//     let allClass = {}
//     let arrClass = context.data.staticClass
//       ? context.data.staticClass.split(' ')
//       : [];
//
//     arrClass.forEach(theClass => {
//       allClass[theClass] = true
//     });
//
//     return createElement('a', { class: allClass }, context.children)
//   }
// });
Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
});

Vue.component('no-ssr', {
  functional: true,
  render (createElement, context) {
    return context.children;
  }
});



// Stories loader
// -----------------------
function loadStories() {
  require('../stories');

  const req = require.context('../stories', true, /\.stories\.js$/);
  console.dir(req.keys());
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
