/* eslint-disable */

// Enable rangeRequests (Safari requires)
workbox.routing.registerRoute(
  /\.(mp4|webm)/,
  new workbox.strategies.CacheFirst({
    plugins: [new workbox.rangeRequests.Plugin()]
  }),
  'GET'
)
