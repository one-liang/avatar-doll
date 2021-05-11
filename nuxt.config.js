export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/avatar-doll/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '【似顏繪】手繪頭像',
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '手繪製作專屬個人風格的頭像' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '【似顏繪】手繪頭像'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
        '手繪製作專屬個人風格的頭像'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: '【似顏繪】手繪頭像'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/avatar-doll/other/mainpic-mirror.png'
      },
      {
        hid: 'og:image:type',
        name: 'og:image:type',
        content: 'image/png'
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '640'
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '640'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/avatar-doll/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/material'],

  loading: '~/components/Loading.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    jit: true
  }
}
