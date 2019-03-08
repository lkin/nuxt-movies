<template>
  <main role="main">

    <Upcoming></Upcoming>

    <MediaScrollableList title="Top rated" :movies="topRated"></MediaScrollableList>

    <MediaCardsGrid title="Top rated" card-type="backdrop" :movies="topRated"></MediaCardsGrid>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
// import MoviesList from '../components/MoviesList';
// import LatestMovie from '../components/LatestMovie';
import Upcoming from '../components/Upcoming';
import MediaScrollableList from '../components/MediaScrollableList';
import shared from '../lib/shared';
import MediaCardsGrid from '../components/MediaCardsGrid';

export default {
  components: {
    MediaCardsGrid,
    MediaScrollableList,
    Upcoming
  },

  data: function () {
    return {
      topRated: [],
      loading: false,
      loaded: false
    };
  },

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

