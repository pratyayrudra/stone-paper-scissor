const cacheName = "site"
const assets = [
    "./",
    "./index.html",
    "./assets/css/style.css",
    "./assets/js/index.js",
    "./images/logo.png",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
]

// Installing Service Worker
self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[Service Worker] Caching all content');
            return cache.addAll(assets);
        })
    );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
