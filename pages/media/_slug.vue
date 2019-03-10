<template>
  <transition name="fade" mode="out-in">
    <article v-if="medium !== undefined" class="medium-details">
      <header>
        <div class="medium-details__header">
          <h1>{{ medium.original_title }}</h1>
          <h2 v-if="medium.original_title !== medium.title">{{ medium.title }}</h2>
          <p class="medium__genres"><span v-for="genre in medium.genres" :key="genre.id">{{ genre.name }}</span></p>
          <p class="medium__released">{{ formatDate(medium.release_date) }}</p>

          <!--<p>IMDB</p>-->
          <!--<p>Director</p>-->
          <!--<p>Cast</p>-->
          <!--<p>Votes</p>-->
          <!--<p>Popularity</p>-->
          <!--<p>Tagline</p>-->

          <!--<p>Videos</p>-->
        </div>
        <img :sizes="movieMaxPictureSize(shared.cardType.backdrop)"
             :srcset="pictureResponsivePath"
             :src="movieMaxPicturePath(shared.cardType.backdrop)"
             alt=""
        >
      </header>

      <section>
        <aside class="medium__poster">
          <h2>Poster</h2>
          <figure>
            <img :sizes="movieMaxPictureSize(shared.cardType.poster)"
                 :srcset="pictureResponsivePath"
                 :src="movieMaxPicturePath(shared.cardType.poster)"
                 alt=""
            >
          </figure>
        </aside>

        <div class="medium__storyline">
          <h2>Storyline</h2>
          <p>{{ medium.overview }}</p>
        </div>

      </section>


    </article>

    <section v-else>
      <FilmStripLoader></FilmStripLoader>
    </section>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';
import mediumMixin from '../../lib/mediumMixin';
import FilmStripLoader from '../../components/FilmStripLoader';
import shared from '../../lib/shared';

export default {
  name: 'Details',
  components: { FilmStripLoader },
  mixins: [mediumMixin],

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
      medium: undefined,
      loading: false,
      loaded: false,
      shared
    };
  },

  computed: {},

  mounted() {
    this.loading = true;
    const id = this.$route.params.slug;

    this.getDetails(id).then((medium) => {
      this.medium = medium;
      this.loading = false;
      this.loaded = true;
    });
  },

  methods: {
    ...mapActions({
      getDetails: 'getApiMovieDetails'
    }),

    movieMaxPicturePath(cardType) {
      return cardType === shared.cardType.poster ? this.posterMaxPath : this.backdropMaxPath;
    },

    movieMaxPictureSize(cardType) {
      const maxSize = cardType === shared.cardType.poster ? this.posterSizes[this.posterSizes.length - 1] : this.backdropSizes[this.backdropSizes.length - 1];

      return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
    },

    pictureResponsivePath(cardType) {
      const filePath = cardType === shared.cardType.poster ? this.medium.poster_path : this.medium.backdrop_path;
      const sizes = cardType === shared.cardType.poster ? this.posterSizes : this.backdropSizes;
      // console.log({ sizes });
      return sizes.map(size => `${this.getImagePath(filePath, size)} ${size.replace('w', '')}w`);
    }

    // async validate({ params, query, store }) {
    //   // await operations
    //
    //   // check if there's a movie corresponding to the slug
    //   const movie = store.state.content.movies.find((movie) => {
    //     // console.log(`movie.title: ${movie.title} - replaced: ${movie.title.replace(/\s+/g, '-').replace(/\.+/g, '').toLowerCase()}`);
    //     // console.log(`params.slug: ${params.slug} - replaced: ${params.slug}`);
    //     // return movie.title.replace(/\s+/g, '-').replace(/\.+/g, '').toLowerCase() === params.slug.toLowerCase();
    //
    //     // console.log(`movie._path: ${movie._slug} - params.slug: ${params.slug}`);
    //     return movie._slug === params.slug;
    //   });
    //
    //   if (movie) {
    //     console.log('validate ok!');
    //     // return true // if the params are valid
    //     return true;
    //   }
    //
    //   console.error(`Cannot find a movie with slug: ${params.slug}`);
    //
    //   return false; // will stop Nuxt.js to render the route and display the error page
    // },

  }


};
</script>
