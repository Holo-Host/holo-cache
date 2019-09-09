fetch(event.request, {
  cf: {
    cacheEverything: true,
    cacheTtlByStatus: {
      "200-399": 2147483647,
      "404": 1,
      "500-599": 0
    }
  }
})
