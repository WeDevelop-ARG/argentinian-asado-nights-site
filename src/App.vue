<template>
  <div id="app">
    <Header :scrollDuration="this.scrollDuration" />
    <UpcomingEvents />
    <Culture />
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'

import Header from './components/Header'
import UpcomingEvents from './components/UpcomingEvents'
import Culture from './components/Culture'

Vue.use(vueSmoothScroll)

export default {
  name: 'app',
  components: {
    Header,
    UpcomingEvents,
    Culture
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
    background-color: #393939;
  }

</style>
