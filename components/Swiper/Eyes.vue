<template>
  <SwiperMultiple name="eyes">
    <div
      v-for="eyes in 12"
      :key="`Eyes_${eyes}`"
      class="swiper-slide"
      :class="{
        selected: eyes === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': eyes === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden border-2 rounded-full border-gray-dark bg-white"
      >
        <button
          :class="`eyes_${eyes}`"
          class="relative w-20 h-20 transform scale-150 -translate-x-2 translate-y-4 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(eyes)"
        />
      </div>
    </div>
  </SwiperMultiple>
</template>

<script>
export default {
  name: 'SwiperEyes',
  data () {
    return {
      activeItem: null
    }
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('eyes: ', item)
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
