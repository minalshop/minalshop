// MINAL service worker — minimal by design: network-first, nothing cached,
// so customers always see the latest shop version. Required for installability.
self.addEventListener('install', (event) => { self.skipWaiting(); });
self.addEventListener('activate', (event) => { self.clients.claim(); });
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
