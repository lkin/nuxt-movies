<template>
  <div>
    <slot :medium="medium"></slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UpcomingSingle',

  data: function () {
    return {
      medium: undefined
    };
  },

  mounted() {
    // this.loading = true;

    this.getUpcomingMovies().then((movies) => {
      this.medium = movies.results[0];
      // this.upcoming = movies.results.slice(1, movies.results.length);
      // this.loading = false;
      // this.loaded = true;
    });
  },

  methods: {
    ...mapActions({
      getUpcomingMovies: 'getApiUpcoming'
    })
  }
};
</script>
