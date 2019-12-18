<template>
  <div id="app">
    <Header :scrollDuration="this.scrollDuration" />
    <UpcomingEvents />
    <Culture />
    <ContactForm />
    <ContactInfo />
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'

import Header from './components/Header'
import UpcomingEvents from './components/UpcomingEvents'
import Culture from './components/Culture'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

Vue.use(vueSmoothScroll)

export default {
  name: 'app',
  components: {
    Header,
    UpcomingEvents,
    Culture,
    ContactForm,
    ContactInfo
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
