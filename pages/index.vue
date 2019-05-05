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

    <no-ssr>
      <TopRatedList media-type="tv">
        <template v-slot="{media}">
          <CardsGrid title="Top rated" card-type="backdrop" :media="media"></CardsGrid>
        </template>
      </TopRatedList>
    </no-ssr>
  </main>
</template>

<script>
import ScrollableCardsList from '../components/ScrollableCardsList';
import CardsGrid from '../components/CardsGrid';
import Hero from '../components/Hero';
import UpcomingSingle from '../components/containers/UpcomingSingle';
import UpcomingList from '../components/containers/UpcomingList';
import TopRatedList from '../components/containers/TopRatedList';

export default {
  components: {
    TopRatedList,
    UpcomingList,
    UpcomingSingle,
    Hero,
    CardsGrid,
    ScrollableCardsList,
  }
};
</script>

