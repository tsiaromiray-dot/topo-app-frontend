const CACHE_NAME = 'topo-app-v1';
const urlsToCache = [
  'index.html',
  'dashboard.html',
  'admin.html',
  'manifest.json',
  'icon.svg',
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
