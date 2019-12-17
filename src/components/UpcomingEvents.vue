<template>
  <div class="upcoming-events">
    <div class="line first-line"></div>
    <div class="content">
      <div class="title-section">
        <h3 class="title">Upcoming events</h3>
        <div class="title-underline"></div>
      </div>
      <div class="line second-line"></div>
      <ul class="events">
        <Event v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
      </ul>
    </div>
    <img src="../assets/img/barbecue.svg" class="image" alt="">
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
          date: 'January 16 , 6pm',
          address: 'Corrientes 348 Argentinian Steakhouse',
          address2: '1807 Ross Ave., Ste. 200 Dallas, TX 75201'
        },
        {
          id: 2,
          date: 'January 23, 6.30pm',
          address: 'Buenos Aires Café',
          address2: '1201 E. 6th St., Austin, TX 78702'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .upcoming-events {
    display: flex;
    justify-content: space-between;
    background-color: #393939;
    color: #F0E6DF;
    padding-top: 110px;
    padding-bottom: 90px;
    position: relative;
  }

  .line {
    position: absolute;
    left: 25.68%;
    border: 1px solid rgba(211, 213, 216, 0.24);
    z-index: 2;
  }

  .first-line {
    height: 104px;
    top: 0;
  }

  .second-line {
    height: 522px;
    top: 207px;
  }

  .title-section {
    position: relative;
  }

  .title {
    margin: 0;
    padding-left: 35px;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 55px;
    line-height: 80px;
    z-index: 2;
    position: relative;
  }

  .title-underline {
    width: 353px;
    height: 8px;
    background: #78ACE6;
    transform: rotate(-1.58deg);
    position: absolute;
    top: 55px;
    left: 70px;
    z-index: 1;
  }

  .subtitle {
    margin: 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 60px;
    line-height: 87px;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 163px;
  }

  .events {
    list-style-type: none;
    padding: 0;
    margin-top: 143px;
  }

  @media (max-width: 1366px) {
    .line {
      left: 24.9%;
    }

    .content {
      padding-left: 134px;
    }
  }

  @media (max-width: 1280px) {
    .line {
      left: 23.2%;
    }

    .content {
      padding-left: 91px;
    }
  }
</style>
