<template>
  <div ref="multiple" class="swiper-container">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div :id="`${name}-prev`" class="swiper-button-prev swiper-button-white" />
    <div :id="`${name}-next`" class="swiper-button-next swiper-button-white" />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'SwiperMultiple',
  props: {
    name: {
      type: String,
      default: 'swiper'
    }
  },
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.swiper = new Swiper(this.$refs.multiple, {
      slidesPerView: 'auto',
      slidesPerColumn: 2,
      spaceBetween: 14,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: `#${this.name}-next`,
        prevEl: `#${this.name}-prev`
      },
      breakpoints: {
        767: {
          touchRatio: 0
          // spaceBetween: 12
        }
      }
    })
  }
}
</script>

<style scoped>
.swiper-container {
  @apply h-44 px-5 !important;
}
::v-deep .swiper-wrapper {
  @apply justify-center mx-auto;
}
::v-deep .swiper-button-prev,
::v-deep .swiper-button-next {
  @apply hidden;

  &::after {
    @apply text-xl;
  }

  &:focus {
    @apply outline-none;
  }
}
::v-deep .swiper-button-prev {
  @apply left-0;
}
::v-deep .swiper-button-next {
  @apply right-0;
}

@screen lg {
  ::v-deep .swiper-button-prev,
  ::v-deep .swiper-button-next {
    @apply flex;
  }
}
</style>
