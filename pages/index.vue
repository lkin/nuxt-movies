<template>
  <main role="main">

    <Upcoming></Upcoming>

    <MoviesListScrollable title="Top rated" :movies="topRated"></MoviesListScrollable>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
// import MoviesList from '../components/MoviesList';
// import LatestMovie from '../components/LatestMovie';
import Upcoming from '../components/Upcoming';
import MoviesListScrollable from '../components/MoviesScrollableList';
import shared from '../lib/shared';

export default {
  components: {
    MoviesListScrollable,
    Upcoming
  },

  data: function () {
    return {
      topRated: [],
      loading: false,
      loaded: false
    };
  },

  // computed: {
  //   topRated() {
  //     return this.$store.state.content.topRated.results;
  //   }
  // }

  mounted() {
    this.loading = true;

    this.getTopRatedMovies(shared.mediaType.movie).then((movies) => {
      this.topRated = movies.results;
      this.loading = false;
      this.loaded = true;
    });
  },

  methods: {
    ...mapActions({
      getTopRatedMovies: 'getApiTopRated'
    })
  }
};
</script>

