<template>
  <div class="upcoming-events" id="upcomingEvents">
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
          date: 'April 9th 2020, 6.30pm',
          address: 'Corrientes 348 Argentinian Steakhouse',
          address2: '1807 Ross Ave., Dallas, TX 75201'
        },
        {
          id: 2,
          date: 'April 16th 2020, 6.30pm',
          address: 'Buenos Aires Café',
          address2: '1201 E. 6th St., Austin, TX 78702'
        },
        {
          id: 3,
          date: 'April 23rd 2020,  6.30pm',
          address: 'Lolinda Argentinian Restaurant',
          address2: '2518 Mission St., San Francisco, CA 94110'
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
    left: 25.7%;
    width: 1px;
    background-color: rgba(211, 213, 216, 0.24);
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
    padding-left: 11.48%;
  }

  .events {
    list-style-type: none;
    padding: 0;
    margin-top: 143px;
  }

  @media(min-width: 1920px) {
    .content {
      padding-left: 15.1%;
    }
  }

  @media (max-width: 1366px) {
    .content {
      padding-left: 10.7%;
    }
  }

  @media (max-width: 1280px) {
    .content {
      padding-left: 9.7%;
    }
  }

  @media (max-width: 1024px) {
    .upcoming-events {
      padding-top: 50px;
      padding-bottom: 80px;
    }

    .image {
      width: 140px;
    }

    .line {
      left: 21.5%;
    }

    .first-line {
      height: 45px;
    }

    .second-line {
      top: 102px;
      height: 440px;
    }

    .title {
      padding-left: 50px;
      font-size: 36px;
      line-height: 52px;
    }

    .title-underline {
      width: 237px;
      height: 4px;
      top: 38px;
      left: 65px;
    }

    .content {
      padding-left: 59px;
    }

    .events {
      margin-top: 28px;
    }
  }

  @media (max-width: 768px) {
    .line {
      left: 11%;
    }

    .title {
      padding-left: 0;
    }

    .title-underline {
      left: 20px;
    }

    .events {
      margin-top: 100px;
      padding-left: 18px;
    }

    .second-line {
      height: 490px;
      top: 140px;
    }

    .image {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .line {
      left: 13%;
    }

    .events {
      padding-left: 26px;
    }

    .upcoming-events {
      padding-bottom: 10px;
    }

    .content {
      padding-left: 16px;
      width: 100%;
    }

    .image {
      display: none;
    }

    .second-line {
      height: 400px;
    }
  }

  @media (max-width: 360px) {
    .line {
      left: 11.5%;
    }

    .events {
      padding-left: 18px;
    }
  }
</style>
