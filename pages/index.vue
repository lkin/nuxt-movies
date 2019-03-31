<template>
  <main role="main">

    <HeroSlider :media="upcoming"></HeroSlider>

    <section class="list-filters">
      <h2 class="category">Movies</h2>

      <nav>
        <select>
          <option>Upcoming</option>
          <option>In Theaters</option>
          <option>Popular</option>
          <option>Top rated</option>
        </select>
        <button type="button" aria-expanded="true">Upcoming</button>
        <button type="button">In Theaters</button>
        <button type="button">Popular</button>
        <button type="button">Top rated</button>
      </nav>
    </section>

    <ScrollableCardsList :media="topRated"></ScrollableCardsList>


    <section class="list-filters">
      <h2 class="category">TV Shows</h2>

      <nav>
        <button type="button" aria-expanded="true">Today</button>
        <button type="button">On the air</button>
        <button type="button">Latest</button>
        <button type="button">Top rated</button>
        <button type="button">Popular</button>
      </nav>
    </section>

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

