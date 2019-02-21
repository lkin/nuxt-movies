<template>
  <main role="main">

    <section class="container">
      <div>
        <logo/>
        <h1 class="title">
          nuxt-start
        </h1>
        <h2 class="subtitle">
          My polished Nuxt.js project
        </h2>


      </div>
    </section>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
};
</script>

