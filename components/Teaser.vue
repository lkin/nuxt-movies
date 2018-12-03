<template>
  <div v-editable="blok">
    {{ blok.headline }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['blok']
}
</script>
