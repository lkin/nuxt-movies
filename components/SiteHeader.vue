<template>
  <header id="header" :class="{'header--open': showMobileMenu}">
    <a href="#maincontent">Skip to main content</a>

    <nav id="main-menu" class="main-menu">
      <button class="main-menu__toggle" aria-expanded="false" @click.prevent="toggleMobileMenu">
        <span class="visuallyhidden">Menu</span>
        <svg viewBox="0 0 26 19" xmlns="http://www.w3.org/2000/svg">
          <g fill-rule="nonzero" stroke="#E8E8E8" fill="none" stroke-linecap="round">
            <path class="main-menu__toggle-shape" d="M1 2.5h24M1 9.5h24M1 16.5h24"></path>
          </g>
        </svg>
      </button>

      <h1 class="logo">Nuxtflix
        <svg width="107.62" height="25" viewBox="0 0 423 98" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.225 98L14.182 27.744V98H.421V1h19.182L35.31 59.061V1h13.622v97H33.225zM62.693 1.251h15.29V70.56c0 6.417 3.058 8.728 7.923 8.728s7.923-2.31 7.923-8.728V1.25h14.456v68.41c0 14.376-7.784 22.59-22.796 22.59s-22.796-8.214-22.796-22.59V1.251zM159.02 1h14.178l-15.985 40.314L174.31 84h-16.124l-12.51-32.844L133.027 84H118.71l17.097-42.686L119.822 1h15.846l11.537 30.591L159.02 1zm21.962 10.857V0h47.26v11.857h-15.985V83h-15.29V11.857h-15.985zm72.697.143v25.32h19.738v12h-19.738V84h-15.29V0h40.449v12h-25.159zm36.001 75V0h15.29v74.571h25.159V87H289.68zm50.596 6V0h15.29v93h-15.29zm66.72-92h14.178l-15.985 46.629L422.286 97h-16.124l-12.51-37.989L381.003 97h-14.317l17.097-49.371L367.798 1h15.846l11.537 35.383L406.996 1z" fill="#DB202C" fill-rule="nonzero"></path>
        </svg>
      </h1>

      <ul class="main-menu__menu">
        <li v-for="(item, index) in menu" :key="index">
          <nuxt-link :to="$i18n.path(item.linkURL.substr(1))" active-class="active" exact>{{ $i18n.getLocale(item, 'title') }}</nuxt-link>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',

  data: function () {
    return {
      showMobileMenu: false,
      mobileMenuPathTo: 'M4.661.661L22.34 18.34M4.661 18.339L22.34.66',
      mobileMenuPathFrom: 'M1 2.5h24M1 9.5h24M1 16.5h24',
      mobileMenuPath: this.mobileMenuPathFrom
    };
  },

  computed: {
    menu() {
      return this.$store.state.content.menu;
    },
  },

  methods: {
    /**
     * Toggle the mobile menu
     */
    toggleMobileMenu: function () {
      this.showMobileMenu = !this.showMobileMenu;
      if (process.client) {
        // const tl = new TimelineLite();
        this.$GSAP.TweenLite.to('.main-menu__toggle-shape',
          0.5,
          {
            morphSVG: {
              shape: this.showMobileMenu ? this.mobileMenuPathTo : this.mobileMenuPathFrom,
              // precompile: 'log'
              map: 'complexity'
              //precompile: ['M0.5,8 C9,8 17.5,8 26,8 M0.5,1 C9,1 17.5,1 26,1 M0.5,15 C9,15 17.5,15 26,15 ","M0.734,0.484 C6.74,6.49 12.75,12.5 18.76,18.51 M0.734,18.516 C6.74,12.5 12.75,6.49 18.76,0.48 M18.766,18.516 C18.76,18.51 18.76,18.51 18.76,18.51']
            },
            rotation: 0.01
          });
      }
    },
  }
};
</script>
