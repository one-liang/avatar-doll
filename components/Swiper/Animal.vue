<template>
  <SwiperMultiple name="animal">
    <div
      v-for="animal in 12"
      :key="`Animal_${animal}`"
      class="swiper-slide"
      :class="{
        selected: animal === animalClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': animal === animalClass,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`animal_${animal}`"
          class="relative w-20 h-20 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(animal)"
        />
      </div>
    </div>
  </SwiperMultiple>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SwiperAnimal',
  computed: {
    ...mapGetters(['animalClass'])
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('animal: ', item)
      this.$store.commit('changeAnimal', item)
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
