<template>
  <nuxt-link :to="`/people/${person.id}`">
    <img v-if="person.profile_path !== null"
         :sizes="personMaxPictureSize()"
         :srcset="personProfileResponsivePath(person.profile_path)"
         :src="personProfilePicturePath(person.profile_path)"
         alt=""
    >
    <svg v-else class="avatar-placeholder">
      <use xlink:href="#icon-avatar"></use>
    </svg>
    <p>{{ person.character }}</p>
    <p>{{ person.name }}</p>
  </nuxt-link>

</template>

<script>
import mediumMixin from '../lib/mediumMixin';

export default {
  name: 'Person',

  mixins: [mediumMixin],

  props: {
    person: {
      required: true,
      type: Object,
      default: function () {
        return {};
      }
    },
  },

  methods: {
    personMaxPictureSize() {
      const maxSize = this.profileSizes[1];
      return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
    },

    personProfileResponsivePath(profilePath) {
      const sizes = this.profileSizes;
      return sizes.map(size => `${this.getImagePath(profilePath, size)} ${size.replace('w', '')}w`);
    },

    personProfilePicturePath(profilePath) {
      const size = this.profileSizes[1];
      return this.getImagePath(profilePath, size);
    },

  }

};
</script>
