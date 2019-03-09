<template>
  <article class="card" :class="{'card--poster': cardType === shared.cardType.poster}">
    <nuxt-link :to="`/media/${medium._slug}`">
      <figure>
        <img :sizes="movieMaxPictureSize"
             :srcset="movieResponsivePath"
             :src="movieMaxPicturePath"
             alt=""
        >

        <figcaption></figcaption>
      </figure>
      <header>
        <h2>{{ medium.original_title }}</h2>
        <!--<p>{{ medium.overview }}</p>-->
        <p>Released {{ formatDate(medium.release_date) }}</p>
      </header>
    </nuxt-link>
  </article>
</template>

<script>
import dayjs from 'dayjs';
import shared from '../lib/shared';

export default {
  name: 'Card',

  props: {
    cardType: {
      type: String,
      required: false,
      default: shared.cardType.backdrop
    },

    medium: {
      required: true,
      type: Object,
      default: function () {
        return {};
      }
    }
  },

  data: function () {
    return {
      shared
    };
  },

  computed: {
    backdropSizes() {
      return this.$store.state.api.configuration.images.backdrop_sizes.filter(size => size !== 'original');
    },
    posterSizes() {
      return this.$store.state.api.configuration.images.poster_sizes.filter(size => size !== 'original');
    },

    movieMaxPicturePath() {
      return this.cardType === 'poster' ? this.posterMaxPath : this.backdropMaxPath;
    },

    movieMaxPictureSize() {
      const maxSize = this.cardType === 'poster' ? this.posterSizes[this.posterSizes.length - 1] : this.backdropSizes[this.posterSizes.length - 1];

      return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
    },

    backdropMaxPath() {
      const filePath = this.medium.backdrop_path;
      const size = this.backdropSizes[this.posterSizes.length - 1];

      return this.getImagePath(filePath, size);
    },

    posterMaxPath() {
      const filePath = this.medium.poster_path;
      const size = this.posterSizes[this.posterSizes.length - 1];

      return this.getImagePath(filePath, size);
    },

    movieResponsivePath() {
      const filePath = this.cardType === 'poster' ? this.medium.poster_path : this.medium.backdrop_path;
      const sizes = this.cardType === 'poster' ? this.posterSizes : this.backdropSizes;
      // console.log({ sizes });
      return sizes.map(size => `${this.getImagePath(filePath, size)} ${size.replace('w', '')}w`);
    }
  },
  methods: {
    formatDate(date) {
      const d = dayjs(date);
      return d.format('MMM D, YYYY');
    },

    getImagePath(filePath, size) {
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;
      return `${baseUrl}${size}${filePath}`;
    }
  }
};
</script>

