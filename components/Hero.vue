<template>
  <transition name="fade" mode="out-in">

    <article v-if="!medium || medium.id !== undefined"
             class="hero"
    >
      <figure>
        <v-lazy-image v-if="pictureExist"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      :srcset="`${backdropPath(medium, 'w300')} 320w,${backdropPath(medium, 'w780')} 768w,${backdropPath(medium, 'w1280')} 1280w`"
                      :src="backdropPath(medium, 'w1280')"
        />
        <img v-else
             :src="placeholder"
             alt=""
        >
        <figcaption>
          <span class="hero__tag">Movies</span>
          <h1>
            <nuxt-link :to="`/media/${medium.id}`">
              {{ medium.title }}
            </nuxt-link>
          </h1>
          <p class="hero__genres"><span v-for="id in medium.genre_ids" :key="id">{{ getGenre(id) }}</span></p>
          <p class="hero__info-small">{{ formatDate(medium.release_date) }}</p>
          <p class="hero__info-small">Popularity: {{ medium.vote_average * 10 }}%</p>
          <p class="hero__abstract">{{ getAbstract(medium) }}</p>
          <button class="button button--icon">
            Play trailer
            <span class="button__icon" aria-hidden="true">
              <svg>
                <use xlink:href="#icon-film-solid"></use>
              </svg>
            </span>
          </button>
        </figcaption>
      </figure>
    </article>

    <article v-else >
      <FilmStripLoader class="film-strip-loader--hero"></FilmStripLoader>
    </article>
  </transition>
</template>

<script>
import dayjs from 'dayjs';
import FilmStripLoader from './FilmStripLoader';

export default {
  name: 'Hero',

  components: {
    FilmStripLoader
  },

  props: {
    medium: {
      required: true,
      type: Object,
      default: function () {
        return {};
      }
    }
  },

  methods: {
    formatDate(date) {
      const d = dayjs(date);
      return d.format('MMM D, YYYY');
    },

    getAbstract(medium) {
      const abstract = medium.tagline || medium.overview;
      return abstract.length > 160 ? (abstract.slice(0, 160) + '...') : abstract;
    },

    getGenre(id) {
      const genre = this.$store.state.content.movieGenres.find(genre => genre.id === id);

      if (genre) {
        return genre.name;
      }

      return '';
    },

    posterPath(medium) {
      if (!medium) {
        return '';
      }

      const filePath = medium.poster_path;
      const size = "w342";
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;

      return `${baseUrl}${size}${filePath}`;
    },

    backdropPath(medium, size) {
      if (!medium) {
        return '';
      }

      const filePath = medium.backdrop_path;
      // const size = "w342";
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;

      return `${baseUrl}${size}${filePath}`;
    },


    pictureExist() {
      return this.medium.backdrop_path !== null;
    },

    placeholder() {
      return '/img/card-backdrop-placeholder-broken.svg';
    }

  }
};
</script>
