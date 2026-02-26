self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Biarkan browser mengambil data secara normal
  e.respondWith(fetch(e.request));
});
