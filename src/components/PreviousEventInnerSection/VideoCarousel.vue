<template>
  <div class="carousel-section">
    <div class="video-line-background" />
    <swiper :options="swiperOptions" ref="swiperRef"  class="carousel-container">
      <swiper-slide v-for="(video, index) in videos" :key="index" class="carousel-video-container">
          <Video :source="video.url" :title="video.title" :description="video.description" :orientation="video.orientation" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Video from '../../components/PreviousEventInnerSection/Video'

const MOBILE_BREAKPOINT = 576

export default {
  name: 'VideoCarousel',
  components: {
    swiper,
    swiperSlide,
    Video
  },
  props: {
    videos: Array
  },
  data () {
    return {
      swiperOptions: {
        initialSlide: 0,
        spaceBetween: 30,
        slidesPerView: (innerWidth <= MOBILE_BREAKPOINT) ? 1 : 'auto',
        allowTouchMove: false,
        centeredSlides: true,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }
      }
    }
  }
}

</script>

<style scoped>
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 51px;
    height: 49.69px;
    background-image: url(../../assets/img/arrow-button.svg);
    background-size: cover;
  }

  .swiper-button-prev {
    width: 51px;
    top: 50%;
    height: 49.69px;
    background-image: url(../../assets/img/arrow-button.svg);
    background-size: cover;
    transform: rotate(180deg);
  }

  .carousel-section {
      --TRANSITION_DURATION: 0.3s;
      color: #F0E6DF;
      position: relative;
  }

  .carousel-container {
    margin-bottom: 48.68px;
  }

  .carousel-video-container {
   width: 508px;
  }

   .video-line-background{
    position: absolute;
    height: 110%;
    width: 100vw;
    background-image: url('../../assets/img/line-background-previous-events.svg');
    background-repeat:  no-repeat;
  }

  .darker-background {
    background-color: #212121;
  }
</style>
