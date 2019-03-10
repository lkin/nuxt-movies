<template>
  <main role="main">

    <HeroSlider :media="upcoming"></HeroSlider>

    <section class="tabbed-scrollable-list">
      <p class="category">Movies</p>

      <nav>
        <button type="button">Opening</button>
        <button type="button">In Theaters</button>
        <button type="button">Coming soon</button>
      </nav>
    </section>

    <ScrollableCardsList title="Top rated" :media="topRated"></ScrollableCardsList>

    <CardsGrid title="Top rated" card-type="backdrop" :media="topRated"></CardsGrid>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
// import MoviesList from '../components/MoviesList';
// import LatestMovie from '../components/LatestMovie';
import HeroSlider from '../components/HeroSlider';
import ScrollableCardsList from '../components/ScrollableCardsList';
import shared from '../lib/shared';
import CardsGrid from '../components/CardsGrid';

export default {
  components: {
    CardsGrid,
    ScrollableCardsList,
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

