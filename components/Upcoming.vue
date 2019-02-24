<template>
  <section v-if="loaded" class="upcoming">
    <no-ssr>
      <article v-for="(movie, index) in movies" :key="index" class="movie-hero">
        <figure>
          <img
            sizes="(max-width: 1280px) 100vw, 1280px"
            :srcset="`${backdropPath(movie, 'w300')} 320w,${backdropPath(movie, 'w780')} 768w,${backdropPath(movie, 'w1280')} 1280w`"
            :src="backdropPath(movie, 'w1280')"
            alt=""
          >
          <figcaption>
            <h2>{{ movie.title }}</h2>
            <h3>{{ movie.release_date }}</h3>
            <p>{{ movie.overview }}</p>
          </figcaption>
        </figure>
      </article>
    </no-ssr>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Upcoming',

  data: function () {
    return {
      movies: [],
      loading: false,
      loaded: false
    };
  },


  mounted() {
    this.loading = true;

    this.getUpcomingMovies().then((movies) => {
      this.movies = movies.results;
      this.loading = false;
      this.loaded = true;
    });
  },

  methods: {
    ...mapActions({
      getUpcomingMovies: 'getApiUpcoming'
    }),

    posterPath(movie) {
      if (!movie) {
        return '';
      }

      const filePath = movie.poster_path;
      const size = "w342";
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;

      return `${baseUrl}${size}${filePath}`;
    },

    backdropPath(movie, size) {
      if (!movie) {
        return '';
      }

      const filePath = movie.backdrop_path;
      // const size = "w342";
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;

      return `${baseUrl}${size}${filePath}`;
    }
  }
};
</script>
