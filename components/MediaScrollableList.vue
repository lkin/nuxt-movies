<template>
  <section class="media-list media-list--scrollable">
    <header>
      <h2>{{ title }}</h2>
      <a href="#">View all</a>
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
  name: 'MediaScrollableList',
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
