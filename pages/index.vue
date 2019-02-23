<template>
  <main role="main">

    <SiteHeader></SiteHeader>

    <section>
      <h2>Featured</h2>
    </section>
    <MoviesList :movies="featured"></MoviesList>
  </main>
</template>

<script>
import MoviesList from '../components/MoviesList';
import SiteHeader from '../components/SiteHeader';

export default {
  components: {
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

