/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      purple: {
        default: '#585A78',
        light: '#5B5D6C',
        lighter: '#B7BCD5',
        dark: '#313241'
      },
      gray: {
        default: '#CBCBCB',
        light: '#E2E2E2',
        dark: '#636363',
        darker: '#242424'
      },
      red: {
        100: 'FFE2DD',
        200: 'F4CDBB',
        300: 'E3B3A6',
        400: 'D69280'
      },
      cyan: '#C6E4D6',
      yellow: '#EAF092',
      green: '#0FB5B1'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
