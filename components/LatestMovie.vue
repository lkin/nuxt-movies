<template>
  <article class="latest-movie">
    <div v-if="!movie">placeholder</div>
    <figure v-else>
      <img
        sizes="(max-width: 1280px) 100vw, 1280px"
        :srcset="`${backdropPath('w300')} 320w,${backdropPath('w780')} 768w,${backdropPath('w1280')} 1280w`"
        :src="backdropPath('w1280')"
        alt=""
      >

    </figure>
  </article>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LatestMovie',

  data: function () {
    return {
      movie: undefined,
      latestMovie: undefined,
      loading: false
    };
  },

  computed: {
    // latestMovie() {
    //   return this.$store.state.content.latestMovie;
    // },
    // movie() {
    //   if (this.latestMovie) {
    //     this.getMovieDetails(this.latestMovie.id).then(movie => this.movie = movie);
    //   }
    //
    //   return undefined;
    // }
  },

  mounted() {
    this.loading = true;
    const vm = this;

    this.getLatestMovie().then(() => {
      this.latestMovie = this.$store.state.content.latestMovie;
      this.getMovieDetails(this.latestMovie.id).then(movie => vm.movie = movie);
    });
  },

  methods: {
    ...mapActions({
      getLatestMovie: 'getApiLatestMovie',
      getMovieDetails: 'getApiMovieDetails'
    }),

    posterPath() {
      if (!this.movie) {
        return '';
      }

      const filePath = this.movie.poster_path;
      const size = "w342";
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;

      return `${baseUrl}${size}/${filePath}`;
    },

    backdropPath(size) {
      if (!this.movie) {
        return '';
      }

      const filePath = this.movie.backdrop_path;
      // const size = "w342";
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;

      return `${baseUrl}${size}/${filePath}`;
    }

  }
};
</script>
