<template>
  <article class="movie-card">
    <nuxt-link :to="`/movies/${movie._slug}`">
      <figure>
        <img :src="posterPath">
        <figcaption></figcaption>
      </figure>
      <header>
        <h2>{{ movie.original_title }}</h2>
        <!--<p>{{ movie.overview }}</p>-->
        <p>Released {{ movie.release_date }}</p>
      </header>
    </nuxt-link>
  </article>
</template>

<script>
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
    posterPath() {
      const filePath = this.movie.poster_path;
      const size = "w342";
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;

      return `${baseUrl}${size}/${filePath}`;
    }
  }
};
</script>

