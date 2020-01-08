<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue-smooth-scroll'
import Vuelidate from 'vuelidate'

Vue.use(vueSmoothScroll)
Vue.use(Vuelidate)

export default {
  name: 'app'
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
</style>
