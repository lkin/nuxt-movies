<template>
  <article class="movie-card">
    <nuxt-link :to="`/movies/${movie._slug}`">
      <figure>
        <img :src="backdropPath">
        <figcaption></figcaption>
      </figure>
      <header>
        <h2>{{ movie.original_title }}</h2>
        <!--<p>{{ movie.overview }}</p>-->
        <p>Released {{ formatDate(movie.release_date) }}</p>
      </header>
    </nuxt-link>
  </article>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'MovieCard',

  props: {
    movie: {
      required: true,
      type: Object,
      default: function () {
        return {};
      }
    }
  },

  computed: {
    backdropPath() {
      const filePath = this.movie.backdrop_path;
      const size = "w342";
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;

      return `${baseUrl}${size}/${filePath}`;
    }
  },
  methods: {
    formatDate(date) {
      const d = dayjs(date);
      return d.format('MMM D, YYYY');
    }
  }
};
</script>

