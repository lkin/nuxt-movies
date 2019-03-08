<template>
  <main role="main">

    <HeroSlider :movies="upcoming"></HeroSlider>

    <MediaScrollableList title="Top rated" :movies="topRated"></MediaScrollableList>

    <MediaCardsGrid title="Top rated" card-type="backdrop" :movies="topRated"></MediaCardsGrid>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
// import MoviesList from '../components/MoviesList';
// import LatestMovie from '../components/LatestMovie';
import HeroSlider from '../components/HeroSlider';
import MediaScrollableList from '../components/MediaScrollableList';
import shared from '../lib/shared';
import MediaCardsGrid from '../components/MediaCardsGrid';

export default {
  components: {
    MediaCardsGrid,
    MediaScrollableList,
    HeroSlider
  },

  data: function () {
    return {
      topRated: [],
      upcoming: [],
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

    this.getUpcomingMovies().then((movies) => {
      this.upcoming = movies.results;
      this.loading = false;
      this.loaded = true;
    });

  },

  methods: {
    ...mapActions({
      getTopRatedMovies: 'getApiTopRated',
      getUpcomingMovies: 'getApiUpcoming'
    })
  }
};
</script>

