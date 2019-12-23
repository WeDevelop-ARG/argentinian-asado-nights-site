<template>
  <div class="culture" id="culture">
    <div class="title-section">
      <h3 class="title">Culture</h3>
      <div class="title-underline"></div>
    </div>
    <div class="culture-section">
      <img src="../assets/img/line-background-mobile.svg" alt="" class="line-background-mobile">
      <img class="culture-image" src="../assets/img/gauchos.png" alt="Gauchos">
      <img src="../assets/img/line-background1.svg" alt="" class="line-background-1">
      <div class="culture-content culture-content-right">
        <h4 class="subtitle">Gauchos</h4>
        <p class="description">A gaucho is a skilled horseman, reputed to be brave and unruly. The gaucho is a national symbol in Argentina and Uruguay, but is also a strong culture in the far south region of Brazil.</p>
        <p class="description">Gauchos became greatly admired and renowned in legends, folklore and literature and became an important part of their regional cultural tradition. Beginning late in the 19th century, after the heyday of the gauchos, they were celebrated by South American writers.</p>
      </div>
    </div>
    <div class="line first-line"></div>
    <div class="culture-section">
      <img src="../assets/img/line-background-mobile.svg" alt="" class="line-background-mobile">
      <img class="culture-image culture-image-show-mobile" src="../assets/img/mate.png" alt="Mate">
      <div class="culture-content culture-content-left">
        <h4 class="subtitle">Mate</h4>
        <p class="description">Mate has a strong cultural significance both in terms of national identity and well as socially; it is the national drink of Argentina. Drinking mate is a common social practice in parts of Brazil, Chile, Argentina, Paraguay, Peru, Uruguay and eastern Bolivia.</p>
        <p class="description">It is prepared by steeping dried leaves of yerba mate in hot water and is served with a metal straw from a shared hollow calabash gourd. The straw is called a “bombilla” in Spanish, and is traditionally made of silver.</p>
      </div>
      <img class="culture-image culture-image-hide-desktop" src="../assets/img/mate.png" alt="Mate">
      <img src="../assets/img/line-background2.svg" alt="" class="line-background-2">
    </div>
    <div class="line second-line"></div>
    <div class="culture-section">
      <img src="../assets/img/line-background-mobile.svg" alt="" class="line-background-mobile">
      <img class="culture-image" src="../assets/img/asado.png" alt="Asado">
      <img src="../assets/img/line-background3.svg" alt="" class="line-background-3">
      <div class="culture-content culture-content-right">
        <h4 class="subtitle">Asado</h4>
        <p class="description">Asado are the techniques and a traditional event of having or attending a barbecue. An asado usually consists of beef, pork, chicken, chorizo, and morcilla which are cooked on a grill, called “parrilla”, or an open fire. This meat is prepared by a person who is the assigned ”asador” or ”parrillero”.</p>
        <p class="description">Usually the asador begins by igniting the charcoal, which is often made of quebracho wood, because it smokes very little.</p>
        <p class="description">Cooking can be done ”al asador” or ”a la parrilla”. In the first case, a fire is made on the ground or in a fire pit and surrounded by metal crosses (asadores) that hold the entire carcass of an animal splayed open to receive the heat from the fire. In the second case, a fire is made and after the charcoal has formed, a grill with the meat is placed over it.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Culture'
}
</script>

<style scoped>
  .culture {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #303030;
    color: #F0E6DF;
    padding-top: 60px;
    position: relative;
    overflow: hidden;
  }

  .line {
    position: absolute;
    left: 25.7%;
    width: 1px;
    background-color: rgba(211, 213, 216, 0.24);
  }

  .first-line {
    height: 222px;
    top: 710px;
  }

  .second-line {
    height: 166px;
    top: 1238px;
  }

  .title-section {
    position: relative;
  }

  .title {
    margin: 0 0 80px 0;
    padding-left: 283px;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 55px;
    line-height: 80px;
    z-index: 2;
    position: relative;
  }

  .title-underline {
    width: 145px;
    height: 8px;
    background: #78ACE6;
    transform: rotate(-1.58deg);
    position: absolute;
    top: 60px;
    left: 317px;
    z-index: 1;
  }

  .subtitle {
    margin: 0 0 12px 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 42px;
    line-height: 61px;
    color: #FFCA7F;
  }

  .culture-section {
    width: 100%;
    display: flex;
    margin-bottom: 158px;
    position: relative;
    align-items: flex-start;
  }

  .culture-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 45px;
  }

  .culture-content-right {
    padding-right: 90px;
  }

  .culture-content-left {
    padding-left: 110px;
  }

  .description {
    margin: 0 0 30px 0;
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
  }

  .culture-image {
    position: relative;
    z-index: 1;
    align-self: flex-start;
  }

  .culture-image-show-mobile {
    display: none;
  }

  .line-background-mobile {
    display: none;
  }

  .line-background-1 {
    position: absolute;
    z-index: 0;
    top: -55px;
    left: 5px;
  }

  .line-background-2 {
    position: absolute;
    z-index: 0;
    top: 150px;
    left: 320px;
    width: 1000px;
  }

  .line-background-3 {
    position: absolute;
    z-index: 0;
    top: 50px;
  }

  @media(min-width: 1920px) {
    .title {
      padding-left: 410px;
    }

    .title-underline {
      left: 437px;
    }

    .line-background-2 {
      left: 820px;
    }
  }

  @media (max-width: 1366px) {
    .line {
      left: 24.9%;
    }

    .title {
      padding-left: 260px;
    }

    .title-underline {
      left: 300px;
    }

    .line-background-2 {
      left: 230px;
    }

    .first-line {
      height: 200px;
    }
  }

  @media (max-width: 1280px) {
    .line {
      left: 23.2%;
    }

    .title {
      padding-left: 210px;
    }

    .title-underline {
      left: 250px;
    }

    .line-background-2 {
      left: 190px;
    }

    .first-line {
      height: 180px;
    }

    .second-line {
      top: 1260px;
    }

    .culture-image {
      width: 60%;
    }
  }

  @media (max-width: 1024px) {
    .culture {
      padding-top: 55px;
    }

    .title {
      margin-bottom: 35px;
      padding-left: 170px;
      font-size: 36px;
      line-height: 52px;
    }

    .title-underline {
      top: 38px;
      left: 190px;
      height: 4px;
      width: 100px;
    }

    .subtitle {
      font-size: 26px;
      line-height: 38px;
    }

    .culture-section {
      margin-bottom: 95px;
      overflow: hidden;
      padding-top: 30px;
    }

    .description {
      margin: 0 0 20px 0;
      font-size: 14px;
      line-height: 19px;
    }

    .culture-image {
      width: 410px
    }

    .line-background-1 {
      top: -25px;
      left: -160px;
      width: 80%;
    }

    .line-background-2 {
      top: 40px;
      left: 350px;
      width: 70%;
    }

    .line-background-3 {
      top: 40px;
      width: 80%;
      left: -100px;
    }

    .line {
      left: 21.5%;
    }

    .first-line {
      top: 460px;
      height: 110px;
    }

    .second-line {
      top: 800px;
      height: 100px;
    }
  }

  @media (max-width: 768px) {
    .line {
      left: 11%;
    }

    .title {
      padding-left: 40px;
    }

    .title-underline {
      left: 60px;
    }

    .culture-section {
      flex-direction: column;
      overflow: hidden;
      padding-top: 30px;
      margin-bottom: 70px;
    }

    .culture-image {
      padding-right: 30px;
      width: auto;
    }

    .line-background-1,
    .line-background-2,
    .line-background-3 {
      top: -25px;
      left: 0;
      width: auto;
    }

    .subtitle {
      margin-top: 25px;
    }

    .culture-image-show-mobile {
      display: initial;
    }

    .culture-image-hide-desktop {
      display: none;
    }

    .first-line {
      top: 840px;
      height: 80px;
    }

    .second-line {
      top: 1620px;
      height: 80px;
    }

    .culture-content-left {
      padding-left: 45px;
    }

    .culture-content-right {
      padding-right: 45px;
    }
  }

  @media (max-width: 576px) {
    .line {
      left: 13%;
    }

    .first-line,
    .second-line {
      height: 45px;
    }

    .first-line {
      top: 682px;
    }

    .second-line {
      top: 1300px;
    }

    .title {
      padding-left: 16px;
      margin-bottom: 14px;
    }

    .title-underline {
      left: 35px;
    }

    .culture-image {
      width: 346px;
    }

    .line-background-1,
    .line-background-2,
    .line-background-3 {
      display: none;
    }

    .line-background-mobile {
      display: initial;
      position: absolute;
      z-index: 0;
      top: 10px;
      left: -105px;
      width: 563px;
      height: 184px;
    }

    .culture-content {
      padding: 0 16px;
    }

    .description:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 360px) {
    .line {
      left: 9.6%;
    }
  }
</style>
