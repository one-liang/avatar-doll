<template>
  <SwiperRows>
    <div
      v-for="(slide, index) in 5"
      :key="`Glasses_${index}`"
      class="swiper-slide"
    >
      {{ slide }}
    </div>
  </SwiperRows>
</template>

<script>
export default {
  name: 'SwiperGlasses'
}
</script>
