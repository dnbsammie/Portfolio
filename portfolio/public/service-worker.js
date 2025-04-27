const CACHE_NAME = 'portafolio-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/src/styles/global.css',
    '/src/styles/home.css',
    '/src/styles/about.css',
    '/src/styles/projects.css',
    '/src/styles/profile.css',
    '/src/styles/contact.css',
    '/src/styles/components/headerMenu.css',
    '/src/styles/components/videoModal.css',
    '/src/assets/icons/favicon-16x16.png',
    '/src/assets/icons/favicon-32x32.png',
    '/src/assets/icons/favicon-64x64.png',
    '/src/assets/icons/favicon-128x128.png',
    '/src/assets/icons/favicon-256x256.png',
    '/src/assets/icons/favicon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        })
    );
});
