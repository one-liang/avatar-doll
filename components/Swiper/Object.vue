<template>
  <SwiperMultiple name="object">
    <div
      class="swiper-slide"
      :class="{
        selected: 'cake' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'cake' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`cake_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('cake')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'charm' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'charm' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`charm_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('charm')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'coffee' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'coffee' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`coffee_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('coffee')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'flower' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'flower' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`flower_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('flower')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'lamp' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'lamp' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`lamp_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('lamp')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'magic' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'magic' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`magic_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('magic')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'pen' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'pen' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`pen_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('pen')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'tarot' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'tarot' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`tarot_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('tarot')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'lightbulb' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'lightbulb' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`lightbulb_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('lightbulb')"
        />
      </div>
    </div>
    <div
      class="swiper-slide"
      :class="{
        selected: 'UFO' === activeItem,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'UFO' === activeItem,
        }"
        class="relative w-20 h-20 overflow-hidden bg-white border-2 rounded-full border-gray-dark"
      >
        <button
          :class="`UFO_1`"
          class="relative w-20 h-20 transform translate-x-2 bg-center bg-no-repeat bg-cover focus:outline-none"
          type="button"
          @click="onClick('UFO')"
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
      this.$store.commit('changeObject', item)
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
