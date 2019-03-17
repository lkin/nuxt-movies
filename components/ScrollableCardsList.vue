<template>
  <section class="cards-list cards-list--scrollable">
    <!--<header>-->
      <!--<h2>{{ title }}</h2>-->
      <!--<a href="#">View all</a>-->
    <!--</header>-->
    <div class="cards-list__container">
      <Card v-for="(medium, index) in media" :key="index"
                 :medium="medium"
                 :card-type="cardType"
      >
      </Card>
    </div>
  </section>
</template>

<script>
import Card from './Card';
import shared from '../lib/shared';

export default {
  name: 'ScrollableCardsList',

  components: { Card },

  props: {
    cardType: {
      type: String,
      required: false,
      default: shared.cardType.poster
    },

    media: {
      required: true,
      type: Array,
      default: function () {
        return [];
      }
    }
  }
};
</script>
