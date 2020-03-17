<template>
  <div class="carousel-section">
    <swiper @slideChange="onAfterChange" :options="swiperOptions" ref="swiperRef"  class="carousel-container">
      <swiper-slide v-for="(photo, index) in photos" :key="index" :class="activeCarouselIndexStyle(index)">
          <div :class="activeImageBackgroundStyle(index)">
            <img  :src="photo.url" :alt="photo.title" :class="activeImageStyle(index)"/>
          </div>
          <div :class="activeCarouselIndexMetadataStyle(index)">
            <div class="carousel-image-title">{{photo.title}}</div>
            <div class="carousel-image-description">{{photo.description}}</div>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const MOBILE_BREAKPOINT = 768

export default {
  name: 'PhotoCarousel',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    photos: Array
  },
  data () {
    return {
      swiperOptions: {
        initialSlide: 1,
        spaceBetween: 30,
        slidesPerView: (innerWidth <= MOBILE_BREAKPOINT) ? 1 : 'auto',
        centeredSlides: true,
        centeredSlidesBounds: true,
        centerInsufficientSlides: true,
        grabCursor: true
      },
      activeIndex: 1
    }
  },
  computed: {
    swiper () {
      return this.$refs.swiperRef.swiper
    }
  },
  methods: {
    onAfterChange () {
      this.activeIndex = this.swiper.activeIndex
    },

    activeCarouselIndexStyle (index) {
      return {
        'carousel-image-container': true,
        'active-carousel-image-container': this.activeIndex === index
      }
    },

    activeCarouselIndexMetadataStyle (index) {
      return {
        'carousel-image-metadata': true,
        'carousel-image-metadata-active ': this.activeIndex === index
      }
    },

    activeImageBackgroundStyle (index) {
      return {
        'image-background': true,
        'active-image-background': this.activeIndex === index
      }
    },

    activeImageStyle (index) {
      return {
        'carousel-image': true,
        'blend-multiply': this.activeIndex === index,
        'blend-normal': this.activeIndex !== index
      }
    }
  }
}
</script>

<style scoped>
  .carousel-section {
      --TRANSITION_DURATION: 0.3s;
      color: #F0E6DF;
  }

  .carousel-container {
    height: 525px;
  }

  .carousel-image-container {
    display: block;
    align-self: flex-end;
    filter: brightness(70%);
    width: 600px;
    height: 450px;
    -webkit-transition: all var(--TRANSITION_DURATION) ease-in-out;
    transition: all var(--TRANSITION_DURATION) ease-in;
  }

  .active-carousel-image-container {
    display: block;
    filter: brightness(100%);
    background-size: cover;
    width: 700px;
    height: 525px;
    -webkit-transition: all var(--TRANSITION_DURATION) ease-in-out;
    transition: all var(--TRANSITION_DURATION) ease-in;
  }

  .image-background {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.55);
    }

  .active-image-background {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(75, 80, 87, 0) 69.05%, rgba(75, 80, 87, 0.5) 78.22%);
  }

  .carousel-image {
    width: 100%;
    height: 100%;
  }

  .blend-multiply{
    mix-blend-mode: multiply;
  }

  .blend-normal {
    mix-blend-mode: normal;
  }

  .carousel-image-metadata {
    opacity: 0%;
    position: absolute;
    bottom: 37.88px;
    left: 38px;
  }

  .carousel-image-metadata-active {
    opacity: 100%;
    transition: opacity var(--TRANSITION_DURATION);
  }

  .carousel-image-title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #F0E6DF;
    margin-bottom: 8px;
  }

  .carousel-image-description  {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #F0E6DF;
  }

  .darker-background {
    background-color: #212121;
  }

  @media (max-width: 1280px) {
    .carousel-container {
      height: 415px;
    }

    .carousel-image-container {
      width: 400px;
      height: 300px;
    }

    .active-carousel-image-container {
      width: 480px;
      height: 360px;
    }

    .carousel-image-metadata {
      bottom: 15px;
      width: 75%;
    }
  }

  @media (max-width: 768px) {
     .carousel-container {
      height: 600px;
    }

    .carousel-image-container {
      height: auto;
    }

    .active-carousel-image-container {
      height: auto;
    }

    .carousel-image-title {
      font-size: 18px;
      line-height: 25px;
    }

    .carousel-image-description  {
      font-size: 14px;
      line-height: 19px;
    }

    .carousel-image-metadata {
      left: 24px;
    }
  }

  @media (max-width: 576px) {
  }
</style>
