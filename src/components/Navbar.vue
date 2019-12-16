<template>
  <nav class="navbar">
    <span
      class="mobile-toggle"
      :class="{ 'active-toggle': toggleMenu }"
      v-on:click="onToggle"
    >
      <i
        class="fal"
        :class="{
          'fa-bars': !toggleMenu,
          'fa-times': toggleMenu
        }"
        />
    </span>
    <a href="#app" class="nav-brand" v-smooth-scroll="{ duration: scrollDuration }">
      <img src="../assets/img/logo.svg" alt="Argentinian Asado Night logo">
    </a>
    <ul class="nav-link-list" :class="{'active-menu': toggleMenu}" >
      <li v-on:click="onToggle" class="nav-item">
        <a href="#upcomingEvents" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -100 }">Upcoming events</a>
      </li>
      <li v-on:click="onToggle" class="nav-item">
        <a href="#culture" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -100 }">Culture</a>
      </li>
      <li v-on:click="onToggle" class="nav-item">
        <a href="#join" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -100 }">Join</a>
      </li>
      <li v-on:click="onToggle" class="nav-item">
        <a href="#contact" class="nav-link" v-smooth-scroll="{ duration: scrollDuration, offset: -50 }">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    scrollDuration: Number
  },
  data () {
    return {
      fillNavbar: false,
      toggleMenu: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Here we determine whether we need to fill or hide the navbar
      this.fillNavbar = currentScrollPosition > 10
    },

    onToggle () {
      if (window.innerWidth <= 768) {
        this.toggleMenu = !this.toggleMenu

        if (this.toggleMenu) {
          document.documentElement.style.overflow = 'hidden'
          document.body.scroll = 'no'
        } else {
          document.documentElement.style.overflow = 'scroll'
          document.body.scroll = 'yes'
        }
      }
    }
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 22px 70px 0 70px;
  }

  .nav-link-list {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .mobile-toggle {
    display: none;
    color: #fff;
    cursor: pointer;
  }

  .nav-item {
    margin: 0 50px 0 0;
  }

  .nav-item:last-child {
    margin-right: 0;
  }

  .nav-link {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.08em;
    color: #F0E6DF;
    text-decoration: none;
  }
</style>
