<template>
  <div class="thank-you">
    <nav class="navbar">
      <a href="#navbar" class="nav-brand">
        <img src="../../assets/img/logo.svg" class="nav-logo" alt="Argentinian Asado Night logo">
      </a>
    </nav>
    <p class="description">Thank you for RSVPing to the</p>
    <h1 class="title">Argentinian Asado Nights</h1>
    <h2 class="subtitle">Roadshow 2020</h2>
    <div class="content">
      <div class="details">
        <h4 class="event-date">Jan 16 2020, 6pm - 9pm</h4>
        <h5 class="event-address">Corrientes 348 Argentinian stakehouse</h5>
        <p class="event-address-2">1807 Ross Ave., Dallas, TX</p>
      </div>
      <div class="separator"></div>
      <p class="description description-bottom">We look forward to seeing you there!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thankyou'
}
</script>

<style scoped>
  .thank-you {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(../../assets/img/header-background.png) no-repeat center center;
    background-size: cover;
    color: #F0E6DF;
  }

  .navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 22px 70px 0 70px;
    margin-bottom: 38px;
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
    flex-direction: column;
    margin: 40px 0 135px 0;
    width: 100%;
  }

  .details {
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }

  .separator {
    width: 84px;
    height: 2px;
    background-color: #FFCA7F;
  }

  .event-date {
    margin: 0;
    font-size: 30px;
    line-height: 41px;
    font-weight: 600;
  }

  .event-address {
    margin: 5px 0;
    font-size: 18px;
    line-height: 25px;
    font-weight: 600;
  }

  .event-address-2 {
    margin: 0;
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
  }

  .description {
    margin: 0 0 23px 0;
    font-size: 24px;
    line-height: 33px;
    font-weight: 300;
    width: 100%;
    text-align: center;
  }

  .description-bottom {
    margin-top: 50px;
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    html,
    body,
    #app,
    .thank-you {
      height: 100%;
    }

    .title {
      font-size: 65px;
      line-height: 100px;
    }

    .subtitle {
      font-size: 45px;
      line-height: 72px;
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

    .description {
      font-size: 16px;
      line-height: 22px;
    }
  }

  @media (max-width: 576px) {
    .thank-you {
      background: url(../../assets/img/header-mobile-background.png) no-repeat center center;
      background-size: cover;
    }

    .navbar {
      padding: 20px 22px 0 22px;
      margin-bottom: 84px;
    }

    .nav-logo {
      width: 70px;
    }

    .title {
      font-size: 33px;
      line-height: 48px;
    }

    .subtitle {
      font-size: 27px;
      line-height: 39px;
    }

    .description {
      margin-bottom: 30px;
    }

    .content {
      margin: 45px 0 100px 0;
    }

    .details {
      margin-bottom: 37px;
    }

    .description-bottom {
      margin-top: 37px;
    }
  }
</style>
