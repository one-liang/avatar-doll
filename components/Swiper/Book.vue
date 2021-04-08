<template>
  <SwiperMultiple name="book">
    <div
      v-for="book in 12"
      :key="`Book_${book}`"
      class="swiper-slide"
      :class="{
        selected: book === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': book === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`book_${book}`"
          class="relative w-20 h-20 transform scale-150 -translate-x-10 -translate-y-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(book)"
        />
      </div>
    </div>
  </SwiperMultiple>
</template>

<script>
export default {
  name: 'SwiperBook',
  data () {
    return {
      activeItem: null
    }
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('book: ', item)
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
