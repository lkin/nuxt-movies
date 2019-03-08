<template>
  <section class="movie-list movie-list--scrollable">
    <header>
      <h2>{{ title }}</h2>
      <a href="#">View all</a>
    </header>
    <div class="movie-list__container">
      <MediaCard v-for="(movie, index) in movies" :key="index"
                 :movie="movie"
                 card-type="poster"
                 class="movie-card--poster"
      >
      </MediaCard>
    </div>
  </section>
</template>

<script>
import MediaCard from './MediaCard';

export default {
  name: 'MoviesListScrollable',
  components: { MediaCard },
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
