<template>
  <div>
    <SiteHeader @search="search"></SiteHeader>
    <SearchSuggestions :keyword="searchKeyword"></SearchSuggestions>
    <nuxt/>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import SearchSuggestions from '../components/SearchSuggestions';

export default {
  components: {
    SearchSuggestions,
    SiteFooter,
    SiteHeader
  },

  data: function () {
    return {
      searchKeyword: ''
    };
  },
  //
  // mounted(){
  //   this.$on('search', this.search);
  // },

  methods: {
    search: function (keyword) {
      this.searchKeyword = keyword;
      console.log(`received ${keyword}`);
    }
  }
};
</script>
