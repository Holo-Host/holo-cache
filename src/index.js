/* global addEventListener, fetch */

// https://tools.ietf.org/html/rfc2181#section-8
const MAX_TTL = 2 ** 31 - 1

addEventListener('fetch', event => {
  event.respondWith(fetch(event.request, {
    cf: {
      cacheEverything: true,
      cacheTtlByStatus: {
        '200-399': MAX_TTL,
        '400-499': 1,
        '500-599': 0
      }
    }
  }))
})
