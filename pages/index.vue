<template>
  <div
    class="flex flex-wrap py-10 rounded-lg lg:bg-black lg:px-6 lg:bg-opacity-40 min-h-80"
  >
    <div class="flex flex-col items-center justify-center w-full lg:w-5/12">
      <!-- avatar -->
      <Avatar />
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
      <ul
        class="flex mx-auto overflow-x-auto overflow-y-hidden text-center max-w-screen lg:mb-4 lg:flex-wrap lg:max-w-max"
      >
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button
            :class="[tab === 'skin' ? 'bg-purple-lighter' : 'bg-purple-light']"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'skin'"
          >
            膚色
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button
            :class="[tab === 'body' ? 'bg-purple-lighter' : 'bg-purple-light']"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'body'"
          >
            衣服
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button
            :class="[tab === 'eyes' ? 'bg-purple-lighter' : 'bg-purple-light']"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'eyes'"
          >
            眼睛
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button
            :class="[
              tab === 'glasses' ? 'bg-purple-lighter' : 'bg-purple-light',
            ]"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'glasses'"
          >
            眼鏡
          </button>
        </li>
        <li class="flex-1 lg:mb-4">
          <button
            :class="[tab === 'nose' ? 'bg-purple-lighter' : 'bg-purple-light']"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'nose'"
          >
            鼻子
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button
            :class="[tab === 'mouth' ? 'bg-purple-lighter' : 'bg-purple-light']"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'mouth'"
          >
            嘴巴
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button
            :class="[tab === 'hair' ? 'bg-purple-lighter' : 'bg-purple-light']"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'hair'"
          >
            頭髮
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button
            :class="[tab === 'book' ? 'bg-purple-lighter' : 'bg-purple-light']"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'book'"
          >
            書本
          </button>
        </li>
        <li class="flex-1 lg:mr-4 lg:mb-4">
          <button
            :class="[
              tab === 'object' ? 'bg-purple-lighter' : 'bg-purple-light',
            ]"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'object'"
          >
            配件
          </button>
        </li>
        <li class="flex-1 lg:mb-4">
          <button
            :class="[
              tab === 'animal' ? 'bg-purple-lighter' : 'bg-purple-light',
            ]"
            class="w-24 py-2 m-0 font-black rounded-t-lg lg:w-16 lg:rounded-lg focus:outline-none"
            @click="tab = 'animal'"
          >
            動物
          </button>
        </li>
      </ul>

      <!-- 選項內容 -->
      <div class="h-full max-w-sm py-4 mx-auto lg:max-w-full bg-purple-lighter lg:bg-transparent">
        <keep-alive>
          <SwiperSkin v-if="tab === 'skin'" />
          <SwiperBody v-else-if="tab === 'body'" />
          <SwiperEyes v-else-if="tab === 'eyes'" />
          <SwiperGlasses v-else-if="tab === 'glasses'" />
          <SwiperNose v-else-if="tab === 'nose'" />
          <SwiperMouth v-else-if="tab === 'mouth'" />
          <SwiperHair v-else-if="tab === 'hair'" />
          <SwiperBook v-else-if="tab === 'book'" />
          <SwiperObject v-else-if="tab === 'object'" />
          <SwiperAnimal v-else-if="tab === 'animal'" />
        </keep-alive>
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
