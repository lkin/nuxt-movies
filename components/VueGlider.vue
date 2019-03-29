<template>
  <div class="glider-contain">
    <div ref="glider" class="glider">
      <slot></slot>
    </div>

    <button role="button" aria-label="Previous" :class="prevClass"></button>
    <button role="button" aria-label="Next" :class="nextClass"></button>
  </div>
</template>

<script>
import Glider from 'glider-js';

export default {
  name: 'VueGlider',

  props: {
    slidesToScroll: {
      required: true,
      type: Number,
      default: 1
    },
    slidesToShow: {
      required: false,
      type: Number,
      // eslint-disable-next-line  vue/require-valid-default-prop
      default: 1
    },
    itemWidth: {
      required: false,
      type: Number,
      default: undefined
    },
    exactWidth: {
      required: false,
      type: Number,
      default: undefined
    },
    scrollLock: {
      required: false,
      type: Boolean,
      default: false
    },
    showArrows: {
      required: false,
      type: Boolean,
      default: true
    },
    responsive: {
      required: false,
      default: function () {
        return undefined;
      },
      type: Array
    },
    arrows: {
      required: false,
      type: Object,
      default: function () {
        return {
          prev: '.glider-prev',
          next: '.glider-next'
        };
      }
    }

  },

  data: function () {
    return {
      glider: null,
      settings: {
        // mobile first settins
        slidesToScroll: this.slidesToScroll,
        slidesToShow: this.slidesToShow,
        itemWidth: this.itemWidth,
        exactWidth: this.exactWidth,
        scrollLock: this.scrollLock,
        draggable: true,
        // dots: '.dots',
        arrows: this.arrows,
        responsive: this.responsive
      }
    };
  },

  computed: {
    prevClass() {
      return this.arrows.prev.substr(1).replace('.', ' ');
    },
    nextClass() {
      return this.arrows.next.substr(1).replace('.', ' ');
    }
  },

  mounted() {
    document.addEventListener('glider-loaded', this.hideFFScrollBars);
    document.addEventListener('glider-refresh', this.hideFFScrollBars);

    this.glider = new Glider(this.$refs.glider, this.settings);
    // console.log('Glider mounted');
  },


  beforeDestroy() {
    // Glider(document.querySelector(element_path)).destroy();
    this.glider.destroy();
    // console.log('Glider destroyed');
    document.removeEventListener('glider-loaded', this.hideFFScrollBars);
    document.removeEventListener('glider-refresh', this.hideFFScrollBars);
  },

  methods: {
    hideFFScrollBars: function (e) {
      const scrollbarHeight = 17; // Currently 17, may change with updates

      if (/firefox/i.test(navigator.userAgent)) {
        // We only need to appy to desktop. Firefox for mobile uses
        // a different rendering engine (WebKit)
        if (window.innerWidth > 575) {
          e.target.parentNode.style.height = (e.target.offsetHeight - scrollbarHeight) + 'px';
        }
      }
    }
  }
};
</script>
