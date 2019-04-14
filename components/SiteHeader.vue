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

      <h1 class="logo">
        <nuxt-link :to="'/'" exact>
          <svg width="189" height="33" viewBox="0 0 189 33" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <rect id="a" x=".052" width="3.641" height="4.663" rx="1.821"/>
              <filter id="b" x="-164.8%" y="-128.7%" width="429.6%" height="357.4%" filterUnits="objectBoundingBox">
                <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadInner1"/>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"/>
                <feOffset dx="-2" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"/>
              </filter>
              <rect id="c" x="7.681" width="3.641" height="4.663" rx="1.821"/>
              <filter id="d" x="-164.8%" y="-128.7%" width="429.6%" height="357.4%" filterUnits="objectBoundingBox">
                <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadInner1"/>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"/>
                <feOffset dx="-2" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"/>
              </filter>
              <rect id="e" x="15.31" width="3.641" height="4.663" rx="1.821"/>
              <filter id="f" x="-164.8%" y="-128.7%" width="429.6%" height="357.4%" filterUnits="objectBoundingBox">
                <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadInner1"/>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"/>
                <feOffset dx="-2" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"/>
              </filter>
              <rect id="g" x="23.034" width="3.641" height="4.663" rx="1.821"/>
              <filter id="h" x="-164.8%" y="-128.7%" width="429.6%" height="357.4%" filterUnits="objectBoundingBox">
                <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadInner1"/>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"/>
                <feOffset dx="-2" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"/>
              </filter>
              <radialGradient id="i" fx="50%" fy="50%" r="69.599%" gradientTransform="matrix(0 1 -.5606 0 .78 0)">
                <stop offset="0%"/>
                <stop stop-color="#141515" offset="100%"/>
              </radialGradient>
              <rect id="j" x=".052" width="3.641" height="4.663" rx="1.821"/>
              <filter id="k" x="-164.8%" y="-128.7%" width="429.6%" height="357.4%" filterUnits="objectBoundingBox">
                <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadInner1"/>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"/>
                <feOffset dx="-2" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"/>
              </filter>
              <rect id="l" x="7.681" width="3.641" height="4.663" rx="1.821"/>
              <filter id="m" x="-164.8%" y="-128.7%" width="429.6%" height="357.4%" filterUnits="objectBoundingBox">
                <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadInner1"/>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"/>
                <feOffset dx="-2" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"/>
              </filter>
              <rect id="n" x="15.31" width="3.641" height="4.663" rx="1.821"/>
              <filter id="o" x="-164.8%" y="-128.7%" width="429.6%" height="357.4%" filterUnits="objectBoundingBox">
                <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadInner1"/>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"/>
                <feOffset dx="-2" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"/>
              </filter>
              <rect id="p" x="23.034" width="3.641" height="4.663" rx="1.821"/>
              <filter id="q" x="-164.8%" y="-128.7%" width="429.6%" height="357.4%" filterUnits="objectBoundingBox">
                <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadInner1"/>
                <feGaussianBlur stdDeviation="4.5" in="shadowSpreadInner1" result="shadowBlurInner1"/>
                <feOffset dx="-2" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"/>
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g fill-rule="nonzero">
                <path d="M50.114 12.147a13.983 13.983 0 0 0-3.013-1.381c-1.061-.342-1.969-.514-2.723-.514-.72 0-1.29.132-1.71.395-.421.263-.632.65-.632 1.158 0 .649.303 1.144.908 1.486.605.342 1.539.698 2.802 1.066 1.263.368 2.302.737 3.118 1.105a5.53 5.53 0 0 1 2.091 1.658c.58.736.869 1.71.869 2.92 0 1.175-.312 2.188-.934 3.039-.623.85-1.478 1.495-2.566 1.934-1.087.438-2.324.658-3.71.658-1.49 0-2.955-.263-4.393-.79-1.439-.526-2.684-1.245-3.737-2.157l1.658-3.394c.93.842 2 1.517 3.21 2.026 1.21.508 2.315.763 3.315.763.86 0 1.53-.158 2.013-.474.482-.316.723-.772.723-1.368 0-.474-.162-.864-.486-1.17-.325-.308-.737-.558-1.237-.75a23.96 23.96 0 0 0-2.065-.659c-1.263-.35-2.294-.701-3.092-1.052a5.44 5.44 0 0 1-2.065-1.605c-.58-.72-.868-1.675-.868-2.868 0-1.105.298-2.074.894-2.907.596-.833 1.43-1.474 2.5-1.92 1.07-.448 2.315-.672 3.736-.672 1.263 0 2.508.184 3.736.553 1.228.368 2.315.86 3.262 1.473l-1.604 3.447zm4.63-5.13h4.157v7.682h8.34V7.016H71.4v18.418h-4.157v-7.262h-8.34v7.262h-4.158V7.016zm29.284-.29c1.842 0 3.517.412 5.026 1.236a9.25 9.25 0 0 1 3.565 3.408c.868 1.447 1.302 3.056 1.302 4.828 0 1.771-.434 3.385-1.302 4.841a9.316 9.316 0 0 1-3.565 3.434c-1.509.833-3.184 1.25-5.026 1.25-1.842 0-3.517-.417-5.025-1.25a9.347 9.347 0 0 1-3.565-3.42c-.869-1.448-1.303-3.066-1.303-4.855 0-1.772.434-3.381 1.303-4.828a9.275 9.275 0 0 1 3.552-3.408c1.5-.824 3.179-1.236 5.038-1.236zm.053 3.63a5.495 5.495 0 0 0-2.842.777 5.668 5.668 0 0 0-2.078 2.118 5.858 5.858 0 0 0-.763 2.947c0 1.087.258 2.078.776 2.973a5.907 5.907 0 0 0 2.078 2.131c.869.526 1.812.79 2.829.79a5.29 5.29 0 0 0 2.802-.777 5.638 5.638 0 0 0 2.026-2.131c.5-.903.75-1.899.75-2.986 0-1.07-.25-2.052-.75-2.947a5.665 5.665 0 0 0-2.026-2.118 5.29 5.29 0 0 0-2.802-.776zm34.783-3.34h4.289l-6.236 18.417h-4.289l-3.867-13.287-3.92 13.287h-4.263l-6.21-18.418h4.473l4 14.05 3.973-14.05h4.078l4.025 14.05 3.947-14.05z" fill="#E6B91E"/>
                <path d="M123.363 7.016h15.392v3.526h-5.63v14.892h-4.158V10.542h-5.604V7.016zm17.628 0h4.157v18.418h-4.157V7.016zm8.236 0h4.63l5.736 11.314 5.683-11.314h4.605v18.418h-3.736V12.989l-5.236 10.577h-2.684l-5.262-10.577v12.445h-3.736V7.016zm24.732 0h14.024v3.447h-9.867v4h8.867v3.446h-8.867v4.078h10.156v3.447H173.96V7.016z" fill="#FFF"/>
              </g>
              <path fill="#FFF" opacity=".219" d="M0 0h32.012v32.012H0z"/>
              <g fill="#000" opacity=".509">
                <g transform="translate(2.193 1.754)">
                  <use xlink:href="#a"/>
                  <use filter="url(#b)" xlink:href="#a"/>
                </g>
                <g transform="translate(2.193 1.754)">
                  <use xlink:href="#c"/>
                  <use filter="url(#d)" xlink:href="#c"/>
                </g>
                <g transform="translate(2.193 1.754)">
                  <use xlink:href="#e"/>
                  <use filter="url(#f)" xlink:href="#e"/>
                </g>
                <g transform="translate(2.193 1.754)">
                  <use xlink:href="#g"/>
                  <use filter="url(#h)" xlink:href="#g"/>
                </g>
              </g>
              <path fill="url(#i)" opacity=".477" d="M1.754 7.893h28.942v16.225H1.754z"/>
              <g fill="#000" opacity=".509">
                <g transform="translate(2.193 25.434)">
                  <use xlink:href="#j"/>
                  <use filter="url(#k)" xlink:href="#j"/>
                </g>
                <g transform="translate(2.193 25.434)">
                  <use xlink:href="#l"/>
                  <use filter="url(#m)" xlink:href="#l"/>
                </g>
                <g transform="translate(2.193 25.434)">
                  <use xlink:href="#n"/>
                  <use filter="url(#o)" xlink:href="#n"/>
                </g>
                <g transform="translate(2.193 25.434)">
                  <use xlink:href="#p"/>
                  <use filter="url(#q)" xlink:href="#p"/>
                </g>
              </g>
              <path d="M22.649 22.125l.023-.047a1.289 1.289 0 0 0 .114-.768c-.04-.23-.12-.452-.238-.653l-5.498-9.94-.84-1.508-.835 1.508-5.495 9.94a2.05 2.05 0 0 0-.212.653 1.362 1.362 0 0 0 .129.853c.165.292.517.64 1.292.64h10.236c.163 0 .957-.035 1.324-.678zm-6.425-9.895l5.075 9.062H11.151l5.073-9.062z" fill="#E6B91E" fill-rule="nonzero"/>
            </g>
          </svg>
        </nuxt-link>
      </h1>

      <ul class="main-menu__menu">
        <li v-for="(item, index) in menu" :key="index">
          <nuxt-link :to="item.linkURL.substr(1)" active-class="active" exact>{{ item.title }}</nuxt-link>
        </li>
      </ul>

      <form class="main-menu__search" novalidate>
        <label>
          <input v-model="searchKeyword" type="search" @input="searchKeywordChanged">
          <button type="submit" class="button button--icon button-search">
            <span class="button__icon">
              <svg>
                <use xlink:href="#icon-search"></use>
              </svg>
            </span>
          </button>
        </label>
      </form>

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
      mobileMenuPath: this.mobileMenuPathFrom,
      searchKeyword: ''
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

    searchKeywordChanged: function () {
      if (this.searchKeyword.length > 2) {
        this.$emit('search', this.searchKeyword);
      }
    }
  }
};
</script>
