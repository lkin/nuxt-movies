<template>
  <main role="main">

<!--    <HeroSlider :media="upcoming"></HeroSlider>-->
<!--    <Hero :medium="firstUpcoming"></Hero>-->
    <UpcomingSingle>
      <Hero></Hero>
    </UpcomingSingle>

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
// import HeroSlider from '../components/HeroSlider';
import ScrollableCardsList from '../components/ScrollableCardsList';
import shared from '../lib/shared';
import CardsGrid from '../components/CardsGrid';
import Hero from '../components/Hero';
import UpcomingSingle from '../components/containers/UpcomingSingle';

export default {
  components: {
    UpcomingSingle,
    // Hero,
    CardsGrid,
    ScrollableCardsList,
    // HeroSlider
  },

  data: function () {
    return {
      firstUpcoming: undefined,
      topRated: [],
      upcoming: [],
      loading: false,
      loaded: false
    };
  },

  mounted() {
    this.loading = true;


    this.getUpcomingMovies().then((movies) => {
      this.firstUpcoming = movies.results[0];
      this.upcoming = movies.results.slice(1, movies.results.length);
      this.loading = false;
      this.loaded = true;
    });

    this.getTopRatedMovies(shared.mediaType.movie).then((movies) => {
      this.topRated = movies.results;
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

