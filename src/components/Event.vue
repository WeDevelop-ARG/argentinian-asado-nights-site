<template>
  <div class="event">
    <h4 class="event-date">{{ event.date }}</h4>
    <h5 class="event-address">{{ event.address }}</h5>
    <p class="event-address-2">{{ event.address2 }}</p>
  </div>
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

</style>
