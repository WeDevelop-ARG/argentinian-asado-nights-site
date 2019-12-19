<template>
  <header class="header">
    <Navbar :scrollDuration="scrollDuration" />
    <h1 class="title">Argentinian Asado Nights</h1>
    <h2 class="subtitle">Roadshow 2020</h2>
    <div class="content">
      <div class="details">
        <h4 class="event-date">Jan 16 2020, 6pm - 9pm</h4>
        <h5 class="event-address">Corrientes 348 Argentinian stakehouse</h5>
        <p class="event-address-2">1807 Ross Ave., Dallas, TX</p>
      </div>
      <div class="separator"></div>
      <p class="description">Discover our finest tranditional Argenitinian barbacue with an elegant selection of wines, meat, pork and chicken.</p>
    </div>
    <button class="action-button">Join the event</button>
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
    background-size: cover;
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
  }

  .event-address {
    margin: 5px 0;
    font-size: 18px;
    line-height: 25px;
  }

  .event-address-2 {
    margin: 0;
    font-size: 18px;
    line-height: 25px;
  }

  .description {
    margin: 0;
    padding-left: 30px;
    padding-right: 260px;
    width: 50%;
    font-size: 17px;
    line-height: 23px;
  }

  .action-button {
    margin-bottom: 67px;
    padding: 26px 57px;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.08em;
    color: #F0E6DF;
    background-color: #78ACE6;
    border: none;
    outline: none;
    cursor: pointer;
    align-self: flex-end;
  }

  @media (max-width: 1024px) {
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
</style>
