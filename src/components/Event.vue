<template>
  <li class="event">
    <h4 class="event-date">{{ event.date }}</h4>
    <span class="circle"></span>
    <div class="event-right-content">
      <p class="event-date event-date-sm">{{ event.date }}</p>
      <h5 class="event-address">{{ event.address }}</h5>
      <p class="event-address-2">{{ event.address2 }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Event',
  props: {
    event: Object
  }
}
</script>

<style scoped>
  .event {
    display: flex;
    margin-bottom: 80px;
  }

  .event-date {
    width: 160px;
    margin: 0;
    text-align: right;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }

  .event-date-sm {
    display: none;
    color: rgba(240, 230, 223, 0.6);
    margin-bottom: 5px;
  }

  .circle {
    width: 16px;
    height: 16px;
    margin: 0 35px;
    border-radius: 50%;
    background: #FFCA7F;
  }

  .event-address {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }

  .event-address-2 {
    margin: 12px 0 0 0;
    font-weight: 300;
    opacity: 0.6;
    font-size: 18px;
    line-height: 18px;
  }

  @media (max-width: 1024px) {
    .event-date {
      width: 125px;
      font-size: 12px;
      line-height: 16px;
    }

    .event-address {
      font-size: 14px;
      line-height: 22px;
    }

    .event-address-2 {
      font-size: 14px;
      line-height: 22px;
    }

    .circle {
      margin: 0 28px;
    }
  }

  @media (max-width: 768px) {
    .event-date {
      display: none;
    }

    .event-date-sm {
      display: initial;
      text-align: left;
    }

    .events {
      padding-left: 17px;
    }

    .circle {
      margin: 0 25px 0 0;
    }

    .event-address-2 {
      margin: 5px 0 0 0;
    }

    .event-right-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media (max-width: 576px) {
    .event {
      margin-bottom: 65px;
    }
  }
</style>
