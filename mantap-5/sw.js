const CACHE_NAME = 'mantap5-ksc-v1';
const urlsToCache = [
  '/mantap-5/',
  '/mantap-5/index.html',
  '/mantap-5/manifest.json',
  '/mantap-5/icon-192.png',
  '/mantap-5/icon-512.png'
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
