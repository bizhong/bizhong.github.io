const isProduction = process.env.NODE_ENV === 'production'
const custom = {
  // Mandatory
  name: 'LAN Bizhong',
  description: "LAN Bizhong's personal website",
  url: isProduction ? 'https://lanbizhong.com' : 'http://localhost:3000',
  color: {
    primary: '#1a73e8',
    error: '#c53929',
    theme: '#121212'
  },

  // Optional
  analytics: {
    google: 'UA-139218842-1', // npm uni @nuxtjs/google-analytics
    baidu: '5d25fff5fe2d57f369a0391ee2a2b8e6'
  },
  twitter: {
    card: 'summary', // undefined
    site: '@lanbizhong', // undefined
    creator: '@lanbizhong' // undefined
  }
}

process.env.npm_package_name = custom.name
process.env.npm_package_description = custom.description

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    htmlAttrs: {
      lang: 'en',
      dir: 'ltr',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: custom.name,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
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
      { name: 'application-name', content: custom.name },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      // { name: 'google', content: 'notranslate' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tooltip', content: custom.name },
      { name: 'msapplication-starturl', content: `${custom.url}/` },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { hid: 'name', itemprop: 'name', content: custom.name },
      {
        hid: 'description',
        name: 'description',
        itemprop: 'description',
        content: custom.description
      },
      { hid: 'image', itemprop: 'image', content: `${custom.url}/icon.png` }
    ],
    link: [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://hm.baidu.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      },
      { hid: 'canonical', rel: 'canonical', href: `${custom.url}/` }
    ],
    script: [
      {
        src: `https://hm.baidu.com/hm.js?${custom.analytics.baidu}`,
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
    SITE_NAME: custom.name,
    SITE_DESCRIPTION: custom.description,
    SITE_URL: custom.url
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: custom.color.primary, failedColor: custom.color.error },
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
        TileColor: custom.color.primary,
        square150x150logo: { '@': { src: 'icon.png' } }
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: custom.analytics.google,
        debug: {
          sendHitTask: isProduction
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
      // './node_modules/@lbzui/vue/src/assets/css/variables/_layout-grid.less',
      './assets/css/lbzui/_layout-grid.less', // your custom layout grid
      './node_modules/@lbzui/vue/src/assets/css/variables/_motion.less',
      // './node_modules/@lbzui/vue/src/assets/css/variables/_shape.less',
      './assets/css/lbzui/_shape.less', // your custom shape
      './node_modules/@lbzui/vue/src/assets/css/variables/_state.less',
      './node_modules/@lbzui/vue/src/assets/css/variables/_surface.less',
      // './node_modules/@lbzui/vue/src/assets/css/variables/_theme.less',
      './assets/css/lbzui/_theme.less', // your custom theme

      // mixins
      './node_modules/@lbzui/vue/src/assets/css/utilities/_*.less'
    ]
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** PWA module configuration
   ** See https://pwa.nuxtjs.org/setup.html
   */
  pwa: {
    workbox: {
      offlineAnalytics: true,
      workboxExtensions: '~/plugins/pwa/workbox.js',
      cachingExtensions: '~/plugins/pwa/caching.js',
      routingExtensions: '~/plugins/pwa/routing.js'
    },
    meta: {
      mobileAppIOS: true,
      theme_color: custom.color.theme,
      ogHost: custom.url,
      ogUrl: `${custom.url}/`,
      twitterCard: custom.twitter.card,
      twitterSite: custom.twitter.site,
      twitterCreator: custom.twitter.creator
    },
    manifest: {
      dir: 'ltr',
      orientation: 'portrait',
      theme_color: custom.color.theme
    }
  },
  /*
   ** Router configuration
   */
  router: {
    // Globally configure `<router-link>` default active class for exact matches
    linkExactActiveClass: 'lbz-is-activated'
  },
  /*
   ** Generate configuration
   */
  generate: {
    fallback: true, // If you want to use '404.html' instead of the default '200.html'
    interval: 100
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['@lbzui/vue'],
    postcss: {
      // Add plugin names as key and arguments as value,
      // install them before as dependencies with npm or yarn
      plugins: {
        // See https://github.com/cuth/postcss-pxtorem#options
        'postcss-pxtorem': {
          unitPrecision: 8,
          propList: ['font', 'font-size', 'line-height']
        }
      },
      preset: {
        // Change the postcss-preset-env settings
        // See https://github.com/csstools/postcss-preset-env#options
        stage: 3,
        autoprefixer: {
          flexbox: 'no-2009',
          grid: 'no-autoplace'
        },
        importFrom: [
          // './node_modules/@lbzui/vue/src/assets/css/variables/variables.css'
          './assets/css/lbzui/variables.css' // your custom CSS Variables
        ]
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
