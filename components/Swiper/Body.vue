<template>
  <SwiperRows>
    <div
      v-for="(slide, index) in 5"
      :key="`Body_${index}`"
      class="swiper-slide"
    >
      {{ slide }}
    </div>
  </SwiperRows>
</template>

<script>
export default {
  name: 'SwiperBody'

}
</script>
