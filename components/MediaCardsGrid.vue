<template>
  <section class="media-list media-list--grid">
    <header v-if="title">
      <h2>{{ title }}</h2>
    </header>
    <div class="media-list__container">
      <MediaCard v-for="(movie, index) in movies" :key="index"
                 :movie="movie"
                 :card-type="cardType"
      >
      </MediaCard>
    </div>
  </section>
</template>

<script>
import MediaCard from './MediaCard';
import shared from '../lib/shared';

export default {
  name: 'MediaCardsGrid',

  components: { MediaCard },

  props: {
    title: {
      required: true,
      type: String
    },

    cardType: {
      type: String,
      required: false,
      default: shared.cardType.poster
    },


    movies: {
      required: true,
      type: Array,
      default: function () {
        return [];
      }
    }
  }
};
</script>
