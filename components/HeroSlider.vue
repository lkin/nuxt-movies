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
                <span class="hero__tag">Movies</span>
                <h1>{{ medium.title }}</h1>
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

            <!--<button type="button" class="hero__play-button">-->
              <!--<svg width="142" height="168" viewBox="0 0 142 168" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
                <!--<defs>-->
                  <!--<text id="b" font-family="Ubuntu-Regular, Ubuntu" font-size="21" letter-spacing=".5" fill="#FFF">-->
                    <!--<tspan x="5.689" y="155">Watch Trailer</tspan>-->
                  <!--</text>-->
                  <!--<filter id="a" x="-3.8%" y="-21.2%" width="109.1%" height="150%" filterUnits="objectBoundingBox">-->
                    <!--<feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>-->
                    <!--<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>-->
                    <!--<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/>-->
                  <!--</filter>-->
                  <!--<circle id="d" cx="71" cy="64" r="64"/>-->
                  <!--<filter id="c" x="-6.2%" y="-6.2%" width="114.1%" height="114.1%" filterUnits="objectBoundingBox">-->
                    <!--<feMorphology radius="2.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>-->
                    <!--<feOffset dx="1" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>-->
                    <!--<feMorphology radius="2.5" in="SourceAlpha" result="shadowInner"/>-->
                    <!--<feOffset dx="1" dy="1" in="shadowInner" result="shadowInner"/>-->
                    <!--<feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"/>-->
                    <!--<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>-->
                    <!--<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/>-->
                  <!--</filter>-->
                  <!--<path id="f" d="M78 40l30 48H48z"/>-->
                  <!--<filter id="e" x="-16.7%" y="-21.3%" width="136.7%" height="142.1%" filterUnits="objectBoundingBox">-->
                    <!--<feMorphology radius="2.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>-->
                    <!--<feOffset dx="1" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>-->
                    <!--<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>-->
                    <!--<feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>-->
                    <!--<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/>-->
                  <!--</filter>-->
                <!--</defs>-->
                <!--<g fill="none" fill-rule="evenodd">-->
                  <!--<g fill="#FFF" transform="translate(-1 6)">-->
                    <!--<use filter="url(#a)" xlink:href="#b"/>-->
                    <!--<use xlink:href="#b"/>-->
                  <!--</g>-->
                  <!--<g transform="translate(-1 6)">-->
                    <!--<use fill="#000" filter="url(#c)" xlink:href="#d"/>-->
                    <!--<use stroke="#FFF" stroke-width="5" xlink:href="#d"/>-->
                  <!--</g>-->
                  <!--<g stroke-linecap="round" stroke-linejoin="round" transform="rotate(90 74.5 66.5)">-->
                    <!--<use fill="#000" filter="url(#e)" xlink:href="#f"/>-->
                    <!--<use class="triangle" stroke="#FFF" stroke-width="5" fill-opacity="0" fill="#FFF" xlink:href="#f"/>-->
                  <!--</g>-->
                <!--</g>-->
              <!--</svg>-->
            <!--</button>-->
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

    getAbstract(medium){
      const abstract = medium.tagline || medium.overview;
      return abstract.length > 160 ? (abstract.slice(0,160) + '...') : abstract;
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
