<template>
  <section class="movie-list movie-list--scrollable">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <div class="movie-list__container">
      <MovieCard v-for="(movie, index) in movies" :key="index"
                 :movie="movie"
      >
      </MovieCard>
    </div>
  </section>
</template>

<script>
import MovieCard from './MovieCard';

export default {
  name: 'MoviesListScrollable',
  components: { MovieCard },
  props: {
    title: {
      required: true,
      type: String
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
