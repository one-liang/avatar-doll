<template>
  <div ref="rows" class="swiper-container">
    <div class="swiper-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  name: 'SwiperRows',
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.swiper = new Swiper(this.$refs.rows, {
      slidesPerView: 'auto',
      slidesPerColumn: 2,
      spaceBetween: 14,
      observer: true,
      observeParents: true,
      breakpoints: {
        767: {
          spaceBetween: 8
        }
      }
    })
  }
}
</script>
