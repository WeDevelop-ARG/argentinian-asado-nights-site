<template>
  <div class="video-section">
    <video :class="getVideoStyle()" ref="videoRef" @click="toggleVideoPlayState">
      <source :src="source" type="video/mp4">
    </video>
    <div class="video-metadata">
      <div class="video-title">{{title}}</div>
      <div class="video-description">{{description}}</div>
    </div>
    <div class="play-button-container">
      <img src="../../assets/img/play-button.svg" :class="getPlayButtonStyle()" @click="toggleVideoPlayState"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Video',
  props: {
    source: String,
    title: String,
    description: String,
    orientation: String
  },
  data () {
    return {
      playerOptions: {
        height: '360',
        autoplay: false,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: this.source
        }]
      },
      isVideoPlaying: false
    }
  },
  computed: {
    myVideo () {
      return this.$refs.videoRef
    }
  },
  methods: {
    openFullScreen () {
      const elem = this.myVideo
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen()
      }
    },

    toggleVideoPlayState () {
      if (this.isVideoPlaying) {
        this.pauseVideo()
      } else {
        if (this.orientation === 'horizontal') {
          this.openFullScreen()
        }
        this.playVideo()
      }
    },

    getPlayButtonStyle () {
      return {
        'play-button': true,
        'play-button-invisible': (this.isVideoPlaying)
      }
    },

    getVideoStyle () {
      return {
        'video-horizontal': this.orientation === 'horizontal',
        'video': this.orientation !== 'horizontal'
      }
    },

    playVideo () {
      this.isVideoPlaying = true
      this.myVideo.play()
    },

    pauseVideo () {
      this.isVideoPlaying = false
      this.myVideo.pause()
    }
  }
}

</script>

<style scoped>
  .video-section {
  color: #F0E6DF;
  }

  .video{
    width: 480px;
    height: 848px;
    cursor: pointer;
  }

.video-horizontal{
    width: 508px;
    height: 285.75px;
    cursor: pointer;
  }

  .video-metadata {
    position: absolute;
    bottom: 0;
    margin: 0 0 28.75px 30px;
  }

  .video-title {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 8px;
  }

  .video-description {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
  }

.play-button-container{
  display: flex;
}

  .play-button {
    position: absolute;
    cursor: pointer;
    top: 40%;
    left: 40%;
    opacity: 1;
  }

  .play-button-invisible {
    opacity: 0;
  }

</style>
