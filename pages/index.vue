<template>
  <main role="main">

    <FilmStripLoader></FilmStripLoader>
    <Upcoming></Upcoming>

    <MoviesListScrollable title="Top rated" :movies="topRated"></MoviesListScrollable>
  </main>
</template>

<script>
import MoviesList from '../components/MoviesList';
// import LatestMovie from '../components/LatestMovie';
import Upcoming from '../components/Upcoming';
import MoviesListScrollable from '../components/MoviesScrollableList';
import FilmStripLoader from '../components/FilmStripLoader';

export default {
  components: {
    FilmStripLoader,
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

