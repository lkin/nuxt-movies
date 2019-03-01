<template>
  <main role="main">

    <Upcoming></Upcoming>

    <section>
      <h2>Top Rated</h2>
    </section>

    <MoviesListScrollable title="Top rated" :movies="topRated"></MoviesListScrollable>
  </main>
</template>

<script>
import MoviesList from '../components/MoviesList';
// import LatestMovie from '../components/LatestMovie';
import Upcoming from '../components/Upcoming';
import MoviesListScrollable from '../components/MoviesScrollableList';

export default {
  components: {
    MoviesListScrollable,
    Upcoming
    // LatestMovie,
    // MoviesList,
  },

  computed: {
    topRated() {
      return this.$store.state.content.topRated.results;
    }
  }
};
</script>

