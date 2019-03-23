<template>
  <section class="cards-list cards-list--grid">
    <!--<header v-if="title">-->
      <!--<h2>{{ title }}</h2>-->
    <!--</header>-->
    <div class="cards-list__container">
      <Card v-for="(medium, index) in media" :key="index"
                 :medium="medium"
                 :card-type="cardType"
                 :class="'card--alternate-width'"
      >
      </Card>
    </div>
  </section>
</template>

<script>
import Card from './Card';
import shared from '../lib/shared';

export default {
  name: 'CardsGrid',

  components: { Card },

  props: {
    title: {
      required: true,
      type: String
    },

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
