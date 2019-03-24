<template>
  <section class="app-loader">
    <div class="app-loader__strip-top">
      <Card v-for="medium in movies"
            :key="medium.id"
            :medium="medium"
            card-type="backdrop"
      >
      </Card>
    </div>

    <div class="app-loader__strip-bottom">
      <Card v-for="series in tv"
            :key="series.id"
            :medium="series"
            card-type="backdrop"
      >
      </Card>
    </div>
  </section>
</template>

<script>
import Card from './Card';

export default {
  name: 'AppLoader',

  components: { Card },

  computed: {
    movies() {
      return this.$store.state.content.moviesTopRated;
    },
    tv() {
      return this.$store.state.content.tvTopRated;
    },

  }
};
</script>
