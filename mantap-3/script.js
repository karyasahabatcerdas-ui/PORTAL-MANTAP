  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js') // Memanggil file fisik
        .then(function(reg) {
          console.log('MANTAP-3: ServiceWorker Aktif!', reg.scope);
        })
        .catch(function(err) {
          console.log('MANTAP-3: ServiceWorker Gagal:', err);
        });
    });
  }