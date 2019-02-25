<template>
  <section v-if="loaded" class="upcoming">
    <no-ssr>
      <Hooper :itemsToShow="1" :centerMode="false" pagination="no">
        <Slide v-for="(movie, index) in movies" :key="index" >
          <article class="movie-hero">
            <figure>
              <img
                sizes="(max-width: 1280px) 100vw, 1280px"
                :srcset="`${backdropPath(movie, 'w300')} 320w,${backdropPath(movie, 'w780')} 768w,${backdropPath(movie, 'w1280')} 1280w`"
                :src="backdropPath(movie, 'w1280')"
                alt=""
              >
              <figcaption>
                <h2>{{ movie.title }}</h2>
                <h3>{{ formatDate(movie.release_date) }}</h3>
                <p>{{ movie.overview.length > 80 ? (movie.overview.slice(0,80) + '...') : movie.overview }}</p>
              </figcaption>
            </figure>
          </article>
        </Slide>
      </Hooper>
    </no-ssr>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import { mapActions } from 'vuex';
import dayjs from 'dayjs';

export default {
  name: 'Upcoming',

  components: {
    Hooper,
    Slide
  },

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

    formatDate(date) {
      const d = dayjs(date);
      return d.format('MMM D, YYYY');
    },

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
