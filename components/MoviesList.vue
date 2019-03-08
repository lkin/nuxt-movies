<template>
  <section class="movie-list">
    <MovieCard v-for="(movie, index) in movies" :key="index"
               :movie="movie"
    >
    </MovieCard>
  </section>
</template>

<script>
import MovieCard from './MediaCard';

export default {
  name: 'MoviesList',
  components: { MovieCard },
  props: {
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
