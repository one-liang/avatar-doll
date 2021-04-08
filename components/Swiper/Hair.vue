<template>
  <SwiperMultiple name="hair">
    <div
      v-for="hair in 20"
      :key="`Hair_${hair}`"
      class="swiper-slide"
      :class="{
        selected: hair === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': hair === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden border-2 rounded-full border-gray-dark bg-white"
      >
        <button
          :class="`hair_${hair}`"
          class="relative w-20 h-20 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(hair)"
        />
      </div>
    </div>
  </SwiperMultiple>
</template>

<script>
export default {
  name: 'SwiperHair',
  data () {
    return {
      activeItem: null
    }
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('hair: ', item)
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
