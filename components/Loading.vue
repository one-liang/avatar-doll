<template>
  <div v-if="loading" class="loading-page">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: none; display: block; shape-rendering: auto;"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path d="M5 50A45 45 0 0 0 95 50A45 47.5 0 0 1 5 50" fill="#ffffff" stroke="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51.25;360 50 51.25"
        />
      </path>
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
  .loading-page {
    @apply fixed inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80 z-50;
  }
</style>
