<template>
  <div ref="single" class="swiper-container">
    <div class="swiper-wrapper">
      <div
        v-for="skin in 4"
        :key="`Skin_${skin}`"
        class="swiper-slide"
      >
        <button :class="`skin_${skin}`" class="w-20 h-20 border-2 rounded-full border-gray-dark focus:outline-none" type="button" @click="skinClick(skin)" />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
  name: 'SwiperSkin',
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.swiper = new Swiper(this.$refs.single, {
      slidesPerView: 'auto',
      spaceBetween: 14,
      observer: true,
      observeParents: true,
      breakpoints: {
        767: {
          spaceBetween: 12
        }
      }
    })
  },
  methods: {
    skinClick (item) {
      // eslint-disable-next-line no-console
      console.log(item)
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-container {
  @apply px-5 !important;
}
::v-deep .swiper-wrapper {
  @apply justify-center;
}
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
