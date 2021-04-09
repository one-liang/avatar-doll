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
          // const img = new Image()
          this.$store.commit('domToImage', dataUrl)
          // img.src = dataUrl
          // document.body.appendChild(img)
          this.$router.push('/select')
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.error('oops, something went wrong!', error)
        })
    }
  }
}
</script>
