<template>
  <main role="main">

    <Upcoming></Upcoming>

    <section>
      <h2>Top Rated</h2>
    </section>

    <MoviesList :movies="topRated"></MoviesList>
  </main>
</template>

<script>
import MoviesList from '../components/MoviesList';
// import LatestMovie from '../components/LatestMovie';
import Upcoming from '../components/Upcoming';

export default {
  components: {
    Upcoming,
    // LatestMovie,
    MoviesList,
  },

  computed: {
    topRated() {
      return this.$store.state.content.topRated.results;
    }
  }
};
</script>

