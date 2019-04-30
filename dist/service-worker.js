const CACHE_NAME_STATIC = 'ohsija-static-v0.1';
const CACHE_NAME_DATA = 'ohsija-data-v0.1';
const STATIC_FILES_CACHELIST = [
  '/',
  'index.html',
  'download.html',
  'js/index.js',
  'js/download.js',
  'res/img/ss1.png',
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME_STATIC).then(cache => {
      console.log('[ServiceWorker] Caching static files');
      return cache.addAll(STATIC_FILES_CACHELIST);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  console.log('[ServiceWorker] Activate');

  evt.waitUntil(
    caches.keys(CACHE_NAME_STATIC).then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key != CACHE_NAME_STATIC && key != CACHE_NAME_DATA) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', evt => {
  console.log('[ServiceWorker] Fetching');

  evt.respondWith(
    caches.open(CACHE_NAME_STATIC).then(cache => {
      return cache.match(evt.request).then(res => {
        return res || fetch(evt.request);
      });
    })
  );
});
