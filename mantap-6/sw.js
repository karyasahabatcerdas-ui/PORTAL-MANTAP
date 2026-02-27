const CACHE_NAME = 'mantap6-ksc-v1';
const urlsToCache = [
  '/mantap-6/',
  '/mantap-6/index.html',
  '/mantap-6/manifest.json',
  '/mantap-6/icon-192.png',
  '/mantap-6/icon-512.png'
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
