<template>
  <button class="btn" type="button" @click="onClick">
    隨機鈕
  </button>
</template>

<script>
export default {
  name: 'RandomBtn',
  methods: {
    onClick () {
      this.$store.commit('randomAvatar')
    }
  }
}
</script>
