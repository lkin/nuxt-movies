<template>
  <main role="main">

    <SiteHeader></SiteHeader>

    <LatestMovie></LatestMovie>

    <section>
      <h2>Featured</h2>
    </section>
    <MoviesList :movies="featured"></MoviesList>
  </main>
</template>

<script>
import MoviesList from '../components/MoviesList';
import SiteHeader from '../components/SiteHeader';
import LatestMovie from '../components/LatestMovie';

export default {
  components: {
    LatestMovie,
    SiteHeader,
    MoviesList,
  },

  computed: {
    featured() {
      return this.$store.state.content.topRated.results;
    }
  }
};
</script>

