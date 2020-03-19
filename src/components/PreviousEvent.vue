<template>
   <div class="event" @click="navigateToInnerSection()">
    <div class="thumbnail-button-container">
      <img class="thumbnail" v-bind:src="event.thumbnail" alt="event-thumbnail">
      <img class='button' src="../assets/img/arrow-button.svg" alt="previous event details" />
    </div>
      <div class="metadata">
        <h4 class="date">{{ event.date | formatShortMonthDay | toUpperCase}}</h4>
        <div class="vertical-line" />
        <h4 class='state-abbreviation'>{{event.stateID}}</h4>
      </div>
      <div class="description">{{event.description}}</div>
  </div>
</template>

<script>
export default {
  name: 'PreviousEvent',
  props: {
    event: Object
  },
  methods: {
    navigateToInnerSection () {
      this.$router.push({
        name: `PreviousEventInnerSection`,
        params: { event: this.event }
      })
    }
  }
}
</script>

<style scoped>

  .event {
    padding-bottom: 89px;
    width: 570px;
    margin: 0px 12px 0px 12px;
    cursor: pointer;
  }

  .thumbnail-button-container {
    position: relative;
  }

  .thumbnail {
    background: rgba(75, 80, 87, 0.3);
    background-size: cover;
    width: 100%;
    height: auto;
  }

  .button {
    position: absolute;
    width: 39px;
    height: 38px;
    right: 3.51%;
    bottom: -18px;
  }

  .metadata {
    display: flex;
    align-items: center;
    margin-top: 24px;
    height: 19px;
  }

  .date {
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #DADADA;
  }

  .vertical-line {
    width: 2px;
    height: 18px;
    background: #FFCA7F;
    opacity: 0.9;
    margin: 0 12px 0px 12px;
  }

  .state-abbreviation {
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #DADADA;
    opacity: 0.9;
  }

  .description {
    width: 100%;
    margin-top: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #F0E6DF;
  }

  @media (max-width: 1280px) {
    .event {
       width: 400px;
       min-width: 300px;
    }
  }

  @media (max-width: 768px) {
    .event {
       width: 320px;
       min-width: 220px;
    }
  }

  @media(max-width: 576px) {
     .event {
       width: 250px;
       min-width: 220px;
    }
  }
</style>
