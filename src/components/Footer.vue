<template>
  <div class="footer">
    <span class="line"></span>
    <p class="footer-text">Argentinian Asado Nights Roadshow 2020 is powered by</p>
    <a href="https://wedevelop.me/">
      <img src="../assets/img/wedevelop-logo.svg" class="logo" alt="WeDevelop">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Culture'
}
</script>

<style scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F0E6DF;
    background-color: #212121;
    padding-top: 20px;
    padding-bottom: 45px;
    position: relative;
  }

  .logo {
    margin-left: 20px;
  }

  .footer-text {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
  }

  .line {
    height: 87px;
    position: absolute;
    top: -24px;
    left: 25.7%;
    border: 0.5px solid rgba(211, 213, 216, 0.24);
  }

  @media (max-width: 1366px) {
    .line {
      left: 24.9%;
      top: -29px;
    }
  }

  @media (max-width: 1280px) {
    .line {
      left: 23.2%;
    }
  }

  @media (max-width: 1024px) {
    .line {
      left: 21.1%;
    }

    .footer {
      padding-bottom: 40px;
    }

    .footer-text {
      font-size: 12px;
      line-height: 16px;
    }

    .logo {
      width: 120px;
    }
  }

  @media (max-width: 768px) {
    .line {
      left: 10.1%;
    }
  }

  @media (max-width: 576px) {
    .line {
      display: none;
    }

    .footer {
      padding-top: 10px;
      flex-direction: column;
    }

    .footer-text {
      margin-bottom: 20px;
    }
  }
</style>
