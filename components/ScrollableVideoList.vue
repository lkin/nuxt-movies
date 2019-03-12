<template>
  <section class="video-list video-list--scrollable">
    <div class="video-list__container">
      <!--<Card v-for="(medium, index) in media" :key="index"-->
      <!--:medium="medium"-->
      <!--:card-type="cardType"-->
      <!--&gt;-->
      <!--</Card>-->
      <div v-for="video in videos" :key="video.id" class="video">
        <div class="iframe-container">
          <iframe :src="getYouTubeUrl(video.key)" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Card from './Card';
import shared from '../lib/shared';

export default {
  name: 'ScrollableVideoList',

  // components: { Card },

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
      return this.$store.state.api.url.youtubeEmbed + key;
    }
  }
};
</script>
