/*
* Source: https://github.com/pirony/ks-vue-scrollmagic/issues/13
* you can use this.$GSAP.TweenMax() this.$GSAP.TimelineMax() in all components,
* create ScrollMagic scenes with new this.$ScrollMagic.Scene(),
* add them to Controller with this.$ScrollMagic.Controller.addScene(scene) and
* remove them with this.$ScrollMagic.Controller.removeScene(scene)
* without working around the limitations of saving them as unique strings.
* */
import Vue from 'vue';
import { TweenLite, TimelineLite, CSSPlugin } from 'gsap/all';
const morphSVG = require('~/assets/gsap/MorphSVGPlugin');

const GSAPScrollMagic = {
  install(Vue, options) {
    // GSAP
    Vue.prototype.$GSAP = {
      TweenLite,
      // TweenMax,
      TimelineLite,
      // TimelineMax,
      // ScrollToPlugin,
      MorphSVGPlugin,
      CSSPlugin
    };
  }
};

Vue.use(GSAPScrollMagic);
