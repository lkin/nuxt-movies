<template>
  <article class="card" :class="{'card--poster': cardType === shared.cardType.poster}">
    <nuxt-link :to="`/media/${medium.id}`">
      <figure>
        <img :sizes="movieMaxPictureSize"
             :srcset="pictureResponsivePath"
             :src="movieMaxPicturePath"
             alt=""
        >
        <figcaption>{{ medium.title }}</figcaption>
      </figure>

      <header v-if="cardType !== shared.cardType.poster">
        <p>Released {{ formatDate(medium.release_date) }}</p>
        <h3>{{ medium.original_title }}</h3>
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
      return sizes.map(size => `${this.getImagePath(filePath, size)} ${size.replace('w', '')}w`);
    }

  }
};
</script>

