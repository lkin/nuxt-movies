<template>
  <article class="movie-card">
    <nuxt-link :to="`/movies/${movie._slug}`">
      <figure>
        <img :src="movie.Poster">
        <figcaption></figcaption>
      </figure>
      <header>
        <h2>{{ movie.Title }}</h2>
        <p>{{ movie.Plot }}</p>
        <p>Genre: {{ movie.Genre }}</p>
        <p>Released {{ movie.Released }}</p>
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
  }
};
</script>

