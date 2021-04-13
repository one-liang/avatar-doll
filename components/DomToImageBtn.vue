<template>
  <button class="btn" type="button" @click="onClick">
    完成！
  </button>
</template>

<script>
import domtoimage from 'dom-to-image'

export default {
  name: 'DomToImageBtn',
  methods: {
    onClick () {
      const avatar = document.querySelector('#avatar')
      domtoimage
        .toPng(avatar)
        .then((dataUrl) => {
          this.$store.commit('domToImage', dataUrl)
          this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => {
              this.$nuxt.$loading.finish()
              this.$router.push('/finish')
            }, 1000)
          })
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.error('oops, something went wrong!', error)
        })
    }
  }
}
</script>
