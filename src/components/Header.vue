<template>
  <header class="header">
    <Navbar :scrollDuration="scrollDuration" />
    <h1 class="title">Argentinian Asado Nights</h1>
    <h2 class="subtitle">Roadshow 2020</h2>
    <div class="content">
      <div class="details">
        <h4 class="event-date">Jan 23 2020, 6:30pm-9:30pm</h4>
        <h5 class="event-address">Buenos Aires Cafe</h5>
        <p class="event-address-2">1201 E. 6th St., Austin, TX 78702</p>
      </div>
      <div class="separator"></div>
      <p class="description">Discover our finest tranditional Argenitinian barbacue with an elegant selection of wines, meat, pork and chicken.</p>
    </div>
    <a href="https://docs.google.com/forms/d/1ddCVdhlY4uMtviZtpq9nzqUQF11X9Sh8CZTW_vF3eas/viewform?edit_requested=true" class="action-button" target="_blank">Join the event</a>
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
    background: url(../assets/img/header-background.png) no-repeat center center;
    background-size: 100% 100%;
    color: #F0E6DF;
  }

  .title {
    margin: 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 80px;
    line-height: 116px;
  }

  .subtitle {
    margin: 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 60px;
    line-height: 87px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 65px;
    margin-bottom: 65px;
    width: 100%;
  }

  .details {
    text-transform: uppercase;
    text-align: right;
    padding-right: 30px;
    width: 51.7%;
  }

  .separator {
    width: 2px;
    height: 106px;
    background-color: #FFCA7F;
  }

  .event-date {
    margin: 0;
    font-size: 30px;
    line-height: 41px;
    font-weight: 600;
  }

  .event-address {
    margin: 5px 0;
    font-size: 18px;
    line-height: 25px;
    font-weight: 600;
  }

  .event-address-2 {
    margin: 0;
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
  }

  .description {
    margin: 0;
    padding-left: 30px;
    padding-right: 270px;
    width: 50%;
    font-size: 17px;
    line-height: 23px;
    font-weight: 300;
  }

  .action-button {
    margin-bottom: 67px;
    padding: 26px 57px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.08em;
    color: #F0E6DF;
    background-color: #78ACE6;
    border: none;
    outline: none;
    cursor: pointer;
    align-self: flex-end;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media(min-width: 1920px) {
    .header {
      background-size: cover;
    }
  }

  @media (max-width: 1024px) {
    .header {
      background-size: cover;
    }

    .title {
      font-size: 33px;
      line-height: 48px;
    }

    .subtitle {
      font-size: 27px;
      line-height: 39px;
    }

    .content {
      flex-direction: column;
      margin: 50px 0;
    }

    .details {
      width: 100%;
      text-align: center;
      padding-right: 0;
      padding-bottom: 30px;
    }

    .event-date {
      font-size: 20px;
      line-height: 27px;
    }

    .event-address {
      font-size: 14px;
      line-height: 19px;
    }

    .event-address-2 {
      font-size: 14px;
      line-height: 19px;
    }

    .separator {
      width: 84px;
      height: 2px;
    }

    .description {
      width: 100%;
      padding: 0 33%;
      padding-top: 20px;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
    }

    .action-button {
      align-self: center;
      margin-bottom: 76px;
      padding: 20px 30px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (max-width: 576px) {
    .header {
      background: url(../assets/img/header-mobile-background.png) no-repeat center center;
      background-size: cover;
    }

    .description {
      padding: 20px 14px 0 14px;
    }
  }
</style>
