const CACHE_NAME = 'mantap4-ksc-v1';
const urlsToCache = [
  '/mantap-4/',
  '/mantap-4/index.html',
  '/mantap-4/manifest.json',
  '/mantap-4/icon-192.png',
  '/mantap-4/icon-512.png'
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
