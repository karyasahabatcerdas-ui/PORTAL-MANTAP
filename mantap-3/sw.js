const CACHE_NAME = 'mantap3-ksc-v1';
const urlsToCache = [
  '/mantap-3/',
  '/mantap-3/index.html',
  '/mantap-3/manifest.json',
  '/mantap-3/icon-192.png',
  '/mantap-3/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
