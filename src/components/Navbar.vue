<template>
  <nav class="navbar" id="navbar">
    <a href="#navbar" class="nav-brand" v-smooth-scroll="{ duration: scrollDuration }">
      <img src="../assets/img/logo.svg" class="nav-logo" alt="Argentinian Asado Night logo">
    </a>
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
    <ul class="nav-link-list" :class="{'active-menu': toggleMenu}" >
      <span class="separator upper-separator"></span>
      <li v-on:click="onToggle" class="nav-item first-nav-item">
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
      <span class="separator bottom-separator"></span>
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
    onToggle () {
      if (window.innerWidth <= 576) {
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
    margin-bottom: 90px;
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
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.08em;
    color: #F0E6DF;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    .nav-logo {
      width: 90px;
    }

    .nav-link {
      font-size: 13px;
      line-height: 18px;
    }
  }

  @media (max-width: 576px) {
    .mobile-toggle {
      display: inline-block;
      font-size: 35px;
      z-index: 3;
    }

    .nav-link-list {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: url('../assets/img/menu-mobile-background.png') no-repeat center center;
      background-size: cover;
    }

    .active-menu {
      display: flex;
      flex-direction: column;
      z-index: 2;
      padding-top: 135px;
    }

    .separator {
      width: 84px;
      height: 2px;
      background-color: #FFCA7F;
    }

    .upper-separator {
      margin-bottom: 70px;
    }

    .bottom-separator {
      margin-top: 70px;
    }

    .nav-item {
      margin-top: 45px;
      margin-right: 0;
    }

    .first-nav-item {
      margin-top: 0;
    }

    .navbar {
      align-items: center;
      padding: 20px 16px 0 15px;
      margin-bottom: 75px;
    }

    .nav-brand {
      z-index: 3;
    }

    .nav-logo {
      width: 70px;
    }
  }
</style>
