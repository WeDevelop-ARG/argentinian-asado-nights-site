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
    background: grey no-repeat center center;
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
  }

  .details {
    text-transform: uppercase;
    text-align: right;
    padding-right: 30px;
    border-right: 2px solid #FFCA7F;
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
    width: 450px;
    margin: 0;
    padding-left: 30px;
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
</style>
