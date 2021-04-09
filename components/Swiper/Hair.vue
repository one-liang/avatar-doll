<template>
  <SwiperMultiple name="hair">
    <div
      v-for="hair in 20"
      :key="`Hair_${hair}`"
      class="swiper-slide"
      :class="{
        selected: hair === hairClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': hair === hairClass,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
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
import { mapGetters } from 'vuex'

export default {
  name: 'SwiperHair',
  computed: {
    ...mapGetters(['hairClass'])
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('hair: ', item)
      this.$store.commit('changeHair', item)
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
