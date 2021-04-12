<template>
  <div>
    <div>
      <img :src="avatarImage">
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
