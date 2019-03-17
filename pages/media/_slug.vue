<template>
  <transition name="fade" mode="out-in">
    <article v-if="medium !== undefined" class="medium-details">
      <header>
        <div class="medium-details__header">
          <h1>{{ medium.original_title }}</h1>
          <h2 v-if="medium.original_title !== medium.title">{{ medium.title }}</h2>
          <p class="medium__genres"><span v-for="genre in medium.genres" :key="genre.id">{{ genre.name }}</span></p>
          <p class="medium__released">{{ formatDate(medium.release_date) }}</p>
        </div>
        <img :sizes="movieMaxPictureSize(shared.cardType.backdrop)"
             :srcset="pictureResponsivePath(shared.cardType.backdrop)"
             :src="movieMaxPicturePath(shared.cardType.backdrop)"
             alt=""
        >

        <aside class="medium-score">
          <CircularScore :score="medium.vote_average * 10"></CircularScore>
          <p v-if="medium.vote_count === undefined">User score</p>
          <p v-else>From {{ medium.vote_count }} users</p>
        </aside>

        <aside v-if="medium.imdb_id !== undefined" class="medium-imdb">
          <a class="button button--icon button--imdb" target="_blank" rel="noopener noreferrer" :href="`https://www.imdb.com/title/${medium.imdb_id}/`">
            View on
            <span class="button__icon" aria-hidden="true">
              <svg width="68" height="34" viewBox="0 0 68 34" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path class="imdb-box" d="M0 0h68v34H0z"/>
                  <path class="imdb-text" fill-rule="nonzero" d="M25.078 15.844c.15-.674.187-1.311.3-1.986.074-.525.112-1.012.187-1.537.075-.487.15-.974.187-1.461.037-.375.075-.75.15-1.124.037-.413.075-.787.15-1.2.074-.374.112-.786.15-1.161.037-.338 0-.338.336-.338h5.729c.187 0 .224.038.224.225V25.7c0 .15-.037.225-.187.225H28.71c-.187 0-.225-.037-.225-.225V15.657h-.037c-.15.787-.262 1.536-.412 2.323-.112.675-.262 1.387-.375 2.061-.112.675-.224 1.387-.337 2.062-.112.6-.224 1.199-.299 1.798-.112.637-.225 1.237-.337 1.874-.037.15-.075.188-.225.188h-2.546c-.075 0-.15 0-.15-.113-.15-.974-.336-1.949-.524-2.923-.187-1.012-.374-1.986-.561-2.998-.187-1.05-.337-2.099-.562-3.148-.075-.375-.112-.75-.225-1.162v10.119c0 .187-.037.262-.224.262H18c-.187 0-.224-.037-.224-.225V7.337c0-.15.037-.225.187-.225h5.28c.112 0 .187 0 .224.15.112.787.262 1.574.412 2.361.15.862.3 1.687.45 2.549.111.712.224 1.386.336 2.098.225.487.337 1.05.412 1.574zm9.81.487V7.262c0-.225.075-.262.262-.262h6.028c.861 0 1.722.037 2.546.375.674.3 1.348.637 1.797 1.274.3.412.45.9.562 1.424.112.637.075 1.237.075 1.874v10.118c0 .9-.3 1.724-1.011 2.324-.487.412-1.086.674-1.685.824a9.693 9.693 0 0 1-2.546.337c-1.947.075-3.857 0-5.804.038-.187 0-.15-.113-.15-.225-.074-2.96-.074-5.996-.074-9.032zm4.418-.15v6.146c0 .15.037.188.187.188.3 0 .562 0 .861-.038.45-.112.786-.337.786-.937V10.748c0-.338-.15-.525-.411-.675-.375-.187-.787-.15-1.199-.187-.187 0-.224.037-.224.224v6.071zm13.74-4.909c.712-.487 1.461-.937 2.285-1.162 1.048-.262 1.947-.037 2.77.638.6.487.899 1.124.899 1.91V23.79c0 1.05-.824 1.724-1.61 1.874-.562.112-1.123.112-1.685.075-.561-.038-1.086-.225-1.61-.413-.412-.15-.861-.3-1.31-.412-.187-.037-.262.038-.337.15-.113.225-.187.45-.225.675-.037.112-.075.15-.187.15h-3.707c-.112 0-.15-.038-.15-.113V7.3c0-.225.038-.263.262-.263h4.269c.262 0 .262 0 .262.3.075 1.274.075 2.586.075 3.935zm.3 6.296v4.91c0 .187.038.337.15.486.15.225.375.3.6.225.261-.075.336-.187.336-.524v-9.706c0-.15 0-.263-.037-.375-.113-.3-.3-.487-.637-.45-.224.038-.412.113-.412.525v4.909zm-42.309-1.124V7.262c0-.187.038-.225.225-.225h4.006c.188 0 .188.038.188.225V25.7c0 .188-.038.225-.225.225h-4.006c-.188 0-.225-.037-.225-.225.037-3.11.037-6.183.037-9.256z"/>
                </g>
              </svg>
            </span>
          </a>
        </aside>
      </header>

      <section class="medium-details__details">
        <aside class="medium__poster">
          <h2>Poster</h2>
          <figure>
            <img :sizes="movieMaxPictureSize(shared.cardType.poster)"
                 :srcset="pictureResponsivePath(shared.cardType.poster)"
                 :src="movieMaxPicturePath(shared.cardType.poster)"
                 alt=""
            >
          </figure>
        </aside>

        <div class="medium__storyline">
          <h2>Storyline</h2>
          <p>{{ medium.overview }}</p>

          <h2>Details</h2>
          <dl>
            <dt v-if="medium.homepage">Official Website</dt>
            <dd v-if="medium.homepage">
              <a :href="medium.homepage" rel="noopener noreferrer">{{ medium.homepage }}</a>
            </dd>
            <dt>Original language</dt>
            <dd>{{ language }}</dd>
            <dt>Runtime</dt>
            <dd>{{ runtime }}</dd>
            <dt>Budget</dt>
            <dd>{{ medium.budget.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</dd>
            <dt>Revenue</dt>
            <dd>{{ medium.revenue.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }}</dd>
          </dl>

        </div>
      </section>

      <section class="medium-details__cast-and-crew">
        <h2>Cast</h2>
        <ul v-if="credits !== undefined" class="medium__cast">
          <li v-for="cast in credits.cast" :key="cast.cast_id">
            <nuxt-link :to="`/people/${cast.cast_id}`">
              <img v-if="cast.profile_path !== null"
                   :sizes="creditsMaxPictureSize()"
                   :srcset="creditsProfileResponsivePath(cast.profile_path)"
                   :src="creditsProfilePicturePath(cast.profile_path)"
                   alt=""
              >
              <svg v-else class="avatar-placeholder">
                <use xlink:href="#icon-avatar"></use>
              </svg>
              <p>{{ cast.character }}</p>
              <p>{{ cast.name }}</p>
            </nuxt-link>
          </li>
        </ul>
      </section>

      <section class="medium__videos">
        <h2>Videos</h2>
        <ScrollableVideoList :videos="medium.videos.results"></ScrollableVideoList>
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
import ScrollableVideoList from '../../components/ScrollableVideoList';
import CircularScore from '../../components/CircularScore';

export default {
  name: 'Details',
  components: { CircularScore, ScrollableVideoList, FilmStripLoader },
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
      credits: undefined,
      loading: false,
      loaded: false,
      shared
    };
  },

  computed: {
    runtime() {
      if (!this.medium) {
        return '';
      }

      const runtime = this.medium.runtime;

      return `${parseInt(runtime / 60, 10)}h ${runtime - (60 * parseInt(runtime / 60, 10))}min`;
    },

    language() {
      if (!this.medium) {
        return '-';
      }

      const lang = this.$store.state.content.languages.find(lang => lang.iso_639_1 === this.medium.original_language);

      if (lang) {
        return lang.english_name;
      }

      return '-';
    }
  },

  mounted() {
    this.loading = true;
    const id = this.$route.params.slug;

    this.getDetails(id).then((medium) => {
      this.medium = medium;
      this.loading = false;
      this.loaded = true;
    });

    this.getCredits(id).then(credits => this.credits = credits);
  },

  methods: {
    ...mapActions({
      getDetails: 'getApiMovieDetails',
      getCredits: 'getApiMovieCredits'
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

      return sizes.map(size => `${this.getImagePath(filePath, size)} ${size.replace('w', '')}w`);
    },


    creditsMaxPictureSize() {
      const maxSize = this.profileSizes[1];
      return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
    },

    creditsProfileResponsivePath(profilePath) {
      const sizes = this.profileSizes;
      return sizes.map(size => `${this.getImagePath(profilePath, size)} ${size.replace('w', '')}w`);
    },

    creditsProfilePicturePath(profilePath) {
      const size = this.profileSizes[1];
      return this.getImagePath(profilePath, size);
    },

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
