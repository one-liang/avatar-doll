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
      <ul class="flex max-w-xs mx-auto overflow-x-auto overflow-y-hidden lg:flex-wrap lg:max-w-max">
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
        <li class="flex-1 mb-4 mr-4">
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
        <li class="flex-1 mb-4 mr-4">
          <button class="w-16 py-2 m-0 font-black rounded-lg bg-purple-light focus:outline-none">
            動物
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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

// --------
// 素材
// --------

// 膚色
.skin_1 {
  @apply bg-red-100;
}

.skin_2 {
  @apply bg-red-200;
}

.skin_3 {
  @apply bg-red-300;
}

.skin_4 {
  @apply bg-red-400;
}

// 身體
.body_1 {
  background-image: url('/01_body/body_01.png');
}

.body_2 {
  background-image: url('/01_body/body_02.png');
}

.body_3 {
  background-image: url('/01_body/body_03.png');
}

.body_4 {
  background-image: url('/01_body/body_04.png');
}

.body_5 {
  background-image: url('/01_body/body_05.png');
}

.body_6 {
  background-image: url('/01_body/body_06.png');
}

.body_7 {
  background-image: url('/01_body/body_07.png');
}

.body_8 {
  background-image: url('/01_body/body_08.png');
}

// 頭
.head_1 {
  background-image: url('/02_head/head_01.png');
}

.head_2 {
  background-image: url('/02_head/head_02.png');
}

.head_3 {
  background-image: url('/02_head/head_03.png');
}

.head_4 {
  background-image: url('/02_head/head_04.png');
}

// 書本
.book_1 {
  background-image: url('/03_book/book_01.png');
}

.book_2 {
  background-image: url('/03_book/book_02.png');
}

.book_3 {
  background-image: url('/03_book/book_03.png');
}

.book_4 {
  background-image: url('/03_book/book_04.png');
}

.book_5 {
  background-image: url('/03_book/book_05.png');
}

.book_6 {
  background-image: url('/03_book/book_06.png');
}

.book_7 {
  background-image: url('/03_book/book_07.png');
}

.book_8 {
  background-image: url('/03_book/book_08.png');
}

.book_9 {
  background-image: url('/03_book/book_09.png');
}

.book_10 {
  background-image: url('/03_book/book_10.png');
}

.book_11 {
  background-image: url('/03_book/book_11.png');
}

.book_12 {
  background-image: url('/03_book/book_12.png');
}

// 左手
.left-hand_1 {
  background-image: url('/04_lefthand/lefthand_01.png');
}

.left-hand_2 {
  background-image: url('/04_lefthand/lefthand_02.png');
}

.left-hand_3 {
  background-image: url('/04_lefthand/lefthand_03.png');
}

.left-hand_4 {
  background-image: url('/04_lefthand/lefthand_04.png');
}

// 鼻子
.nose_1 {
  background-image: url('/05_nose/nose_01.png');
}

.nose_2 {
  background-image: url('/05_nose/nose_02.png');
}

.nose_3 {
  background-image: url('/05_nose/nose_03.png');
}

.nose_4 {
  background-image: url('/05_nose/nose_04.png');
}

.nose_5 {
  background-image: url('/05_nose/nose_05.png');
}

.nose_6 {
  background-image: url('/05_nose/nose_06.png');
}

.nose_7 {
  background-image: url('/05_nose/nose_07.png');
}

.nose_8 {
  background-image: url('/05_nose/nose_08.png');
}

// 眼睛
.eyes_1 {
  background-image: url('/06_eye/eyes_01.png');
}

.eyes_2 {
  background-image: url('/06_eye/eyes_02.png');
}

.eyes_3 {
  background-image: url('/06_eye/eyes_03.png');
}

.eyes_4 {
  background-image: url('/06_eye/eyes_04.png');
}

.eyes_5 {
  background-image: url('/06_eye/eyes_05.png');
}

.eyes_6 {
  background-image: url('/06_eye/eyes_06.png');
}

.eyes_7 {
  background-image: url('/06_eye/eyes_07.png');
}

.eyes_8 {
  background-image: url('/06_eye/eyes_08.png');
}

.eyes_9 {
  background-image: url('/06_eye/eyes_09.png');
}

.eyes_10 {
  background-image: url('/06_eye/eyes_10.png');
}

.eyes_11 {
  background-image: url('/06_eye/eyes_11.png');
}

.eyes_12 {
  background-image: url('/06_eye/eyes_12.png');
}

// 眼鏡
.glasses_1 {
  background-image: url('/07_glasses/glasses_01.png');
}

.glasses_2 {
  background-image: url('/07_glasses/glasses_02.png');
}

.glasses_3 {
  background-image: url('/07_glasses/glasses_03.png');
}

.glasses_4 {
  background-image: url('/07_glasses/glasses_04.png');
}

.glasses_5 {
  background-image: url('/07_glasses/glasses_05.png');
}

.glasses_6 {
  background-image: url('/07_glasses/glasses_06.png');
}

.glasses_7 {
  background-image: url('/07_glasses/glasses_07.png');
}

.glasses_8 {
  background-image: url('/07_glasses/glasses_08.png');
}

// 嘴巴
.mouth_1 {
  background-image: url('/08_mouth/mouth_01.png');
}

.mouth_2 {
  background-image: url('/08_mouth/mouth_02.png');
}

.mouth_3 {
  background-image: url('/08_mouth/mouth_03.png');
}

.mouth_4 {
  background-image: url('/08_mouth/mouth_04.png');
}

.mouth_5 {
  background-image: url('/08_mouth/mouth_05.png');
}

.mouth_6 {
  background-image: url('/08_mouth/mouth_06.png');
}

.mouth_7 {
  background-image: url('/08_mouth/mouth_07.png');
}

.mouth_8 {
  background-image: url('/08_mouth/mouth_08.png');
}

.mouth_9 {
  background-image: url('/08_mouth/mouth_09.png');
}

.mouth_10 {
  background-image: url('/08_mouth/mouth_10.png');
}

.mouth_11 {
  background-image: url('/08_mouth/mouth_11.png');
}

.mouth_12 {
  background-image: url('/08_mouth/mouth_12.png');
}

// 頭髮

.hair_1 {
  // -webkit-mask-image: url('/09_hair/hair-1-2.png');

  /**&::after {
    background-image: url('/09_hair/hair-1-1.png');
  }**/
}

.hair_1 {
  background-image: url('/12_hair/hair_01.png');
}

.hair_2 {
  background-image: url('/12_hair/hair_02.png');
}

.hair_3 {
  background-image: url('/12_hair/hair_03.png');
}

.hair_4 {
  background-image: url('/12_hair/hair_04.png');
}

.hair_5 {
  background-image: url('/12_hair/hair_05.png');
}

.hair_6 {
  background-image: url('/12_hair/hair_06.png');
}

.hair_7 {
  background-image: url('/12_hair/hair_07.png');
}

.hair_8 {
  background-image: url('/12_hair/hair_08.png');
}

.hair_9 {
  background-image: url('/12_hair/hair_09.png');
}

.hair_10 {
  background-image: url('/12_hair/hair_10.png');
}

.hair_11 {
  background-image: url('/12_hair/hair_11.png');
}

.hair_12 {
  background-image: url('/12_hair/hair_12.png');
}

.hair_13 {
  background-image: url('/12_hair/hair_13.png');
}

.hair_14 {
  background-image: url('/12_hair/hair_14.png');
}

.hair_15 {
  background-image: url('/12_hair/hair_15.png');
}

.hair_16 {
  background-image: url('/12_hair/hair_16.png');
}

.hair_17 {
  background-image: url('/12_hair/hair_17.png');
}

.hair_18 {
  background-image: url('/12_hair/hair_18.png');
}

.hair_19 {
  background-image: url('/12_hair/hair_19.png');
}

.hair_20 {
  background-image: url('/12_hair/hair_20.png');
}

// 物件
.UFO_1 {
  background-image: url('/10_object/UFO.png');
}

.UFO_2 {
  background-image: url('/10_object/UFO.png');
}

.UFO_3 {
  background-image: url('/10_object/UFO.png');
}

.UFO_4 {
  background-image: url('/10_object/UFO.png');
}

.lightbulb_1 {
  background-image: url('/10_object/lightbulb.png');
}

.lightbulb_2 {
  background-image: url('/10_object/lightbulb.png');
}

.lightbulb_3 {
  background-image: url('/10_object/lightbulb.png');
}

.lightbulb_4 {
  background-image: url('/10_object/lightbulb.png');
}

.cake_1 {
  background-image: url('/10_object/cake_01.png');
}

.cake_2 {
  background-image: url('/10_object/cake_02.png');
}

.cake_3 {
  background-image: url('/10_object/cake_03.png');
}

.cake_4 {
  background-image: url('/10_object/cake_04.png');
}

.charm_1 {
  background-image: url('/10_object/charm_01.png');
}

.charm_2 {
  background-image: url('/10_object/charm_02.png');
}

.charm_3 {
  background-image: url('/10_object/charm_03.png');
}

.charm_4 {
  background-image: url('/10_object/charm_04.png');
}

.coffee_1 {
  background-image: url('/10_object/coffee_01.png');
}

.coffee_2 {
  background-image: url('/10_object/coffee_02.png');
}

.coffee_3 {
  background-image: url('/10_object/coffee_03.png');
}

.coffee_4 {
  background-image: url('/10_object/coffee_04.png');
}

.flower_1 {
  background-image: url('/10_object/flower_01.png');
}

.flower_2 {
  background-image: url('/10_object/flower_02.png');
}

.flower_3 {
  background-image: url('/10_object/flower_03.png');
}

.flower_4 {
  background-image: url('/10_object/flower_04.png');
}

.lamp_1 {
  background-image: url('/10_object/lamp_01.png');
}

.lamp_2 {
  background-image: url('/10_object/lamp_02.png');
}

.lamp_3 {
  background-image: url('/10_object/lamp_03.png');
}

.lamp_4 {
  background-image: url('/10_object/lamp_04.png');
}

.magic_1 {
  background-image: url('/10_object/magic_01.png');
}

.magic_2 {
  background-image: url('/10_object/magic_02.png');
}

.magic_3 {
  background-image: url('/10_object/magic_03.png');
}

.magic_4 {
  background-image: url('/10_object/magic_04.png');
}

.pen_1 {
  background-image: url('/10_object/pen_01.png');
}

.pen_2 {
  background-image: url('/10_object/pen_02.png');
}

.pen_3 {
  background-image: url('/10_object/pen_03.png');
}

.pen_4 {
  background-image: url('/10_object/pen_04.png');
}

.tarot_1 {
  background-image: url('/10_object/tarot_01.png');
}

.tarot_2 {
  background-image: url('/10_object/tarot_02.png');
}

.tarot_3 {
  background-image: url('/10_object/tarot_03.png');
}

.tarot_4 {
  background-image: url('/10_object/tarot_04.png');
}

// 動物
.animal_1 {
  background-image: url('/11_animal/animal_01.png');
}

.animal_2 {
  background-image: url('/11_animal/animal_02.png');
}

.animal_3 {
  background-image: url('/11_animal/animal_03.png');
}

.animal_4 {
  background-image: url('/11_animal/animal_04.png');
}

.animal_5 {
  background-image: url('/11_animal/animal_05.png');
}

.animal_6 {
  background-image: url('/11_animal/animal_06.png');
}

.animal_7 {
  background-image: url('/11_animal/animal_07.png');
}

.animal_8 {
  background-image: url('/11_animal/animal_08.png');
}

.animal_9 {
  background-image: url('/11_animal/animal_09.png');
}

.animal_10 {
  background-image: url('/11_animal/animal_10.png');
}

.animal_11 {
  background-image: url('/11_animal/animal_11.png');
}

.animal_12 {
  background-image: url('/11_animal/animal_12.png');
}
</style>
