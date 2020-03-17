<template>
  <div class="previous-events-section" id="previousEvents">
    <div class="section-info">
      <div class="title-section">
        <h3 class="title">Previous events</h3>
        <div class="title-underline"></div>
      </div>
      <div class="section-description">
        Check out our previous AsadoNights and find out more about the Asado Nights tour.
      </div>
    </div>
    <div class='events'>
       <PreviousEvent v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
    </div>
  </div>
</template>

<script>
import PreviousEvent from './PreviousEvent'
import { getPreviousEvents } from '../mixins/events/getPreviousEvents'

export default {
  name: 'PreviousEvents',
  components: {
    PreviousEvent
  },
  data () {
    return {
      events: getPreviousEvents()
    }
  }
}
</script>

<style scoped>
 .previous-events-section {
    display: flex;
    flex-direction: column;
    color: #F0E6DF;
    background: url(../assets/img/previous-events-background.svg) no-repeat center center;
    background-size: cover;
    background-color: #212121;
  }

  .section-info {
    position: relative;
    margin: 97px 0 0 12.92%;
  }

  .title-section {
    position: relative;
  }

  .title {
    margin: 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 55px;
    line-height: 80px;
    z-index: 2;
    position: relative;
  }

  .title-underline {
    width: 328.11px;
    height: 8px;
    background: #78ACE6;
    transform: rotate(-1.58deg);
    position: absolute;
    top: 60px;
    left: 35px;
    z-index: 1;
  }

  .section-description {
    padding-top: 24px;
    width: 446px;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
  }

  .events {
    padding-top: 103px;
    display: flex;
    justify-content: space-evenly
  }

  @media (max-width: 1024px) {
    .previous-events-section {
      background-size: cover;
      padding-bottom: 15px;
    }

    .title {
      margin-bottom: 24px;
      font-size: 36px;
      line-height: 52px;
    }

    .title-underline {
    width: 212px;
    height: 4px;
    top: 36px;
    left: 25px;
    }

    .section-description {
    padding-top: 0px;
    }
  }

  @media (max-width: 768px) {
    .events {
      padding-top: 65px;
    }

    .section-info {
     padding-left: 8%;
    }
  }

  @media(max-width: 576px) {
    .previous-events-section {
      background: url(../assets/img/previous-events-mobile-background.svg) no-repeat center center;
      background-size: cover;
      padding-bottom: 0;
      padding-top: 100px;
      align-items: center;
    }

    .section-info {
    padding-left: 4%;
   }

    .section-description {
     width: 80vw;
    }

    .events {
      flex-direction: column
    }
  }
</style>
