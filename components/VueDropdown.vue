<template>
  <button class="btn-group" :aria-expanded="showMenu">
    <li v-if="selectedOption.name !== undefined" class="dropdown-toggle" @click="toggleMenu()">
      {{ selectedOption.name }}
      <span class="caret"></span>
    </li>

    <li v-if="selectedOption.name === undefined" class="dropdown-toggle" @click="toggleMenu()">
      {{ placeholderText }}
      <span class="caret"></span>
    </li>

    <ul v-if="showMenu" class="dropdown-menu">
      <li v-for="option in options">
        <a href="javascript:void(0)" @click="updateOption(option)">
          {{ option.name }}
        </a>
      </li>
    </ul>
  </button>
</template>

<script>
export default {
  name: 'VueDropdown',

  props: {
    options: {
      required: true,
      type: Array,
      default: function () {
        return [];
      }
    },
    selected: {
      required: true,
      type: Object,
      default: function () {
        return {};
      }
    },

    placeholder: {
      required: false,
      type: String,
      default: ''
    }
  },

  data() {
    return {
      selectedOption: {
        name: '',
      },
      showMenu: false,
      placeholderText: 'Please select an item',
    };
  },

  mounted() {
    this.selectedOption = this.selected;

    if (this.placeholder !== '')
    {
      this.placeholderText = this.placeholder;
    }
  },

  methods: {
    updateOption(option) {
      this.selectedOption = option;
      this.showMenu = false;
      this.$emit('updateOption', this.selectedOption);
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
