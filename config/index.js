export default {
  // Mandatory
  name: 'LAN Bizhong',
  description: "LAN Bizhong's personal website",
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://lanbizhong.com'
      : 'http://localhost:3000',
  color: {
    primary: '#8ab4f8',
    error: '#f28b82',
    theme: '#121212'
  },

  // Optional
  analytics: {
    // Remove
    // comment out: nuxt.config.js#L70-L76
    baidu: '5d25fff5fe2d57f369a0391ee2a2b8e6',

    // Remove
    // uninstall: `npm uni @nuxtjs/google-analytics`
    // comment out: nuxt.config.js#L113-L121
    google: 'UA-139218842-1'
  },
  twitter: {
    // Remove
    // reset default value: `undefined`
    card: 'summary',
    site: '@lanbizhong',
    creator: '@lanbizhong'
  }
}
