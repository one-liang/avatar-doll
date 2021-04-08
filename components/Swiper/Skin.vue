<template>
  <div ref="single" class="swiper-container">
    <div class="swiper-wrapper">
      <div
        v-for="skin in 4"
        :key="`Skin_${skin}`"
        class="swiper-slide"
        :class="{
          selected: skin === activeItem,
        }"
      >
        <div
          :class="{
            'selected__wrap': skin === activeItem,
          }"
          class="relative w-20 h-20 overflow-hidden border-2 rounded-full border-gray-dark"
        >
          <button
            :class="`skin_${skin}`"
            class="relative w-20 h-20 bg-no-repeat focus:outline-none"
            type="button"
            @click="onClick(skin)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'SwiperSkin',
  data () {
    return {
      swiper: null,
      activeItem: null
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
          touchRatio: 0,
          spaceBetween: 12
        }
      }
    })
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('skin: ', item)
      this.activeItem = item
    }
  }
}
</script>

<style scoped>
.swiper-container {
  @apply h-44 px-5 !important;
}
::v-deep .swiper-wrapper {
  @apply justify-center;
}
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
