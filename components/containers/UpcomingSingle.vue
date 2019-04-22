<template>
  <section class="full-width">
    <slot :medium="medium"></slot>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

/**
 * UpcomingSingle
 * Container for a single medium
 */
export default {
  name: 'UpcomingSingle',

  computed: {
    ...mapState({
      medium: state => state.content.movieUpcoming.length > 0 ? state.content.movieUpcoming[0] : undefined
    })
  },

  mounted() {
    this.getUpcomingMovies();
  },

  methods: {
    ...mapActions({
      getUpcomingMovies: 'getApiUpcoming'
    })
  }
};
</script>
