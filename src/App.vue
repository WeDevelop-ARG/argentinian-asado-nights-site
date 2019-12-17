<template>
  <div id="app">
    <Header :scrollDuration="this.scrollDuration" />
    <UpcomingEvents />
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'

import Header from './components/Header.vue'
import UpcomingEvents from './components/UpcomingEvents.vue'

Vue.use(vueSmoothScroll)

export default {
  name: 'app',
  components: {
    Header,
    UpcomingEvents
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
