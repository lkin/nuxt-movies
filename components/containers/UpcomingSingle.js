import Hero from '@/components/Hero';
import { mapActions } from 'vuex';

export default {
  name: 'UpcomingSingle',

  data: function () {
    return {
      firstUpcoming: undefined
    };
  },

  mounted() {
    // this.loading = true;

    this.getUpcomingMovies().then((movies) => {
      this.firstUpcoming = movies.results[0];
      // this.upcoming = movies.results.slice(1, movies.results.length);
      // this.loading = false;
      // this.loaded = true;
    });
  },

  render: function (h) {
    return (
      <Hero medium={ this.firstUpcoming }></Hero>
    );
  },

  methods: {
    ...mapActions({
      getUpcomingMovies: 'getApiUpcoming'
    })
  }

};
