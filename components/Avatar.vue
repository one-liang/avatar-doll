<template>
  <div class="relative mb-6 bg-white border-8 w-52 h-52 border-gray-light">
    <!-- 膚色 + 左手 + 配件 // head + left-hand + object -->
    <!-- 衣服 -->
    <div ref="body" :class="`body_${bodyClass}`" class="z-1 layer" />
    <!-- 頭 -->
    <div ref="head" :class="`head_${skinClass}`" class="z-2 layer" />
    <!-- 書本 -->
    <div ref="book" :class="`book_${bookClass}`" class="z-3 layer" />
    <!-- 左手 -->
    <div ref="left-hand" :class="`left-hand_${skinClass}`" class="z-4 layer" />
    <!-- 鼻子 -->
    <div ref="nose" :class="`nose_${noseClass}`" class="z-5 layer" />
    <!-- 眼睛 -->
    <div ref="eyes" :class="`eyes_${eyesClass}`" class="z-6 layer" />
    <!-- 眼鏡 -->
    <div ref="glasses" :class="`glasses_${glassesClass}`" class="glasses_1 z-7 layer" />
    <!-- 嘴巴 -->
    <div ref="mouth" :class="`mouth_${mouthClass}`" class="z-8 layer" />
    <!-- 頭髮 -->
    <div ref="hair" :class="`hair_${hairClass}`" class="z-9 layer" />
    <!-- 配件 -->
    <div ref="object" class="z-10 cake_1 layer" />
    <!-- 動物 -->
    <div ref="animal" :class="`animal_${animalClass}`" class="z-11 layer" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Avatar',
  computed: {
    ...mapGetters(['skinClass', 'bodyClass', 'eyesClass', 'glassesClass', 'noseClass', 'mouthClass', 'hairClass', 'bookClass', 'animalClass'])
  }
}
</script>

<style lang="scss" scoped>
// 圖層樣式
.layer {
  @apply absolute inset-0 bg-center bg-cover w-full h-full;
}
</style>
