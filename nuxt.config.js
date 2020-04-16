const SITE_NAME = 'LAN Bizhong'
const SITE_DESCRIPTION = "LAN Bizhong's personal website"
const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://lanbizhong.com'
    : 'http://localhost:3000'

process.env.npm_package_name = SITE_NAME
process.env.npm_package_description = SITE_DESCRIPTION

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
    title: SITE_NAME,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { 'http-equiv': 'Cache-Control', content: 'no-siteapp' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover'
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
      { name: 'application-name', content: SITE_NAME },
      { hid: 'description', name: 'description', content: SITE_DESCRIPTION },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tooltip', content: SITE_NAME },
      { name: 'msapplication-starturl', content: `${SITE_URL}/` },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { itemprop: 'name', content: SITE_NAME },
      { itemprop: 'description', content: SITE_DESCRIPTION },
      { itemprop: 'image', content: `${SITE_URL}/icon.png` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i&display=swap'
      },
      { rel: 'canonical', href: `${SITE_URL}/` }
    ],
    script: [
      {
        src: 'https://hm.baidu.com/hm.js?5d25fff5fe2d57f369a0391ee2a2b8e6',
        async: true,
        defer: true
      }
    ],
    bodyAttrs: {
      ontouchstart: ''
    }
  },
  /*
   ** Env configuration
   */
  env: {
    SITE_NAME,
    SITE_DESCRIPTION,
    SITE_URL
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1a73e8', failedColor: '#c53929' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/lbzui/index.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/lbzui.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    [
      '@nuxtjs/browserconfig',
      {
        TileColor: '#1a73e8',
        square150x150logo: { '@': { src: 'icon.png' } }
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-139218842-1',
        debug: {
          enabled: true,
          sendHitTask: true
        }
      }
    ],
    '@nuxtjs/style-resources',
    '@nuxtjs/svg'
  ],
  /*
   ** Style Resources module configuration
   ** See https://github.com/nuxt-community/style-resources-module
   */
  styleResources: {
    less: [
      // variables
      // './node_modules/@lbzui/vue/src/assets/css/variables/_*.less',
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
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** PWA module configuration
   ** See https://pwa.nuxtjs.org/
   */
  pwa: {
    workbox: {
      offlineAnalytics: true,
      workboxExtensions: '~/plugins/workbox/workbox.js',
      cachingExtensions: '~/plugins/workbox/caching.js',
      routingExtensions: '~/plugins/workbox/routing.js'
    },
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: 'default',
      ogHost: SITE_URL,
      ogUrl: `${SITE_URL}/`,
      twitterCard: 'summary',
      twitterSite: '@lanbizhong',
      twitterCreator: '@lanbizhong'
    },
    manifest: {
      dir: 'ltr',
      orientation: 'portrait'
    }
  },
  /*
   ** Router configuration
   */
  router: {
    linkExactActiveClass: 'lbz-is-activated'
  },
  /*
   ** Generate configuration
   */
  generate: {
    fallback: true, // if you want to use '404.html' instead of the default '200.html'
    interval: 100
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['@lbzui/vue'],
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-pxtorem': {
          unitPrecision: 8,
          propList: ['font', 'font-size', 'line-height']
        }
      },
      preset: {
        // Change the postcss-preset-env settings
        stage: 3,
        autoprefixer: {
          flexbox: 'no-2009',
          grid: 'no-autoplace'
        },
        importFrom: ['./assets/css/lbzui/variables.css']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
