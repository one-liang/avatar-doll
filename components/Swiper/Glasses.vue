<template>
  <SwiperRows>
    <div
      v-for="glasses in 8"
      :key="`Glasses_${glasses}`"
      class="swiper-slide"
      :class="{
        selected: glasses === glassesClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': glasses === glassesClass,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`glasses_${glasses}`"
          class="relative w-20 h-20 transform scale-150 -translate-x-2 translate-y-4 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(glasses)"
        />
      </div>
    </div>
  </SwiperRows>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SwiperGlasses',
  computed: {
    ...mapGetters(['glassesClass'])
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('glasses: ', item)
      this.$store.commit('changeGlasses', item)
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
