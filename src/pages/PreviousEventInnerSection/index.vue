<template>
  <div class='previous-event'>
    <Navbar :scrollDuration="scrollDuration" />
    <div class='inner-section-content'>
        <div class="section sectionPadding">
          <div class="title-section">
            <h3 class="title">{{event.date | formatFullMonthDay}}, {{event.city}}</h3>
            <div class="title-underline" />
          </div>
          <div class='description'>
           {{event.description}}
          </div>
          <div class="line" />
        </div>
        <img :src=" event.state | getStateImage" alt="state image" class="state-img">
    </div>
    <div class="photo-section-background" />
    <PhotoCarousel :photos="event.photos" />
    <div class="section">
      <div class="line" />
    </div>
    <VideoCarousel :videos="event.videos" />
    <div class="darker-background">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PhotoCarousel from '../../components/PreviousEventInnerSection/PhotoCarousel'
import VideoCarousel from '../../components/PreviousEventInnerSection/VideoCarousel'

export default {
  name: 'PreviousEventInnerSection',
  components: {
    Navbar,
    Footer,
    PhotoCarousel,
    VideoCarousel
  },
  props: {
    event: Object
  },
  data () {
    return {
      scrollDuration: 2000
    }
  },
  created () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
  .previous-event {
      --TRANSITION_DURATION: 0.3s;
      color: #F0E6DF;
  }

  .inner-section-content {
    display: flex;
  }

  .section {
    width: 40.48%;
    margin-left: 178px;
  }

  .sectionPadding {
    margin-bottom: 109px;
  }

  .video-section {
    margin-bottom: 45px;
  }

  .title-section {
    position: relative;
    display: inline-block;
  }

  .title {
    margin: 0 0 24px 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 55px;
    line-height: 80px;
    z-index: 2;
    position: relative;
  }

  .title-underline {
    width: 97%;
    height: 8px;
    background: #78ACE6;
    transform: rotate(-1.58deg);
    position: absolute;
    top: 55%;
    left: 34.96px;
    z-index: 1;
  }

  .description {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
  }

   .line {
    margin: 24px 0 24px 6%;
    width: 2px;
    height: 104px;
    background-color: rgba(211, 213, 216, 0.24);
  }

  .subtitle {
    margin: 0 0 12px 0;
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 42px;
    line-height: 61px;
    color: #FFCA7F;
  }

  .state-img {
    width: 440px;
    height: 420px;
    margin: 0 0 0 12%;
    align-self: flex-start;
  }

  .photo-section-background{
    position: absolute;
    width: 100vw;
    height: 493px;
    margin-top: 50px;
    background: #303030;
  }

  .darker-background {
    background-color: #212121;
  }

  @media (max-width: 1280px) {
    .section {
      margin-left: 5%;
    }

    .sectionPadding {
      margin-bottom: 50px;
    }

    .title {
      font-size: 36px;
      line-height: 52px;
    }

    .subtitle {
      font-size: 26px;
      line-height: 38px;
    }

     .description {
     font-size: 14px;
    line-height: 19px;
    }

    .title-underline {
      height: 4px;
    }

    .state-img {
      width: 320px;
      height: 310px;
    }

    .photo-section-background {
      height: 300px;
      margin-top: 100px;
    }
  }

  @media (max-width: 768px) {
    .section {
      width: 100%;
    }

    .state-img {
      display: none;
    }

    .photo-section-background {
      height: 200px;
    }

    .line {
      width: 2px;
      height: 54px;
    }
  }

  @media (max-width: 576px) {
    .section {
      margin-left: 5%;
    }

    .sectionPadding {
      margin-bottom: 10px;
    }

    .photo-section-background {
      height: 100px;
      margin-bottom: 20px;
    }
  }
</style>
