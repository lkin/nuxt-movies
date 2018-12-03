<template>
  <div v-editable="blok"
       class="page">
    <component v-for="blok in blok.body"
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
