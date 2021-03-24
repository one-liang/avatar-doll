<template>
  <div class="flex flex-wrap px-6 py-10 bg-black rounded-lg bg-opacity-40 min-h-80">
    <div class="flex flex-col items-center justify-center w-full lg:w-5/12">
      <!-- avatar -->
      <div class="relative mb-6 bg-white border-8 w-52 h-52 border-gray-light">
        <!-- 膚色 + 左手 + 配件 // head + left-hand + object -->

        <!-- 衣服 -->
        <div ref="body" class="body_2 z-1 layer" />
        <!-- 頭 -->
        <div ref="head" class="head_1 z-2 layer" />
        <!-- 書本 -->
        <div ref="book" class="book_1 z-3 layer" />
        <!-- 左手 -->
        <div ref="left-hand" class="left-hand_1 z-4 layer" />
        <!-- 鼻子 -->
        <div ref="nose" class="nose_1 z-5 layer" />
        <!-- 眼睛 -->
        <div ref="eyes" class="eyes_1 z-6 layer" />
        <!-- 眼鏡 -->
        <div ref="glasses" class="glasses_1 z-7 layer" />
        <!-- 嘴巴 -->
        <div ref="mouth" class="mouth_1 z-8 layer" />
        <!-- 頭髮 -->
        <div ref="hair" class="hair_1 z-9 layer" />
        <!-- 配件 -->
        <div ref="object" class="z-10 cake_1 layer" />
        <!-- 動物 -->
        <div ref="animal" class="animal_2 z-11 layer" />
      </div>
      <div class="flex items-center justify-center mx-auto mb-5 space-x-4">
        <button class="btn" type="button">
          隨機鈕
        </button>
        <button class="btn" type="button">
          完成！
        </button>
      </div>
    </div>
    <div class="w-full lg:w-7/12">
      <!-- 選項 -->
      <ul class="flex max-w-xs mx-auto mb-4 overflow-x-auto overflow-y-hidden text-center lg:flex-wrap lg:max-w-max">
        <li class="flex-1 mb-4 mr-4">
          <button :class="{'bg-purple-lighter': true}" class="w-16 py-2 m-0 font-black rounded-lg focus:outline-none">
            膚色
          </button>
        </li>
        <li class="flex-1 mb-4 mr-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            衣服
          </button>
        </li>
        <li class="flex-1 mb-4 mr-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            眼睛
          </button>
        </li>
        <li class="flex-1 mb-4 mr-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            眼鏡
          </button>
        </li>
        <li class="flex-1 mb-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            鼻子
          </button>
        </li>
        <li class="flex-1 mb-4 mr-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            嘴巴
          </button>
        </li>
        <li class="flex-1 mb-4 mr-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            頭髮
          </button>
        </li>
        <li class="flex-1 mb-4 mr-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            書本
          </button>
        </li>
        <li class="flex-1 mb-4 mr-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            配件
          </button>
        </li>
        <li class="flex-1 mb-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            動物
          </button>
        </li>
      </ul>

      <!-- 選項內容 -->
      <div class="bg-white">
        1
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/scss/material.scss'

export default {
  data () {
    return {
      // material
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  @apply px-4 py-2 text-xl font-black text-white border-2 border-white w-28 transition-colors duration-200 focus:outline-none hover:text-black hover:bg-white;
}

// 圖層樣式
.layer{
  @apply absolute inset-0 bg-center bg-cover w-full h-full;
}
</style>
