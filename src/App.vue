<template>
  <div id="app">
    <Header :scrollDuration="this.scrollDuration" />
    <UpcomingEvents />
    <Culture />
    <ContactForm />
    <div class="darker-background">
      <ContactInfo />
      <Footer />
    </div>
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
import Footer from './components/Footer'

Vue.use(vueSmoothScroll)

export default {
  name: 'app',
  components: {
    Header,
    UpcomingEvents,
    Culture,
    ContactForm,
    ContactInfo,
    Footer
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

  html {
    overflow-y: scroll;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #393939;
  }

  .darker-background {
    background-color: #212121;
  }
</style>
