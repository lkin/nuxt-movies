<template>
  <no-ssr>
    <transition name="fade" mode="out-in">
      <Hooper v-if="!loading && loaded" class="upcoming"
              :items-to-show="1"
              :center-mode="false"
              pagination="no"
              :mouse-drag="false"
      >
        <Slide v-for="(movie, index) in movies" :key="index">
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
                <p>{{ movie.overview.length > 160 ? (movie.overview.slice(0,160) + '...') : movie.overview }}</p>
                <button class="button">Play trailer</button>
              </figcaption>
            </figure>
          </article>
        </Slide>

        <HooperNavigation slot="hooper-addons"></HooperNavigation>
      </Hooper>

      <section v-else>
        <FilmStripLoader></FilmStripLoader>
      </section>
    </transition>
  </no-ssr>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import { mapActions } from 'vuex';
import dayjs from 'dayjs';
import FilmStripLoader from './FilmStripLoader';

export default {
  name: 'Upcoming',

  components: {
    FilmStripLoader,
    Hooper,
    Slide,
    HooperNavigation
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
