<script>
import Hero from '@/components/Hero';
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
  },

  render: function (h) {
    return (
      <Hero medium={ this.medium }></Hero>
    );
  }
  // render() {
  //   return this.$scopedSlots.default({
  //     medium: this.medium
  //   });
  // }
};
</script>
