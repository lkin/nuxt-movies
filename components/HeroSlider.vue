<template>
  <no-ssr>
    <transition name="fade" mode="out-in">
      <Hooper v-if="media.length > 0" class="upcoming"
              :items-to-show="1"
              :center-mode="false"
              pagination="no"
              :mouse-drag="false"
      >
        <Slide v-for="(medium, index) in media" :key="index">
          <article class="hero">
            <figure>
              <img
                sizes="(max-width: 1280px) 100vw, 1280px"
                :srcset="`${backdropPath(medium, 'w300')} 320w,${backdropPath(medium, 'w780')} 768w,${backdropPath(medium, 'w1280')} 1280w`"
                :src="backdropPath(medium, 'w1280')"
                alt=""
              >
              <figcaption>
                <h1>{{ medium.title }}</h1>
                <p class="hero__genres"><span v-for="id in medium.genre_ids" :key="id">{{ getGenre(id) }}</span></p>
                <p class="hero__info-small">{{ formatDate(medium.release_date) }}</p>
                <p class="hero__info-small">Popularity: {{ medium.vote_average * 10}}%</p>
                <p>{{ medium.overview.length > 160 ? (medium.overview.slice(0,160) + '...') : medium.overview }}</p>
                <button class="button">
                  <svg>
                    <use xlink:href="#icon-film-solid"></use>
                  </svg>
                  Play trailer
                </button>
              </figcaption>
            </figure>
          </article>
        </Slide>

        <HooperNavigation slot="hooper-addons"></HooperNavigation>
      </Hooper>

      <section v-else>
        <FilmStripLoader></FilmStripLoader>
      </section>
    </transition>
  </no-ssr>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import dayjs from 'dayjs';
import FilmStripLoader from './FilmStripLoader';

export default {
  name: 'HeroSlider',

  components: {
    FilmStripLoader,
    Hooper,
    Slide,
    HooperNavigation
  },

  props: {
    media: {
      required: true,
      type: Array,
      default: function () {
        return [];
      }
    }
  },

  data: function () {
    return {
      loading: false,
      loaded: false
    };
  },

  methods: {
    formatDate(date) {
      const d = dayjs(date);
      return d.format('MMM D, YYYY');
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
    }
  }
};
</script>
