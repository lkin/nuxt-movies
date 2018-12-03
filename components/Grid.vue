<template>
  <div v-editable="blok"
       class="util__flex">
    <component v-for="blok in blok.columns"
               :key="blok._uid"
               :blok="blok"
               :is="blok.component"/>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['blok']
}
</script>
