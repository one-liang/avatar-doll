<template>
  <SwiperMultiple name="eyes">
    <div
      v-for="eyes in 12"
      :key="`Eyes_${eyes}`"
      class="swiper-slide"
      :class="{
        selected: eyes === eyesClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': eyes === eyesClass,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
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
import { mapGetters } from 'vuex'

export default {
  name: 'SwiperEyes',
  computed: {
    ...mapGetters(['eyesClass'])
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('eyes: ', item)
      this.$store.commit('changeEyes', item)
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
