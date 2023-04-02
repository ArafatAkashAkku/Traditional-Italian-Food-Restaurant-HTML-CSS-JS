// const CACHE_NAME = `traditional italian food restaurant`;

// // Use the install event to pre-cache all initial resources.
// self.addEventListener('install', event => {
//   event.waitUntil((async () => {
//     const cache = await caches.open(CACHE_NAME);
//     cache.addAll([
//       '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/',
//       '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/images/',
//       '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/js/index.js',
//       '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/css/index.css',
//       '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/css/responsive.css'
//     ]);
//   })());
// });

// self.addEventListener('fetch', event => {
//   event.respondWith((async () => {
//     const cache = await caches.open(CACHE_NAME);

//     // Get the resource from the cache.
//     const cachedResponse = await cache.match(event.request);
//     if (cachedResponse) {
//       return cachedResponse;
//     } else {
//         try {
//           // If the resource was not in the cache, try the network.
//           const fetchResponse = await fetch(event.request);

//           // Save the resource in the cache and return it.
//           cache.put(event.request, fetchResponse.clone());
//           return fetchResponse;
//         } catch (e) {
//           // The network failed.
//         }
//     }
//   })());
// });


var cacheName = 'traditional italian food restaurant';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/',
        '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/images/',
        '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/js/index.js',
        '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/css/index.css',
        '/Traditional-Italian-Food-Restaurant-HTML-CSS-JS/css/responsive.css'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});