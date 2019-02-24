<template>
  <main role="main">

    <LatestMovie></LatestMovie>

    <section>
      <h2>Featured</h2>
    </section>
    <MoviesList :movies="featured"></MoviesList>
  </main>
</template>

<script>
import MoviesList from '../components/MoviesList';
import LatestMovie from '../components/LatestMovie';

export default {
  components: {
    LatestMovie,
    MoviesList,
  },

  computed: {
    featured() {
      return this.$store.state.content.topRated.results;
    }
  }
};
</script>

