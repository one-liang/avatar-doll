<template>
  <SwiperRows>
    <div
      v-for="body in 8"
      :key="`Body_${body}`"
      class="swiper-slide"
      :class="{
        selected: body === bodyClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': body === bodyClass,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`body_${body}`"
          class="relative w-20 h-20 bg-white bg-center bg-no-repeat bg-cover scale-200 focus:outline-none"
          type="button"
          @click="onClick(body)"
        />
      </div>
    </div>
  </SwiperRows>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SwiperBody',
  computed: {
    ...mapGetters(['bodyClass'])
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('body: ', item)
      this.$store.commit('changeBody', item)
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
