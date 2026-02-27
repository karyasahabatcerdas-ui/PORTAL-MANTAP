const CACHE_NAME = 'mantap1-ksc-v1';
const urlsToCache = [
  '/mantap-1/',
  '/mantap-1/index.html',
  '/mantap-1/manifest.json',
  '/mantap-1/icon-192.png',
  '/mantap-1/icon-512.png'
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
