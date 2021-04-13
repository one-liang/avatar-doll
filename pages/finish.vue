<template>
  <div>
    <div class="flex items-end justify-center mb-5 lg:mb-3 lg:justify-start">
      <img class="object-cover w-24 h-24 mr-4 lg:w-36 lg:h-36" src="/avatar-doll/other/mainpic-mirror-small.png" alt="似顏繪">
      <div class="">
        <h2 class="text-3xl !leading-tight tracking-widest text-white lg:text-5xl">
          任你揮灑
        </h2>
        <h1 class="text-3xl font-black !leading-tight tracking-widest lg:text-5xl text-yellow">
          似顏繪
        </h1>
      </div>
    </div>
    <div class="flex flex-wrap py-1 rounded-lg lg:py-10 lg:bg-black lg:px-6 lg:bg-opacity-40 min-h-80 content">
      <div class="flex flex-col items-center w-full pb-5 lg:pt-5 lg:w-5/12">
        <!-- avatar -->
        <div class="avatar">
          <img :src="avatarImage">
        </div>
      </div>

      <div class="w-full px-0 pt-3 pb-8 text-center lg:py-3 lg:w-7/12 sm:max-w-full max-w-screen-xs col-md-7 col-12 py-md-4 pl-md-0 pr-md-3">
        <h2 class="text-4xl font-black tracking-widest text-center text-purple-lighter">
          恭喜您
        </h2>
        <h3 class="mb-1 text-2xl font-black leading-normal tracking-wider text-center text-purple-lighter">
          您的大頭貼完成了！
        </h3>
        <p class="text-center text-white ">
          是不是非常可愛呢？
        </p>
        <div class="text-center">
          <img class="w-40 mx-auto" src="/avatar-doll/other/gift-pins.png">
        </div>
        <h3 class="mb-4 text-lg font-black text-yellow l">
          <span class="text-2xl">客製化風格</span>
          <br>希望您會喜歡，點選下方可再玩一次
        </h3>
        <NuxtLink to="/" class="block mx-auto btn">
          再一次
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Finish',
  computed: {
    avatarImage () {
      return this.$store.state.avatar
    }
  }
}
</script>

<style scoped>
.avatar {
  outline: 8px solid #E2E2E2;
}

.content {
  width: 375px;
}

@screen lg {
  .content {
    width: 768px;
  }
}
</style>
