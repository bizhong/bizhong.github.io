const path = require('path')
const LBZUI_CSS_PATH = 'node_modules/@lbzui/vue/src/assets/css/'

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

process.env.VUE_APP_SITE_URL = process.env.NODE_ENV === 'production'
  ? 'https://lanbizhong.com/'
  : '/'

module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    },
    name: 'LAN Bizhong',
    themeColor: '#3367d6',
    msTileColor: '#fff',
    appleMobileWebAppCapable: 'yes',
    manifestOptions: {
      dir: 'ltr',
      lang: 'en',
      description: 'LAN Bizhong\'s personal website',
      background_color: '#fff',
      orientation: 'any',
      icons: [
        {
          src: './img/logo/pwa/192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/logo/pwa/512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    iconPaths: {
      favicon32: 'img/logo/favicon/32x32.png',
      favicon16: 'img/logo/favicon/16x16.png',
      appleTouchIcon: 'img/logo/apple/180x180.png',
      maskIcon: 'img/logo/apple/16x16.svg',
      msTileImage: 'img/logo/ms/144x144.png'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // variables
        resolve(`${LBZUI_CSS_PATH}variables/_layout-grid.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_motion.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_shape.less`),
        resolve(`${LBZUI_CSS_PATH}variables/_state.less`),
        resolve('src/assets/css/lbzui/_theme.less'),

        // mixins
        resolve(`${LBZUI_CSS_PATH}mixins/*.less`)
      ]
    }
  }
}
