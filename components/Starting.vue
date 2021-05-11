<template>
  <div :class="{'close': closeClass}" class="fixed inset-0 z-50 w-screen h-screen bg-gray-darker">
    <button class="wrapper" type="button" @click="start">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect class="shape" height="60" width="320" />
      </svg>
      <div class="relative text-xl leading-8 tracking-widest text-center text-white -top-12">
        似顏繪開始
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Starting',
  props: {
    close: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      closeClass: false
    }
  },
  methods: {
    start () {
      this.closeClass = true
      setTimeout(() => {
        this.$emit('update:close', true)
      }, 500)
    }
  }
}
</script>

<style scoped>
.wrapper {
  @apply mx-auto w-80 block relative top-1/2 transform -translate-y-1/2 focus:outline-none;
}

.shape {
  @apply stroke-current text-purple-lighter fill-current;

  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  fill: transparent;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
}

.wrapper:hover .shape {
  stroke-width: 2px;
  stroke-dashoffset: 0;
  stroke-dasharray: 760;
}

.close {
  @apply select-none transition-opacity opacity-0 duration-500;
}
</style>
