<template>
  <div class="footer">
    <span class="line"></span>
    <img src="../assets/img/line-background4.svg" class="line-background" alt="">
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
    padding-top: 48px;
    padding-bottom: 45px;
    position: relative;
    overflow: hidden;
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
    top: 0;
    left: 25.68%;
    border: 1px solid rgba(211, 213, 216, 0.24);
  }

  .line-background {
    position: absolute;
    z-index: 0;
    top: -285px;
    left: 500px;
  }

  @media (max-width: 1366px) {
    .line {
      left: 24.9%;
    }
  }

  @media (max-width: 1280px) {
    .line {
      left: 23.2%;
    }
  }
</style>
