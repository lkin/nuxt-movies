<template>
  <article class="movie-card">
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
    <section>
      <nuxt-link :to="/movies/"></nuxt-link>
    </section>
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

