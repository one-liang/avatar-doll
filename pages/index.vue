<template>
  <div class="flex flex-wrap py-10 rounded-lg lg:bg-black lg:px-6 lg:bg-opacity-40 min-h-80">
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
      <ul class="flex mx-auto overflow-x-auto overflow-y-hidden text-center max-w-screen lg:mb-4 lg:flex-wrap lg:max-w-max">
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button :class="[tab === 'skin' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'skin'">
            膚色
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button :class="[tab === 'body' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'body'">
            衣服
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button :class="[tab === 'eyes' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'eyes'">
            眼睛
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button :class="[tab === 'glasses' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'glasses'">
            眼鏡
          </button>
        </li>
        <li class="flex-1 lg:mb-4">
          <button :class="[tab === 'nose' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'nose'">
            鼻子
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button :class="[tab === 'mouth' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'mouth'">
            嘴巴
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button :class="[tab === 'hair' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'hair'">
            頭髮
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button :class="[tab === 'book' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'book'">
            書本
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button :class="[tab === 'object' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'object'">
            配件
          </button>
        </li>
        <li class="flex-1 lg:mb-4">
          <button :class="[tab === 'animal' ? 'bg-purple-lighter' : 'bg-purple-light']" class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none" @click="tab = 'animal'">
            動物
          </button>
        </li>
      </ul>

      <!-- 選項內容 -->
      <div class="py-4 mx-auto bg-purple-lighter lg:bg-transparent">
        <SwiperSkin v-if="tab === 'skin'" />
        <SwiperBody v-else-if="tab === 'body'" />
        <SwiperMouth v-else-if="tab === 'mouth'" />
        <SwiperGlasses v-else-if="tab === 'glasses'" />
        <SwiperNose v-else-if="tab === 'nose'" />
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/material.css'

export default {
  data () {
    return {
      tab: 'skin'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  @apply px-4 py-2 text-xl font-black text-white border-2 border-white w-28 transition-colors duration-200 focus:outline-none hover:text-black hover:bg-white;
}

// 圖層樣式
.layer {
  @apply absolute inset-0 bg-center bg-cover w-full h-full;
}
</style>
