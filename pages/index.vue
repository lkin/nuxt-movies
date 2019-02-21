<template>
  <main role="main">

    <header>
      <nav>
        <h1 class="logo">Nuxtflix</h1>
      </nav>
    </header>

    <h2>Featured</h2>
    <MoviesList :movies="featured"></MoviesList>
  </main>
</template>

<script>
import MoviesList from '../components/MoviesList';

export default {
  components: {
    MoviesList,
  },

  computed: {
    featured() {
      return this.$store.state.content.featured;
    }
  }
};
</script>

