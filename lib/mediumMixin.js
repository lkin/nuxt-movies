import dayjs from 'dayjs';
import shared from '../lib/shared';

export default {
  computed: {
    backdropSizes() {
      return this.$store.state.api.configuration.images.backdrop_sizes.filter(size => size !== 'original');
    },
    posterSizes() {
      return this.$store.state.api.configuration.images.poster_sizes.filter(size => size !== 'original');
    },

    backdropMaxPath() {
      const filePath = this.medium.backdrop_path;
      const size = this.backdropSizes[this.backdropSizes.length - 1];

      return this.getImagePath(filePath, size);
    },

    posterMaxPath() {
      const filePath = this.medium.poster_path;
      const size = this.posterSizes[this.posterSizes.length - 1];

      return this.getImagePath(filePath, size);
    },

  },

  methods: {
    formatDate(date) {
      const d = dayjs(date);
      return d.format('MMM D, YYYY');
    },

    getImagePath(filePath, size) {
      const baseUrl = this.$store.state.api.configuration.images.secure_base_url;
      return `${baseUrl}${size}${filePath}`;
    }
  }

};
