<template>
  <section class="cards-list cards-list--grid">
    <div class="cards-list__container">
      <article v-for="video in videos" :key="video.id" class="card card--video">
        <lazy-youtube-video :url="getYouTubeUrl(video.key)" :alt="getYouTubePosterUrl(video.key)"></lazy-youtube-video>
      </article>
    </div>
  </section>
</template>

<script>
// import LazyYoutubeVideo from 'vue-lazy-youtube-video';
import LazyYoutubeVideo from './VueLazyYoutubeVideo';

export default {
  name: 'VideoList',

  components: {
    LazyYoutubeVideo
  },

  props: {
    videos: {
      required: true,
      type: Array,
      default: function () {
        return [];
      }
    }
  },

  methods: {
    getYouTubeUrl(key) {
      return this.$store.state.api.url.youtubeTrailer + key;
    },
    getYouTubePosterUrl(key) {
      return this.$store.state.api.url.youtubePoster.replace('YOUTUBEKEY', key);
    },
  }
};
</script>
