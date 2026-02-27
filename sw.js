const CACHE_NAME = 'mantapportal-v1';
const urlsToCache = [
  '/PORTAL-MANTAP/',
  '/PORTAL-MANTAP/index.html',
  '/PORTAL-MANTAP/manifest.json',
  '/PORTAL-MANTAP/icon-192.png',
  '/PORTAL-MANTAP/icon-512.png'
];

self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Biarkan browser mengambil data secara normal
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
