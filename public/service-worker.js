self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('cache-v1').then(cache =>
      cache.match(event.request).then(resp =>
        resp || fetch(event.request).then(r => {
          cache.put(event.request, r.clone());
          return r;
        })
      )
    )
  );
});
