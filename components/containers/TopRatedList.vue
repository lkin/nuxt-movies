<template>
  <div>
    <slot :media="media"></slot>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import shared from '../../lib/shared';

export default {
  name: 'TopRatedList',

  props: {
    mediaType: {
      type: String,
      required: false,
      default: shared.mediaType.movie
    }
  },

  computed: {
    ...mapState({
      media(state) {
        return this.mediaType === shared.mediaType.movie ? state.content.movieTopRated : state.content.tvTopRated;
      }
    })
  },

  mounted() {
    this.getTopRatedMovies(this.mediaType);
  },

  methods: {
    ...mapActions({
      getTopRatedMovies: 'getApiTopRated'
    })
  }
};
</script>
