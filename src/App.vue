<template>
  <div id="app">
    <Header :scrollDuration="this.scrollDuration" />
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'

import Header from './components/Header.vue'

Vue.use(vueSmoothScroll)

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      scrollDuration: 2000
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

</style>
