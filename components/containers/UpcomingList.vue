<template>
  <div>
    <slot :media="media"></slot>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UpcomingList',

  computed: {
    ...mapState({
      media: state => state.content.movieUpcoming
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
