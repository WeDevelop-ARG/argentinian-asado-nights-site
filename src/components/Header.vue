<template>
  <header class="header">
    <Navbar :scrollDuration="scrollDuration" />
  </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Header',
  components: {
    Navbar
  },
  props: {
    scrollDuration: Number
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: grey no-repeat center center;
    background-size: cover;
  }
</style>
