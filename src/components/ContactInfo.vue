<template>
  <div class="contact-info-section" id="contact">
    <div class="title-section">
      <h3 class="title">Contact</h3>
      <div class="title-underline"></div>
    </div>
    <div class="content">
      <p class="content-text">For more information, contact us at:</p>
      <h4 class="contact-info">asado@wedevelop.me</h4>
      <p class="content-text">or call us at:</p>
      <h4 class="contact-info">512-529-8622</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo'
}
</script>

<style scoped>
  .contact-info-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #F0E6DF;
    padding-top: 48px;
    padding-bottom: 134px;
    background: url(../assets/img/contact-background.png) no-repeat center center;
    background-size: cover;
    background-color: #212121;
  }

  .title-section {
    position: relative;
  }

  .title {
    margin: 0 0 95px 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 55px;
    line-height: 80px;
    z-index: 2;
    position: relative;
  }

  .title-underline {
    width: 160px;
    height: 8px;
    background: #78ACE6;
    transform: rotate(-1.58deg);
    position: absolute;
    top: 60px;
    left: 35px;
    z-index: 1;
  }

  .contact-info {
    margin: 0 0 36px 0;
    font-weight: 600;
    font-size: 26px;
    line-height: 159.9%;
    color: #FFCA7F;
  }

  .content {
    text-align: center;
  }

  .content-text {
    margin: 0 0 12px 0;
    font-weight: 300;
    font-size: 24px;
    line-height: 18px;
  }

  @media (max-width: 1024px) {
    .title {
      margin-bottom: 70px;
      font-size: 36px;
      line-height: 52px;
    }

    .title-underline {
      width: 110px;
      height: 4px;
      top: 40px;
      left: 20px;
    }

    .contact-info-section {
      padding-bottom: 159px;
    }

    .content-text {
      font-size: 16px;
      line-height: 18px;
    }

    .contact-info {
      margin-bottom: 28px;
      font-size: 18px;
    }

    .content-text {
      margin-bottom: 8px;
    }
  }

  @media (max-width: 768px) {
    .contact-info-section {
      padding-bottom: 173px;
    }
  }

  @media(max-width: 576px) {
    .contact-info-section {
      background: url(../assets/img/contact-mobile-background.png) no-repeat center center;
      padding-bottom: 0;
    }

    .contact-info:last-child {
      margin-bottom: 126px;
    }
  }
</style>
