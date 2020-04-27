// vue
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// @nuxtjs/svg
declare module '*.svg?inline' {
  const content: any
  export default content
}

declare module '*.svg?raw' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export default content
}
