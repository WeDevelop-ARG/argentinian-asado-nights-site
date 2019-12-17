<template>
  <li class="event">
    <h4 class="event-date">{{ event.date }}</h4>
    <span class="circle"></span>
    <div>
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
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
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
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }

  .event-address-2 {
    margin: 12px 0 0 0;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
  }
</style>
