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
        .then(function (dataUrl) {
          const img = new Image()
          img.src = dataUrl
          document.body.appendChild(img)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.error('oops, something went wrong!', error)
        })
    }
  }
}
</script>
