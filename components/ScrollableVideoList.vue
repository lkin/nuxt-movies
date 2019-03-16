<template>
  <section class="cards-list cards-list--grid">
    <div class="cards-list__container">
      <!--<Card v-for="(medium, index) in media" :key="index"-->
      <!--:medium="medium"-->
      <!--:card-type="cardType"-->
      <!--&gt;-->
      <!--</Card>-->
      <article v-for="video in videos" :key="video.id" class="card card--movie">
        <div class="iframe-container">
          <iframe :src="getYouTubeUrl(video.key)" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </article>
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
