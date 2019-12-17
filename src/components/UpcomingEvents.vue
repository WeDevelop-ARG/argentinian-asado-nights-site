<template>
  <div class="upcoming-events">
    <h3 class="title">Upcoming events</h3>
    <div class="title-underline"></div>
    <div class="events">
      <Event v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
      <img src="../assets/img/barbecue.svg" alt="">
    </div>
  </div>
</template>

<script>
import Event from './Event.vue'

export default {
  name: 'UpcomingEvents',
  components: {
    Event
  },
  data: function () {
    return {
      events: [
        {
          id: 1,
          date: 'React',
          address: 'Corrientes 348 Argentinian Steakhouse',
          adress2: '1807 Ross Ave., Ste. 200 Dallas, TX 75201'
        },
        {
          id: 2,
          date: 'January 16 , 6pm',
          address: 'Buenos Aires Café',
          adress2: '1201 E. 6th St., Austin, TX 78702'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .upcoming-events {
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
    font-size: 55px;
    line-height: 80px;
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
