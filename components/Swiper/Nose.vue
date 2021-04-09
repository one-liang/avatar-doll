<template>
  <SwiperRows>
    <div
      v-for="nose in 8"
      :key="`Nose_${nose}`"
      class="swiper-slide"
      :class="{
        selected: nose === noseClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': nose === noseClass,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`nose_${nose}`"
          class="relative w-20 h-20 transform -translate-x-3 translate-y-4 bg-white bg-center bg-no-repeat bg-cover scale-200 focus:outline-none"
          type="button"
          @click="onClick(nose)"
        />
      </div>
    </div>
  </SwiperRows>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SwiperNose',
  computed: {
    ...mapGetters(['noseClass'])
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('nose: ', item)
      this.$store.commit('changeNose', item)
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
