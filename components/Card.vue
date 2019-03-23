<template>
  <article class="card" :class="{'card--poster': cardType === shared.cardType.poster}">
    <nuxt-link :to="`/media/${medium.id}`">
      <figure>
        <v-lazy-image v-if="pictureExist"
          :sizes="movieMaxPictureSize"
          :srcset="pictureResponsivePath"
          :src="movieMaxPicturePath"
          src-placeholder="/img/card-poster-placeholder.svg"
          alt=""
        />
        <img v-else
             :src="placeholder"
             alt=""
>
        <figcaption>{{ medium.title }}</figcaption>
      </figure>

      <header v-if="cardType !== shared.cardType.poster">
        <p>Released {{ formatDate(medium.release_date) }}</p>
        <h3>{{ medium.original_title }}</h3>
        <h4 v-if="medium.original_title !== medium.title">{{ medium.title }}</h4>
      </header>
    </nuxt-link>
  </article>
</template>

<script>
import shared from '../lib/shared';
import mediumMixin from '../lib/mediumMixin';

export default {
  name: 'Card',

  mixins: [mediumMixin],

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
    movieMaxPicturePath() {
      return this.cardType === shared.cardType.poster ? this.posterMaxPath : this.backdropMaxPath;
    },

    movieMaxPictureSize() {
      const maxSize = this.cardType === shared.cardType.poster ? this.posterSizes[this.posterSizes.length - 1] : this.backdropSizes[this.backdropSizes.length - 1];

      return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
    },

    pictureResponsivePath() {
      const filePath = this.cardType === shared.cardType.poster ? this.medium.poster_path : this.medium.backdrop_path;
      const sizes = this.cardType === shared.cardType.poster ? this.posterSizes : this.backdropSizes;
      // console.log({ sizes });
      return sizes.map(size => `${this.getImagePath(filePath, size)} ${size.replace('w', '')}w`).join(',');
    },

    pictureExist() {
      return this.cardType === shared.cardType.poster ? (this.medium.poster_path !== null) : (this.medium.backdrop_path !== null);
    },

    placeholder() {
      return this.cardType === shared.cardType.poster ? '/img/card-poster-placeholder-broken.svg' : '/img/card-backdrop-placeholder-broken.svg';
    }

  }
};
</script>

