<template>
  <SwiperMultiple name="object">
    <div
      class="swiper-slide"
      :class="{
        selected: 'cake' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'cake' === objectClass,
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
        selected: 'charm' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'charm' === objectClass,
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
        selected: 'coffee' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'coffee' === objectClass,
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
        selected: 'flower' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'flower' === objectClass,
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
        selected: 'lamp' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'lamp' === objectClass,
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
        selected: 'magic' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'magic' === objectClass,
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
        selected: 'pen' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'pen' === objectClass,
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
        selected: 'tarot' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'tarot' === objectClass,
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
        selected: 'lightbulb' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'lightbulb' === objectClass,
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
        selected: 'UFO' === objectClass,
      }"
    >
      <div
        :class="{
          'selected__wrap': 'UFO' === objectClass,
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
import { mapGetters } from 'vuex'

export default {
  name: 'SwiperObject',
  computed: {
    ...mapGetters(['objectClass'])
  },
  methods: {
    onClick (item) {
      // eslint-disable-next-line no-console
      console.log('object: ', item)
      this.$store.commit('changeObject', item)
    }
  }
}
</script>

<style scoped>
::v-deep .swiper-slide {
  @apply w-20 h-20 !important;
}
</style>
