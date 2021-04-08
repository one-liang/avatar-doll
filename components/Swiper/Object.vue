<template>
  <SwiperMultiple name="object">
    <div
      v-for="cake in 4"
      :key="`cake_${cake}`"
      class="swiper-slide"
      :class="{
        selected: `cake_${cake}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `cake_${cake}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`cake_${cake}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`cake_${cake}`)"
        />
      </div>
    </div>
    <div
      v-for="charm in 4"
      :key="`charm_${charm}`"
      class="swiper-slide"
      :class="{
        selected: `charm_${charm}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `charm_${charm}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`charm_${charm}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`charm_${charm}`)"
        />
      </div>
    </div>
    <div
      v-for="coffee in 4"
      :key="`coffee_${coffee}`"
      class="swiper-slide"
      :class="{
        selected: `coffee_${coffee}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `coffee_${coffee}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`coffee_${coffee}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`coffee_${coffee}`)"
        />
      </div>
    </div>
    <div
      v-for="flower in 4"
      :key="`flower_${flower}`"
      class="swiper-slide"
      :class="{
        selected: `flower_${flower}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `flower_${flower}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`flower_${flower}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`flower_${flower}`)"
        />
      </div>
    </div>
    <div
      v-for="lamp in 4"
      :key="`lamp_${lamp}`"
      class="swiper-slide"
      :class="{
        selected: `lamp_${lamp}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `lamp_${lamp}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`lamp_${lamp}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`lamp_${lamp}`)"
        />
      </div>
    </div>
    <div
      v-for="magic in 4"
      :key="`magic_${magic}`"
      class="swiper-slide"
      :class="{
        selected: `magic_${magic}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `magic_${magic}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`magic_${magic}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`magic_${magic}`)"
        />
      </div>
    </div>
    <div
      v-for="pen in 4"
      :key="`pen_${pen}`"
      class="swiper-slide"
      :class="{
        selected: `pen_${pen}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `pen_${pen}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`pen_${pen}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`pen_${pen}`)"
        />
      </div>
    </div>
    <div
      v-for="tarot in 4"
      :key="`tarot_${tarot}`"
      class="swiper-slide"
      :class="{
        selected: `tarot_${tarot}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `tarot_${tarot}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`tarot_${tarot}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`tarot_${tarot}`)"
        />
      </div>
    </div>
    <div
      v-for="lightbulb in 1"
      :key="`lightbulb_${lightbulb}`"
      class="swiper-slide"
      :class="{
        selected: `lightbulb_${lightbulb}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `lightbulb_${lightbulb}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`lightbulb_${lightbulb}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`lightbulb_${lightbulb}`)"
        />
      </div>
    </div>
    <div
      v-for="UFO in 1"
      :key="`UFO_${UFO}`"
      class="swiper-slide"
      :class="{
        selected: `UFO_${UFO}` === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': `UFO_${UFO}` === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`UFO_${UFO}`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick(`UFO_${UFO}`)"
        />
      </div>
    </div>
  </SwiperMultiple>
</template>

<script>
export default {
  name: 'SwiperObject',
  data () {
    return {
      activeItem: null
    }
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('object: ', item)
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
