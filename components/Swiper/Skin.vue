<template>
  <div ref="single" class="swiper-container">
    <div class="swiper-wrapper">
      <div
        v-for="skin in 4"
        :key="`Skin_${skin}`"
        class="swiper-slide"
      >
        <button :class="{selected: skin === activeItem, [`skin_${skin}`]: `skin_${skin}` }" class="relative w-20 h-20 border-2 rounded-full border-gray-dark focus:outline-none" type="button" @click="skinClick(skin)" />
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
          spaceBetween: 12
        }
      }
    })
  },
  methods: {
    skinClick (item) {
      // eslint-disable-next-line no-console
      console.log(item)
      this.activeItem = item
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
.selected {
  @apply border-4 border-white !important;

  &::before {
    @apply flex items-center justify-center absolute right-0 bottom-0 bg-green text-white border-2 border-white rounded-full w-9 h-9 text-xl !important;

    content: "✔";
  }
}
</style>
