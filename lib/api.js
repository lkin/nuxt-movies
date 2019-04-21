import Vue from 'vue';
import { mapActions } from 'vuex';

const store = Vue.$store;

export const api = {
  movie: {
    ...mapActions({
      _getUpcomingMovies: 'getApiUpcoming'
    }),

    getUpcoming: () => {
      console.log({ store });

      return this._getUpcomingMovies().then((movies) => {
        store.state.content.movieUpcoming = movies.results;
      });
    }
  }
};
