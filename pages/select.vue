<template>
  <div>
    <div>
      <img :src="avatarImage">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  computed: {
    avatarImage () {
      return this.$store.state.avatar
    }
  }
}
</script>
