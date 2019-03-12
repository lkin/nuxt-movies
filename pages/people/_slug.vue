<template>
  <transition name="fade" mode="out-in">
  </transition>
</template>

<script>
import { mapActions } from 'vuex';
import FilmStripLoader from '../../components/FilmStripLoader';
import shared from '../../lib/shared';

export default {
  name: 'Details',
  components: { FilmStripLoader },

  // head() {
  //   return {
  //     title: this.$i18n.getLocale(this.movie, 'title'),
  //     link: [
  //       { hid: 'canonical', rel: 'canonical', href: `${this.$store.state.hostname}${this.movie._path}` }
  //     ]
  //   };
  // },

  data: function () {
    return {
      person: undefined,
      loading: false,
      loaded: false,
      shared
    };
  },

  computed: {},

  mounted() {
    this.loading = true;
    const id = this.$route.params.slug;

    // this.getDetails(id).then((medium) => {
    //   this.medium = medium;
    //   this.loading = false;
    //   this.loaded = true;
    // });

  },

  methods: {
    ...mapActions({
      // getDetails: 'getApiMovieDetails',
      // getCredits: 'getApiMovieCredits'
    }),




    creditsMaxPictureSize() {
      const maxSize = this.profileSizes[this.profileSizes.length - 1];
      return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
    },

    creditsProfileResponsivePath(profilePath){
      const sizes = this.profileSizes;
      // console.log({ sizes });
      return sizes.map(size => `${this.getImagePath(profilePath, size)} ${size.replace('w', '')}w`);
    },

    creditsProfilePicturePath(profilePath) {
      const size = this.profileSizes[1];
      return this.getImagePath(profilePath, size);
    },
  }
};
</script>
