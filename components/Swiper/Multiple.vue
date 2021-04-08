<template>
  <div ref="multiple" class="swiper-container">
    <div class="swiper-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'SwiperMultiple',
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.swiper = new Swiper(this.$refs.multiple, {
      slidesPerView: 'auto',
      slidesPerColumn: 2,
      spaceBetween: 22,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        767: {
          touchRatio: 0,
          spaceBetween: 12
        }
      }
    })
  }
}
</script>
