<template>
  <div class="search-suggestions" :class="{'search-suggestions--active': active}">
    <header>
      <h1>Search Results</h1>
      <button type="button" class="search-suggestions__close" @click.prevent="close">
        <svg>
          <use xlink:href="#icon-close"></use>
        </svg>
      </button>
    </header>

    <section v-if="movies.length > 0">
      <h2 class="category">Movies ({{ movies.length }})</h2>
      <ScrollableCardsList :media="movies"></ScrollableCardsList>
    </section>

    <section v-if="series.length > 0">
      <h2 class="category">TV Shows ({{ series.length }})</h2>
      <ScrollableCardsList :media="series"></ScrollableCardsList>
    </section>

    <section v-if="people.length > 0">
      <h2 class="category">People ({{ people.length }})</h2>
      <ul class="medium__cast">
        <li v-for="person in people" :key="person.id">
          <Person :person="personDetails(person)"></Person>
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
      getPeopleDetails: 'getApiPeopleDetails'
    }),

    close: function () {
      this.active = false;
      this.movies = [];
      this.series = [];
      this.people = [];
    },

    search: function () {
      this.searching = true;

      this.getSearchResults(this.keyword).then(data => {
        const results = data.results;

        this.movies = results.filter(result => result.media_type === shared.mediaType.movie);
        this.series = results.filter(result => result.media_type === shared.mediaType.tv);
        this.people = results.filter(result => result.media_type === shared.mediaType.person);
        //
        // this.people = persons.map(person => {
        //   this.getPeopleDetails(person.id).then(personDetails => personDetails);
        // });
      });
    },

    personDetails: function (person) {
      this.getPeopleDetails(person.id).then((personDetails) => {
        return personDetails;
      });

    }
  }

};
</script>
