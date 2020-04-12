process.env.npm_package_name = 'LAN Bizhong'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { 'http-equiv': 'Cache-Control', content: 'no-siteapp' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover'
      },
      { name: 'renderer', content: 'webkit' },
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'x5-page-mode', content: 'app' },
      { name: 'screen-orientation', content: 'portrait' },
      { name: 'full-screen', content: 'yes' },
      { name: 'imagemode', content: 'force' },
      { name: 'browsermode', content: 'application' },
      { name: 'nightmode', content: 'disable' },
      { name: 'layoutmode', content: 'fitscreen' },
      { name: 'wap-font-scale', content: 'no' },
      { name: 'application-name', content: process.env.npm_package_name || '' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default'
      },
      { name: 'msapplication-tap-highlight', content: 'no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons&display=block'
      }
    ],
    bodyAttrs: {
      ontouchstart: ''
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1a73e8' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/lbzui/index.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/lbzui.ts'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-139218842-1',
        debug: {
          enabled: true,
          sendHitTask: true
        }
      }
    ]
  ],

  styleResources: {
    less: [
      // variables
      './node_modules/@lbzui/vue/src/assets/css/variables/_elevation.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_layout-grid.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_motion.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_shape.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_state.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_surface.less',
      './assets/css/lbzui/_theme.less',
      // mixins
      './node_modules/@lbzui/vue/src/assets/css/utilities/_*.less'
    ]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  router: {
    linkExactActiveClass: 'lbz-is-activated',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          unitPrecision: 8,
          propList: ['font', 'font-size', 'line-height']
        }
      },
      preset: {
        'postcss-preset-env': {
          stage: 3,
          autoprefixer: {
            flexbox: 'no-2009',
            grid: 'no-autoplace'
          },
          importFrom: ['./assets/css/lbzui/variables.css']
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
