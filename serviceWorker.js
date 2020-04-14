const cacheName = "site-v1"
const assets = [
    "./",
    "./index.html",
    "./style.css",
    "./index.js",
    "./images/logo.png"
]

// Installing Service Worker
self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[Service Worker] Caching all: app shell and content');
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
