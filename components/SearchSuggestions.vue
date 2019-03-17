<template>
  <div class="search-suggestions" :class="{'search-suggestions--active': active}">
    <header>
      <h1>Search Results</h1>
    </header>

    <section v-if="movies.length > 0">
      <h2 class="category">Movies</h2>
      <ScrollableCardsList :media="movies"></ScrollableCardsList>
    </section>

    <section v-if="series.length > 0">
      <h2 class="category">TV Shows</h2>
      <ScrollableCardsList :media="series"></ScrollableCardsList>
    </section>

    <section v-if="people.length > 0">
      <h2 class="category">People</h2>
      <ul class="medium__cast">
        <li v-for="person in people" :key="person.id">
          <Person :person="person"></Person>
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import shared from '../lib/shared';
import ScrollableCardsList from './ScrollableCardsList';
import Person from './Person';

export default {
  name: 'SearchSuggestions',
  components: { Person, ScrollableCardsList },
  props: {
    keyword: {
      required: false,
      type: String,
      default: ''
    }
  },

  data: function () {
    return {
      active: false,
      movies: [],
      series: [],
      people: [],
      suggestions: [],
      searching: false
    };
  },

  watch: {
    // whenever question changes, this function will run
    keyword: function (newVal, oldVal) {
      if (newVal && newVal.length > 2)
        this.active = true;
      this.search();
    }
  },

  methods: {
    ...mapActions({
      getSearchResults: 'getApiMultiSearch',
      getCredits: 'getApiMovieCredits'
    }),

    search: function () {
      this.getSearchResults(this.keyword).then(data => {
        const results = data.results;

        this.movies = results.filter(result => result.media_type === shared.mediaType.movie);
        this.series = results.filter(result => result.media_type === shared.mediaType.tv);
        this.people = results.filter(result => result.media_type === shared.mediaType.person);
      });
    }
  }

};
</script>
