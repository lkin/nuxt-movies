<template>
  <main role="main">

    <UpcomingSingle>
      <template v-slot="{medium}">
        <hero :medium="medium"></hero>
      </template>
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

    <!--    <ScrollableCardsList :media="topRated"></ScrollableCardsList>-->
    <UpcomingList>
      <template v-slot="{media}">
        <ScrollableCardsList :media="media"></ScrollableCardsList>
      </template>
    </UpcomingList>


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
import ScrollableCardsList from '../components/ScrollableCardsList';
import shared from '../lib/shared';
import CardsGrid from '../components/CardsGrid';
import Hero from '../components/Hero';
import UpcomingSingle from '../components/containers/UpcomingSingle';
import UpcomingList from '../components/containers/UpcomingList';

export default {
  components: {
    UpcomingList,
    UpcomingSingle,
    Hero,
    CardsGrid,
    ScrollableCardsList,
  },

  data: function () {
    return {
      firstUpcoming: undefined,
      topRated: [],
      movieUpcoming: [],
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
      getTopRatedMovies: 'getApiTopRated',
    })
  }
};
</script>

