<template>
  <SwiperMultiple name="mouth">
    <div
      v-for="mouth in 12"
      :key="`Mouth_${mouth}`"
      class="swiper-slide"
      :class="{
        selected: mouth === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': mouth === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`mouth_${mouth}`"
          class="relative w-20 h-20 transform -translate-x-2 translate-y-4 bg-center bg-no-repeat bg-cover scale-200 focus:outline-none"
          type="button"
          @click="onClick(mouth)"
        />
      </div>
    </div>
  </SwiperMultiple>
</template>

<script>
export default {
  name: 'SwiperMouth',
  data () {
    return {
      activeItem: null
    }
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('mouth: ', item)
      this.$store.commit('changeMouth', item)
      this.activeItem = item
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
